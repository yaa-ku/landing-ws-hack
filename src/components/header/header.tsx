// @flow
import * as React from 'react';
import s from './header.module.scss'
import { Navigation } from '@/components/naviganion/navigation';
import { MainInfoBlock } from '@/components/mainInfoBlock/mainInfoBlock';
import clsx from 'clsx';

export const Header = () => {
    return (
        <div className={clsx(s['header'], 'section')}>
            <Navigation/>
            <MainInfoBlock/>
        </div>
    );
};