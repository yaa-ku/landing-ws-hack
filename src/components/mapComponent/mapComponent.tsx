'use client'
import React, {useEffect, useState} from 'react';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import './map.scss';

async function get_request_api<T>(url: string): Promise<T> {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<T>
        })
}

const MapComponent: React.FC = () => {
    interface Point {
        longitude: number,
        latitude: number,
        address: string,
    }

    interface Partner {
        id: number,
        title: string,
        iconUrl: string,
        point: Point,
    }

    interface Service {
        title: string,
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
            setMarkers(data);
        }
        fetchData()
    }, [])


    function handleMarkerClick(marker: Partner) {
        const fetchData = async () => {
            let data = await get_request_api<PartnerDescription>("https://ht.dicamp.ru/api/partners/" + marker.id)
            setCurrentPartner(data);
        }
        fetchData()
    }

    return (
        <div className="horizontal-split-container">
            <div className="left-panel">
                <YMaps>
                    <Map
                        defaultState={{
                            center: [48.4827, 135.084],
                            zoom: 10,
                        }}
                        className="map"
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
                                    iconImageHref: "https://ht.dicamp.ru/" + marker.iconUrl,
                                    iconImageSize: [60, 30],

                                }}
                                onClick={() => handleMarkerClick(marker)}
                            />
                        ))}
                    </Map>
                </YMaps>

            </div>
            {currentPartner ? <div className="right-panel">
                <div className="title-img-container">
                    <img className={'image'} src={`https://ht.dicamp.ru/${currentPartner?.iconUrl}`} alt=""/>
                    <div className={'name-address'}>
                        <h1>{currentPartner?.title}</h1>
                        <p>{currentPartner?.point.address}</p>
                    </div>

                </div>
                <p>{currentPartner?.description}</p>
                <p className={'text_cell_'}>
                    Возможное использование баллов:
                </p>
                <p>{currentPartner?.services.map((marker: Service) => (
                    <li>{marker.title}</li>
                ))}
                </p>

            </div> : ""}
        </div>
    );
};

export default MapComponent;