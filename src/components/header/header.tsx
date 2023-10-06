// @flow
import * as React from 'react';
import s from './header.module.scss'
import { Navigation } from '@/components/naviganion/navigation';
import { MainInfoBlock } from '@/components/mainInfoBlock/mainInfoBlock';
import { MissionBlock } from '@/components/missionBlock/missionBlock';
import { currentBlockRenderingType } from '@/app/page';
import clsx from 'clsx';

export type Props = {
    currentRenderingBlock: currentBlockRenderingType;
    setCurrentRenderingBlock: React.Dispatch<React.SetStateAction<currentBlockRenderingType>>;
};
export const Header = ({currentRenderingBlock, setCurrentRenderingBlock}:Props) => {
    return (
        <div className={clsx(s['header'], 'section')}>
            <Navigation currentRenderingBlock={currentRenderingBlock} setCurrentRenderingBlock={setCurrentRenderingBlock} />
            <MainInfoBlock/>
        </div>
    );
};