import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                // style={{ width: "35%", height: "30%" }}
                containerStyle={{ position: 'relative', width: '100%', height: '320px' }}
                // style={style}
                zoom={16}
                initialCenter={
                    {
                        lat: -1.2653712484771338,
                        lng: 36.79825221936327,
                    }
                }
            >
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
            </Map>
            // -1.2653712484771338, 36.79825221936327
        )
    }
}

// const containerStyle = {
//     position: 'relative',
//     width: '100%',
//     height: '100%'
// }

export default GoogleApiWrapper({
    apiKey: "AIzaSyC_HndgijGfo3m0-ofhV-9_BmeIKjdDcZE"
})(MapContainer);