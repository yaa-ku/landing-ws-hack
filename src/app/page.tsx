
import {Landing} from '@/components/landing/landing';
import MapComponent from '@/components/mapComponent/mapComponent';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';


export default function Home() {
    return (
        <main className={'main'}>
            <p className={'карта-1'}>h1</p>
            <p className={'body-1'}>body-1</p>
            <p className={'body-2'}>body-2</p>
            <p className={'link'}>link</p>
            <MapComponent/>
            <Landing/>
        </main>
    )
}

