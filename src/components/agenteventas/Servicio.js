import React, { useEffect, useState } from 'react';
import Persona from './Persona';
import Empresa from './Empresa';
import { fetchGETPOSTPUTDELETE } from '../../helpers/fetch';

const Servicio = () => {
  const [getServicio, setGetServicio] = useState([]);

  //modal de particular particualar discount create para la tabla igual

  //usuario particular 

  const getServices = () => {
    fetchGETPOSTPUTDELETE('services')
      .then((info) => info.json())
      // .then((data) => console.log(data.data));
      .then((datos) => setGetServicio(datos.data));
  };

  // const getParticularDiscount = () => {
  //   fetchGETPOSTPUTDELETE('particular_discount')
  //     .then((info) => info.json())
  //     // .then((data) => console.log(data.data));
  //     .then((datos) => setGetServicio(datos.data));
  // };


  useEffect(()=>{
    getServices()
    // getParticularDiscount()
    

  }, [])

  console.log(getServicio);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="table-responsive barra">
            <h6>Precio para el publico en general</h6>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Tipo de prueba</th>
                  <th scope="col">Costo</th>
                </tr>
              </thead>
              <tbody>

                {getServicio.length > 0 && getServicio[0].services.map((servicio, i ) => (

                  <tr key={i}>
                  <td>{servicio.name ? servicio.name : ""}</td>
                  <td>{servicio.last_price && servicio.last_price.amount ? servicio.last_price.amount : ""}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="barra">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Precio para personas
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <Persona />
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Precio para empresas
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <Empresa />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicio;
