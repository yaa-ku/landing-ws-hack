// @flow
import * as React from 'react';
import s from './missionBlock.module.scss';
import Image from 'next/image';
import Briefcase from 'public/icons/briefcase.svg';
import Chart from 'public/icons/chart.svg';
import Money from 'public/icons/money.svg';
import clsx from 'clsx';

type Props = {

};
export const MissionBlock = (props: Props) => {
    return (
        <div className={clsx(s['mission-block'], 'section')}>
            <div className={s['mission-block__paragraph']}>
                <h2 className={'title-3'}>Реализация <br/>
                    <span className={s['highlight']}>
                        «третьей миссии»
                        <br/>
                    </span>
                    университетов
                </h2>
                <p className={s['link']} title={'Главная цель третьей миссии — интеграция университетов в региональные и местные программы развития, передача знаний и технологий, а также развитие инноваций, предпринимательской культуры и человеческого капитала.'}>Что такое «третья миссия»</p>
            </div>
            <Image className={s['img']} src={'/hand.png'} alt={'hand img'} width={123} height={270}></Image>
            <div className={s['list']}>
                <div className={s['list__item']}>
                    <div className={s['svg']}>
                        <Chart/>
                    </div>
                    <p className={'body-1--primary'}>
                        ВУЗы повышают свои KPI
                    </p>
                </div>
                <div className={s['list__item']}>
                    <div>
                        <Money className={s['svg']}/>
                    </div>
                    <p className={'body-1--primary'}>
                        Студенты получают призы за активность, видят анонсы мероприятий вуза и могут найти работу
                    </p>
                </div>
                <div className={s['list__item']}>
                    <div>
                        <Briefcase/>
                    </div>
                    <p className={'body-1--primary'}>
                        Бизнес может продвигать свои услуги на аудиторию студентов или найти сотрудников
                    </p>
                </div>

            </div>
        </div>
    );
};