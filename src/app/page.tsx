'use client'
import React, { useState } from 'react';
import { Landing } from '@/components/landing/landing';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import MapComponent from '@/components/mapComponent/mapComponent';

export type currentBlockRenderingType = 'student' | 'business';

export default function Home() {

    const [currentRenderingBlock, setCurrentRenderingBlock] = useState<currentBlockRenderingType>('student')
  return (
    <main className={'main'}>
        <Header currentRenderingBlock={currentRenderingBlock} setCurrentRenderingBlock={setCurrentRenderingBlock}/>
        <Landing currentRenderingBlock={currentRenderingBlock}/>
        <Footer/>
    </main>
  )
}

