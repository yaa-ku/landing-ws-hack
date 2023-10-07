// @flow
'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import s from './bestStudents.module.scss'
import clsx from 'clsx';

const url = "https://festu.dicamp.ru/api/ranking-service/user-rank/top?toRank=3&type=BONUSES_EARNED&period=ALL_TIME&ownerId=58790a6a-7ebf-4ca0-b8f8-bfce0ead9be8"

interface Student{
    points: number,
    users: Array<User>,
}

interface User{
    rank: number,
    user: Profile
    currentUser: boolean,
    points: number,
}

interface Profile{
    id: string,
    imageId: string,
    name: string
}

export const BestStudents = () => {
    const [allStudents, setAllStudents] = useState<Array<Student>>()
    async function api<T>(url: string): Promise<T> {
        console.log("API REQUEST")
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    console.log("API RESPONSE BAD")
                    throw new Error(response.statusText)
                }
                console.log("API RESPONCE OK")
                return response.json() as Promise<T>
            })
    }
    useEffect(() => {
        const fetchData = async () => {
            let data = await api<Array<Student>>(url)
            console.log(data)
            setAllStudents(data)
        }
        fetchData()
    }, [])
    return (
        <div className={clsx(s['best_students_block'], 'section')}>
            <div className={s['block-text-title']}>
                <h3 className={clsx(s['block_title'], 'title-3')}>
                    <span className={s['highlight']}>Лучшие</span> студенты</h3>
            </div>
            <div className={s['wrapper']}>
                <div className={clsx(s['best_students_block_list'])}>
                    {allStudents?.map((student, i) =>
                        <div className={s['profile_item']} key={student.users.at(0)?.user.id}>
                            <span>{student.users.at(0)?.rank}</span>
                            <img className={clsx(s['profile_image'], i === 0? s['borderGold'] : i === 1? s['borderSilver'] : i === 2? s['borderBronze'] : '')} src={`https://festu.dicamp.ru/api/cs-service/containers/${student.users.at(0)?.user.imageId}/download/format-or-original/?format=preview`} alt="Картинка профиля" />
                            <div className={s['gradient_div']}>
                                <div>
                                    <div className={s['student_info']}>
                                        <div className={s['name_and_uni']}>
                                            <span className={s['student_name']}>{student.users.at(0)?.user.name}</span>
                                            <span>ДВГУПС</span>
                                        </div>
                                        <div className={s['points_and_text']}>
                                            <span>{student.users.at(0)?.points}</span>
                                            <span>баллов</span>
                                        </div>
                                    </div>
                                    <div className={s['gradient_line']}></div>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    );
};