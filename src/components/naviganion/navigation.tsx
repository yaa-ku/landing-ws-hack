'use client'
// @flow
import * as React from 'react';
import s from './navigation.module.scss';
import Logo from 'public/logo.svg';
import Link from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';

type ActivePageType = 'students' | 'business';

export const Navigation = () => {

    const [activePage, setActivePage] = useState<ActivePageType>('students');

    return (
        <div className={s['navigation']}>
            <Logo className={s['navigation__logo']}/>
            <div className={s['navigation__links']}>
                <Link
                    className={clsx('link', activePage === 'students' && s['active-link'])}
                    href={'/'}
                    scroll={false}
                    onClick={() => setActivePage('students')}
                >
                    Студентам
                </Link>
                <Link
                    className={clsx('link', activePage === 'business' && s['active-link'])}
                    href={'/businessPage/'}
                    scroll={false}
                    onClick={() => setActivePage('business')}
                >
                    Бизнес-партнёрам
                </Link>
            </div>

        </div>
    );
};