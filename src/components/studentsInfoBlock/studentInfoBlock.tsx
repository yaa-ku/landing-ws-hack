// @flow 
import * as React from 'react';
import s from './studentInfoBlock.module.scss'
import Image from 'next/image';
import clsx from 'clsx';

export const StudentInfoBlock = () => {
    return (
        <div className={clsx(s['info-block'], 'section')}>
            <div className={s['info-block__article']}>
                <div className={s['article__img']}>
                        <Image src={'/girl-img.png'} alt={'girl-img'}
                               width={543}
                               height={547}
                        />
                </div>
                <div className={s['article__paragraph']}>
                    <h2 className={'title-2--secondary'}>
                        <span className={s['highlight']}>СТУДЕНТАМ</span>
                    </h2>
                    <p className={'body-1--secondary'}>
                        Раньше за достижения студенты получали только грамоты, а теперь - реальные подарки и призы!
                        А ещё любой студент может в приложении найти подработку параллельно учёбе!
                    </p>
                </div>
            </div>

            <div className={s['info-block__article']}>
                <div className={s['article__paragraph']}>
                    <h2 className={'title-2--secondary'}>
                        ПОЛУЧИ
                        <br/>
                        <span className={s['highlight']}>БЕСПЛАТНЫЕ</span>
                        <br/>
                        ПРИЗЫ ОТ ВУЗА И ПАРТНЁРОВ
                    </h2>
                    <p className={'body-1--secondary'}>
                        Получи ноутбук, сертификаты, абонементы в бассейн, билеты на хоккей и многое другое!
                    </p>
                </div>
                <div className={s['article__img']}>
                        <Image src={'/partners.png'} alt={'girl-img'}
                               width={776}
                               height={424}/>
                </div>
            </div>

            <div className={s['info-block__article']}>
                <div className={s['article__img']}>
                    <Image src={'/screens.png'} alt={'girl-img'}
                           width={776}
                           height={506}/>
                </div>
                <div className={s['article__paragraph']}>
                    <h2 className={'title-2--secondary'}>
                        КАК? ПРОСТО
                        <br/>
                        БУДЬ
                        <span> </span>
                        <span className={s['highlight']}>АКТИВНЫМ!</span>
                        ПРИЗЫ ОТ ВУЗА И ПАРТНЁРОВ
                    </h2>
                    <p className={'body-1--secondary'}>
                        Копи баллы за достижения по направлениям, которые тебе интересны, и обменивай их
                        на подарки
                    </p>
                </div>
            </div>

            <div className={clsx(s['info-block__article'])}>
                <div className={ clsx(s['article__paragraph'], s['align-top'])}>
                    <h2 className={clsx('title-2--secondary')}>
                        БУДЬ<span> </span><span className={s['highlight']}>В КУРСЕ!</span>
                    </h2>
                    <p className={'body-1--secondary'}>
                        Вакансии для студентов, стажировки в топовых компаниях, новости вуза ждут тебя в приложении
                    </p>
                </div>
                <div className={s['article__img']}>
                    <Image src={'/screens-2.png'} alt={'girl-img'}
                           width={672}
                           height={593}/>
                </div>
            </div>
        </div>


    );
};