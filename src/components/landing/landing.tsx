import s from './landing.module.scss';
import * as React from 'react';
import { StudentsBlock } from '@/components/studentsBlock/studentsBlock';
import { BusinessBlock } from '@/components/businessBlock/businessBlock';
import { currentBlockRenderingType } from '@/app/page';
import { MissionBlock } from '@/components/missionBlock/missionBlock';

type Props = {
    currentRenderingBlock: currentBlockRenderingType;
};
export const Landing = ({currentRenderingBlock}: Props) => {
    return (
        <div className={'section'}>
            <MissionBlock/>
            {currentRenderingBlock==='student' ?
            <StudentsBlock/>
            :
            <BusinessBlock/>}
        </div>
    );
};