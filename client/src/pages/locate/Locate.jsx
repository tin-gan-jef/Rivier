import React from 'react'
import * as Loader from "react-loader-spinner";
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import './locate.css'

export default function Locate() {
    const { isLoading } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    });
    if(!isLoading) return <div className="locate-wave">
        <Loader.Oval
            className="loader"
            height={20}
            width={20}
            color="white"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="darkblue"
            strokeWidth={4}
            strokeWidthSecondary={4}
  />
        Loading... 
    </div>;
    return <Map />
}

function Map() {
    return <GoogleMap zoom={10} center={{lat: 44, lng:-80}}
    mapContainerClassName="map-container" ></GoogleMap>
}

