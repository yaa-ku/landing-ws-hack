// @flow 
import * as React from 'react';
import s from './navigation.module.scss';
import { currentBlockRenderingType } from '@/app/page';

type Props = {
    currentRenderingBlock: currentBlockRenderingType;
    setCurrentRenderingBlock: React.Dispatch<React.SetStateAction<currentBlockRenderingType>>;
};
export const Navigation = ({setCurrentRenderingBlock}: Props) => {
    return (
        <div>
            <p onClick={() => setCurrentRenderingBlock('student')}>Students</p>
            <p onClick={() => setCurrentRenderingBlock('business')}>Bussiness</p>
        </div>
    );
};