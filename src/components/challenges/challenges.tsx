// @flow 
'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import s from './challenges.module.scss'

interface TotalData{
    festu: TemplateJson,
    pnu: TemplateJson
    campus: TemplateJson
}
interface TemplateJson{
    0:
    {
        type: string;
        value: number;
    }
}

export const Challenges = () => {
    let urlTotalUsersF = `https://festu.dicamp.ru/api/auth-service/statistics/by-types?types=TOTAL_USERS`
    let urlTotalUsersP = `https://pnu.dicamp.ru/api/auth-service/statistics/by-types?types=TOTAL_USERS`
    let urlTotalUsersC = `https://campus.dicamp.ru/api/auth-service/statistics/by-types?types=TOTAL_USERS`

    let urlTotalEventsF = `https://festu.dicamp.ru/api/event-service/statistics/by-types?types=TOTAL_EVENTS`
    let urlTotalEventsP = `https://pnu.dicamp.ru/api/event-service/statistics/by-types?types=TOTAL_EVENTS`
    let urlTotalEventsC = `https://campus.dicamp.ru/api/event-service/statistics/by-types?types=TOTAL_EVENTS`

    let urlTotalEarnedBonusF = `https://festu.dicamp.ru/api/event-service/statistics/by-types?types=TOTAL_BONUS_VALUE`
    let urlTotalEarnedBonusP = `https://pnu.dicamp.ru/api/event-service/statistics/by-types?types=TOTAL_BONUS_VALUE`
    let urlTotalEarnedBonusC = `https://campus.dicamp.ru/api/event-service/statistics/by-types?types=TOTAL_BONUS_VALUE`

    let urlTotalSpentBonusF = `https://festu.dicamp.ru/api/order-service/statistics/by-types?types=TOTAL_BONUSES_SPENT`
    let urlTotalSpentBonusP = `https://pnu.dicamp.ru/api/order-service/statistics/by-types?types=TOTAL_BONUSES_SPENT`
    let urlTotalSpentBonusC = `https://campus.dicamp.ru/api/order-service/statistics/by-types?types=TOTAL_BONUSES_SPENT`

    const [totalUsers, setTotalUsers] = useState<TotalData>()
    const [totalEvents, setTotalEvents] = useState<TotalData>()

    const [totalEarnedBonus, setTotalEarnedBonus] = useState<TotalData>()
    const [totalSpentBonus, setTotalSpentBonus] = useState<TotalData>()


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

        let festuData = await api<TemplateJson>(urlTotalUsersF)
        let pnuData = await api<TemplateJson>(urlTotalUsersP)
        let campusData = await api<TemplateJson>(urlTotalUsersC)
        
        let festuEventData = await api<TemplateJson>(urlTotalEventsF)
        let pnuEventData = await api<TemplateJson>(urlTotalEventsP)
        let campusEventData = await api<TemplateJson>(urlTotalEventsC)

        let festuEarnedBonusData = await api<TemplateJson>(urlTotalEarnedBonusF)
        let pnuEarnedBonusData = await api<TemplateJson>(urlTotalEarnedBonusP)
        let campusEarnedBonusData = await api<TemplateJson>(urlTotalEarnedBonusC)

        let festuSpentBonusData = await api<TemplateJson>(urlTotalSpentBonusF)
        let pnuSpentBonusData = await api<TemplateJson>(urlTotalSpentBonusP)
        let campusSpentBonusData = await api<TemplateJson>(urlTotalSpentBonusC)


        let totalUsers: TotalData = {
            festu: festuData,
            pnu: pnuData,
            campus: campusData
        }
        let totalEvents: TotalData = {
            festu: festuEventData,
            pnu: pnuEventData,
            campus: campusEventData
        }
        let totalEarnedBonus: TotalData = {
            festu: festuEarnedBonusData,
            pnu: pnuEarnedBonusData,
            campus: campusEarnedBonusData
        }
        let totalSpentBonus: TotalData = {
            festu: festuSpentBonusData,
            pnu: pnuSpentBonusData,
            campus: campusSpentBonusData
        }

        setTotalUsers(totalUsers)
        setTotalEvents(totalEvents)
        setTotalEarnedBonus(totalEarnedBonus)
        setTotalSpentBonus(totalSpentBonus)
        }
        fetchData()
    }, [])

    return (
        <div className={s['challenges_block']}>
            <h3>Наши показатели и ваши достижения</h3>
            <p>{totalUsers?.festu[0].value!! + totalUsers?.pnu[0].value!! + totalUsers?.campus[0].value!!} пользователей в системе</p>
            <p>{totalEvents?.festu[0].value!! + totalEvents?.pnu[0].value!! + totalEvents?.campus[0].value!!} активностей выполнено</p>
            <p>{totalEarnedBonus?.festu[0].value!! + totalEarnedBonus?.pnu[0].value!! + totalEarnedBonus?.campus[0].value!! } баллов заработано</p>
            <p>{totalSpentBonus?.festu[0].value!! + totalSpentBonus?.pnu[0].value!! + totalSpentBonus?.campus[0].value!!} баллов потрачено</p>

        </div>
    );
};