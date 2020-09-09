import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { APIKey } from '../data/APIKey';
import { MapStyle } from './MapStyle';


const createMapOptions = () => {
  return {
    styles: MapStyle
  }
}


const ContactMap = (props: any) => {
    const [center] = useState({lat: 43.072172, lng: 0.585051 });
    const [zoom] = useState(9);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: APIKey }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={createMapOptions}   
        >
          <Marker
            lat={43.072172}
            lng={0.585051}
            name="My Marker"
            color="#d39d30"
          />
        </GoogleMapReact>
      </div>
    );
}

export default ContactMap;