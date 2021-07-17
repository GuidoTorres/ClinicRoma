import React from 'react';
import logo from '../../assets/icons/Isotipo.png';
const Perfil = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
          <div className="barra procesa__perfil">
            <div>
              <label>Razón social: </label>
              <input type="text" disabled placeholder="Jorje" />
            </div>
            <div>
              <label>RUC: </label>
              <input type="text" disabled placeholder="987654321" />
            </div>
            <div>
              <label>Dirección: </label>
              <input type="text" disabled placeholder="Mz A lt 15 Callao" />
            </div>
            <div>
              <label>Ubicación: </label>
              <input type="text" disabled placeholder="Callao" />
            </div>
            <div>
              <label>Referencia: </label>
              <input type="text" disabled placeholder="La perla" />
            </div>
            <div>
              <h5>Mi calificación</h5>
              <div className="calificacion">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 ">
          <div className="barra">
            <h5>Logo</h5>
            <div className="procesa__perfil-img">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
