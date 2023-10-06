// @flow
import * as React from 'react';
import s from './mainInfoBlock.module.scss'
import GooglePlay from 'public/Badge.svg';
import AppStore from 'public/Group.svg';
import Image from 'next/image';
import clsx from 'clsx';


type Props = {

};
export const MainInfoBlock = (props: Props) => {
    return (
        <div className={s['main-info-block']}>
            <Image src={'/owl.png'} alt={'owl'}
                   width={0}
                   height={0}
                   sizes="100%"
                   style={{ width: '50%', height: 'auto', aspectRatio: 710/620 }}/>

            <div className={s['main-info-block__text']}>
                <h1 className={clsx('title-1', s['title'])}>ПОЛУЧАЙ ПРИЗЫ ЗА АКТИВНОСТЬ!</h1>
                <div className={s['text__block']}>
                    <div className={s['text__paragraph']}>
                        <p className={'body-1--secondary'}>Цифровой кампус - это платформа
                            для студентов, вузов, власти и бизнеса</p>
                        <p className={'body-2'}>Скачивай приложение в сторах:</p>
                    </div>
                    <div className={s['text__links']}>
                        <a className={s['text__links-link']} href={'#'}>
                            <GooglePlay/>
                        </a>
                        <a className={s['text__links-link']} href={'#'}>
                            <AppStore/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};