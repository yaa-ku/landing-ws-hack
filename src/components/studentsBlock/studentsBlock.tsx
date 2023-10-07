// @flow
'use client'
import * as React from 'react';
import s from './studentsBlock.module.scss'
import { StudentInfolock } from '@/components/studentsBlock/studentInfoBlock/studentInfolock';
import clsx from 'clsx';
import { BestStudents } from '@/components/bestStudents/bestStudents';
import MapComponent from '@/components/mapComponent/mapComponent';

type Props = {

};
export const StudentsBlock = (props: Props) => {
    return (
        <div className={clsx(s['student-block'])}>
           <StudentInfolock/>
            <BestStudents/>
            <MapComponent/>
        </div>
    );
};