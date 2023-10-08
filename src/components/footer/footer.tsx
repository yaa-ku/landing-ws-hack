// @flow 
import * as React from 'react';
import s from './footer.module.scss'
import Logo from 'public/logo.svg';
import Link from 'next/link';
import clsx from 'clsx';


export const Footer = () => {
    return (
        <div className={clsx(s['footer'], 'section')}>
            <Logo className={s['footer__logo']}/>
            <div className={s['footer__link-list']}>
                <Link className={'link'} href={'#'}>Пользовательское соглашение</Link>
                <Link className={'link'} href={'#'}>Политика конфиденциальности</Link>
                <Link className={'link'} href={'#'}>Удаление персональных данных</Link>
            </div>
        </div>
    );
};