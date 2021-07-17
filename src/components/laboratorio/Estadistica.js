import React from 'react';
import GraficoBarra from './GraficoBarra';

const Estadistica = () => {
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
          <div className="barra">
            <p className="">Seleccionar pruebas</p>
            <div className="laboratorio__estadistica">
              <div>
                <div className="">
                  <div className="">
                    <input type="checkbox" className="form-check-input" />
                    <label>Categoría</label>
                  </div>
                  <div className="adminusuario__date">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option>Seleccionar</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <textarea></textarea>
              </div>
              <div className="">
                <div>
                  <div className="">
                    <input type="checkbox" className="form-check-input" />
                    <label>Sub categoría</label>
                  </div>
                  <div className="adminusuario__date">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option>Seleccionar</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <textarea></textarea>
              </div>
            </div>
          </div>
          <div className=" barra">
            <p className="">Solucionar intervalo de tiempo</p>
            <div className="laboratorio__estadistica-intervalo">
              <div>
                <input type="checkbox" className="form-check-input" />
                <label>Día</label>
              </div>
              <div className="tiempo">
                {/* <div> */}
                <div>
                  <label>Inicio: </label>
                  <input type="date" />
                </div>
                <div>
                  <label>Fin: </label>
                  <input type="date" />
                </div>
                {/* </div> */}
              </div>
            </div>
            <div className="laboratorio__estadistica-intervalo">
              <div>
                <input type="checkbox" className="form-check-input" />
                <label>Mes</label>
              </div>
              <div className="tiempo">
                <div>
                  <label>Inicio: </label>
                  <input type="date" />
                </div>
                <div>
                  <label>Fin: </label>
                  <input type="date" />
                </div>
              </div>
            </div>
            <div className="laboratorio__estadistica-intervalo">
              <div>
                <input type="checkbox" className="form-check-input" />
                <label>Año</label>
              </div>
              <div className="tiempo">
                <div>
                  <label>Inicio</label>
                  <input type="date" />
                </div>
                <div>
                  <label>Fin</label>
                  <input type="date" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
          <div className=" barra mb-3">
            <div className="">
              <GraficoBarra />
            </div>
            <div className="list-botones">
              <button className="mt-5 botones">Actualizar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estadistica;
