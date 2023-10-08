'use client'
// @flow
import * as React from 'react';
import s from './form.module.scss'
import Image from 'next/image';
import clsx from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/ui-kit/button/button';

interface IFormInput {
    name: string;
    email: string;
    company: string;
    description: string;
    checkbox1: string;
    checkbox2: string;
}

export const Form = () => {
    const {register, handleSubmit} = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <div className={clsx(s['form'], 'section')}>
            <div className={s['title']}>
                <h2 className={'title-2'}>
                    <span className={s['highlight']}>
                        ПОДАЙТЕ ЗАЯВКУ
                    </span>
                    <br/>
                    И С ВАМИ СВЯЖУТСЯ!
                </h2>
                <p className={'body-1'}>
                    Разместите ваши промо-материалы, вакансии, опросы на постоянно растущую аудиторию студентов
                </p>
                <div className={s['img']}>
                    <Image src={'/hands.png'} alt={'img'} width={525} height={330}/>
                </div>
            </div>

            <form className={s['form-block']} onSubmit={handleSubmit(onSubmit)}>
                <div className={s['input-block']}>
                    <label className={'body-1'}
                           htmlFor={'name'}
                    >
                        ФИО
                    </label>
                    <input className={clsx(s['input'], 'body-1')}
                           id={'name'}
                           type="text"
                           placeholder={'Иванов Иван Иванович'}
                           {...register('name', {required: true})}
                    />
                </div>

                <div className={s['input-block']}>
                    <label className={'body-1'}
                           htmlFor={'email'}
                    >
                        Email
                    </label>
                    <input className={clsx(s['input'], 'body-1')}
                           id={'email'}
                           type="text"
                           placeholder={'smth@gmail.com'}
                           {...register('email', {required: true})}
                    />
                </div>

                <div className={s['input-block']}>
                    <label className={'body-1'}
                           htmlFor={'company'}
                    >
                        Компания
                    </label>
                    <input className={clsx(s['input'], 'body-1')}
                           id={'company'}
                           type="text"
                           placeholder={'Компания'}
                           {...register('company', {required: true})}
                    />
                </div>

                <div className={s['input-block']}>
                    <input className={clsx(s['text-area'], 'body-1')}
                           id={'description'}
                           type="text"
                           placeholder={'Краткое описание компании'}
                           {...register('description', {required: true})}
                    />
                </div>

                <div>
                    <label htmlFor={'checkbox-1'} className={'body-1'}>Интересует размещение рекламы </label>
                    <input type={'checkbox'} id={'checkbox-1'} {...register('checkbox1')}/>
                </div>

                <div>
                    <label htmlFor={'checkbox-2'} className={'body-1'}>Интересует размещение вакансий </label>
                    <input type={'checkbox'} id={'checkbox-2'} {...register('checkbox2')}/>
                </div>


                <Button type={'submit'}
                        label={'Отправить заявку'}
                        style={'secondary'}
                />
            </form>
        </div>
    );
};