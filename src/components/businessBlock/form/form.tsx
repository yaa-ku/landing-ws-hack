// @flow
import * as React from 'react';
import s from './form.module.scss'
import Image from 'next/image';
import clsx from 'clsx';

type Props = {

};
export const Form = (props: Props) => {
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
            <form className={s['form-block']} action="#">
                <div className={s['input-block']}>
                    <label className={'body-1'} htmlFor={'name'}>ФИО</label>
                    <input className={clsx(s['input'], 'body-1')} id={'name'} type="text" placeholder={'Иванов Иван Иванович'}/>
                </div>
                <div className={s['input-block']}>
                    <label className={'body-1'} htmlFor={'email'}>Email</label>
                    <input className={clsx(s['input'], 'body-1')} id={'email'} type="text" placeholder={'smth@gmail.com'}/>
                </div>
                <div className={s['input-block']}>
                    <label className={'body-1'} htmlFor={'company'}>Компания</label>
                    <input className={clsx(s['input'], 'body-1')} id={'company'} type="text" placeholder={'Компания'}/>
                </div>

                <div className={s['input-block']}>
                    <input className={clsx(s['text-area'], 'body-1')} id={'description'} type="text" placeholder={'Краткое описание компании'}/>
                </div>

                <div className={s['checkbox-block']}>
                    <label htmlFor="check-1"></label>
                </div>

                <button className={clsx(s['button'], 'body-2')}>Отправить заявку</button>
            </form>
        </div>
    );
};