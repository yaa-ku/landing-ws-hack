'use client'
import React, {useEffect, useState} from 'react';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';


const MapComponent: React.FC = () => {

    interface TotalUsers {
        id: number,
        coordinates: Array<number>,
        name: string,
        iconUrl: string,
    }

    const [markers, setMarkers] = useState<Array<TotalUsers>>();

    useEffect(() => {
        const fakeMarkerData: Array<TotalUsers> = [
            {id: 1, coordinates: [48.76, 135.03], name: 'Москва', iconUrl: 'https://ht.dicamp.ru/uploads/Logo_Background_Main_Or_e6f3c74fa5.jpg'},
            {id: 2, coordinates: [48.58, 135.05], name: 'Санкт-Петербург', iconUrl: 'https://ht.dicamp.ru/uploads/Logo_Background_Main_Or_e6f3c74fa5.jpg'},
        ];

        setMarkers(fakeMarkerData);
    }, []);

    return (
        <YMaps>
            <Map
                defaultState={{
                    center: [48.51578, 135.5117],
                    zoom: 10,
                }}
                style={{width: '400px', height: '400px'}}
            >
                {markers?.map((marker: TotalUsers) => (
                    <Placemark
                        key={marker.id}
                        geometry={marker.coordinates}
                        properties={{
                            hintContent: marker.name,
                        }}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: marker.iconUrl, // Используем URL-адрес изображения иконки с сервера
                            iconImageSize: [30, 30],
                        }}
                    />
                ))}
            </Map>
        </YMaps>
    );
};

export default MapComponent;