import { StudentInfolock } from '@/components/studentsBlock/studentInfolock';
import { BestStudents } from '@/components/bestStudents/bestStudents';
import MapComponent from '@/components/mapComponent/mapComponent';
import * as React from 'react';
import s from './studentPage.module.scss'

export default function StudentPage() {
  return (
    <main className={s['student-page']}>
        <StudentInfolock/>
        <BestStudents/>
        <MapComponent/>
    </main>
  )
}

