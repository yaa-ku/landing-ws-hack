'use client'
import React, {useEffect, useState} from 'react';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import './map.scss';
async function get_request_api<T>(url: string): Promise<T> {
    console.log("API REQUEST")
    console.log(url)
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                console.log("API RESPONSE BAD")
                throw new Error(response.statusText)
            }
            console.log("API RESPONCE OK")
            return response.json() as Promise<T>
        })
}

const MapComponent: React.FC = () => {
    interface Point {
        longitude: number,
        latitude: number,
        address: string
    }

    interface Partner {
        id: number,
        title: string,
        iconUrl: string,
        point: Point,
    }

    interface Service {
        title: string
    }

    interface PartnerDescription {
        id: number,
        title: string,
        description: string,
        iconUrl: string,
        point: Point,
        services: Array<Service>,
    }

    const [markers, setMarkers] = useState<Array<Partner>>();
    const [currentPartner, setCurrentPartner] = useState<PartnerDescription>();
    useEffect(() => {
        const fetchData = async () => {
            let data = await get_request_api<Array<Partner>>("https://ht.dicamp.ru/api/partners/list")
            console.log(data)
            setMarkers(data);
        }
        fetchData()
    }, [])


    function handleMarkerClick(marker: Partner) {
        const fetchData = async () => {
            let data = await get_request_api<PartnerDescription>("https://ht.dicamp.ru/api/partners/" + marker.id)
            console.log(data)
            setCurrentPartner(data);
        }
        fetchData()
        console.log(marker)
    }

    return (
        <div className="horizontal-split-container">
            <div className="left-panel">
                <YMaps>
                    <Map
                        defaultState={{
                            center: [48.51578, 135.5117],
                            zoom: 10,
                        }}
                        style={{width:'100%' , height: '100%'}}
                    >
                        {markers?.map((marker: Partner) => (
                            <Placemark
                                key={marker.id}
                                geometry={[marker.point.longitude, marker.point.latitude]}
                                properties={{
                                    hintContent: marker.title,
                                }}
                                options={{
                                    iconLayout: 'default#image',
                                    // iconContentLayout: '<div style="background-color: blue; width: 20px; height: 20px;"></div>',
                                    iconImageHref: "https://ht.dicamp.ru/" + marker.iconUrl, // Используем URL-адрес изображения иконки с сервера
                                    iconImageSize: [60, 30], // Установите размер как [60, 60] для круглой иконки
                                    // iconContentOffset: [0, 0],
                                }}
                                onClick={() => handleMarkerClick(marker)}
                            />
                        ))}
                    </Map>
                </YMaps>

            </div>
            <div className="right-panel">
                <div className="title-img-container">
                    <img className={'image'} src={`https://ht.dicamp.ru/${currentPartner?.iconUrl}`} alt=""/>
                    <div className={'name-address'}>
                        <h1>{currentPartner?.title}</h1>
                        <p>{currentPartner?.point.address}</p>
                    </div>

                </div>
                <p>{currentPartner?.description}</p>


            </div>
        </div>
    );
};

export default MapComponent;