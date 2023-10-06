import { Landing } from '@/components/landing/landing';
import { Challenges } from '@/components/challenges/challenges';
import { BestStudents } from '@/components/best_students/bestStudents';

export default function Home() {
  return (
    <main className={'main'}>
        <Challenges/>
        {/* <BestStudents/> */}
        <Landing/>
    </main>
  )
}

