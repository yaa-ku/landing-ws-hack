import "src/styles/index.scss";
import type { Metadata } from 'next'
import { PropsWithChildren } from 'react';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { MissionBlock } from '@/components/missionBlock/missionBlock';


//TODO: change metadata
export const metadata: Metadata = {
  title: 'Цифровой кампус',
  description: 'Лендинг цифрового кампусав',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <MissionBlock/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
