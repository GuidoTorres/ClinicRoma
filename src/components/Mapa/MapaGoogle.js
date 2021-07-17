import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import { TransitLayer } from '@react-google-maps/api';
const mapContainerStyle = {
  width: "100%",
  height: "190px",
};

const center = {
  lat: -12.04318,
  lng: -77.02824,
};

const Mapa = ({ dataMapa, setDataMapa, editar, dataSelected }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC14u7ry3uBKIHsEnEql4sA2MaebwNJWI4",
  });


  const center2 = {
    lat:
      dataSelected &&
      dataSelected.corporation &&
      dataSelected.corporation.address &&
      dataSelected.corporation.address.map_latitude
        ? Number(dataSelected.corporation.address.map_latitude)
        : "",
    lng:
      dataSelected &&
      dataSelected.corporation &&
      dataSelected.corporation.address &&
      dataSelected.corporation.address.map_length
        ? Number(dataSelected.corporation.address.map_length)
        : "",
  };

  const position = {
    lat: Number(dataMapa && dataMapa.lat),
    lng: Number(dataMapa && dataMapa.lng),
  };

  const position2 = {
    lat:
      dataSelected &&
      dataSelected.corporation &&
      dataSelected.corporation.address &&
      dataSelected.corporation.address.map_latitude
        ? Number(dataSelected.corporation.address.map_latitude)
        : -12.04318,
    lng:
      dataSelected &&
      dataSelected.corporation &&
      dataSelected.corporation.address &&
      dataSelected.corporation.address.map_length
        ? Number(dataSelected.corporation.address.map_length)
        : -77.02824,
  };

  // const onLoad = transitLayer => {
  //   // console.log('transitLayer: ', transitLayer)
  // }

  return isLoaded ? (
    <GoogleMap
      id="transit-example"
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={editar ? center2 : center}
      onClick={(e) => setDataMapa({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
    >
      <Marker
        // onLoad={onLoad}
        position={editar ? position2 :position}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Mapa;
