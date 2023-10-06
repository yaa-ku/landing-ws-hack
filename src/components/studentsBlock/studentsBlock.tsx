// @flow
import * as React from 'react';
import s from './studentsBlock.module.scss'
import { StudentInfolock } from '@/components/studentsBlock/studentInfoBlock/studentInfolock';
import clsx from 'clsx';

type Props = {

};
export const StudentsBlock = (props: Props) => {
    return (
        <div className={clsx(s['student-block'], 'section')}>
           <StudentInfolock/>
        </div>
    );
};