import s from './businessPage.module.scss';
import { Form } from '@/components/businessBlock/form/form';
export default function BusinessPage(){
    return (
        <main className={s['business-page']}>
            <Form/>
        </main>
    )
}