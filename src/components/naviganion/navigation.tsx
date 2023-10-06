// @flow 
import * as React from 'react';
import s from './navigation.module.scss';
import { currentBlockRenderingType } from '@/app/page';
import Logo from 'public/logo.svg';

type Props = {
    currentRenderingBlock: currentBlockRenderingType;
    setCurrentRenderingBlock: React.Dispatch<React.SetStateAction<currentBlockRenderingType>>;
};
export const Navigation = ({setCurrentRenderingBlock}: Props) => {
    return (
        <div className={s['navigation']}>
            <Logo className={s['navigation__logo']}/>
            <div className={s['navigation__links']}>
                <p  className={'link'} onClick={() => setCurrentRenderingBlock('student')}>Студентам</p>
                <p className={'link'} onClick={() => setCurrentRenderingBlock('business')}>Бизнес-партнёрам</p>
            </div>

        </div>
    );
};