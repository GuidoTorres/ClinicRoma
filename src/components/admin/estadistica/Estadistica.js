import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { fetchGETPOSTPUTDELETE } from "../../../helpers/fetch";

const Estadistica = () => {
  const [departments, setDepartments] = useState([]);
  const [servicios, setServices] = useState([]);
  const data = {
    labels: ["lunes", "martes", "miercoles", "jueves"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],

    options: {
      maintainAspectRatio: false,
      responsive: true,
    },
  };

  const getDeparments = () => {
    fetchGETPOSTPUTDELETE("departments/14")
      .then((data) => data.json())
      .then((datos) => {
        setDepartments(datos.departments);
      });
  };

  const getServices = () => {
    fetchGETPOSTPUTDELETE("services")
      .then((data) => data.json())
      .then((datos) => {
        setServices(datos.data);
      });
  };

  useEffect(() => {
    getDeparments();
    getServices();
  }, []);
  console.log(servicios);
  return (
    <div className="container">
      <div className="row">
        <h3 className="titulo">Estadísticas</h3>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="barra">
            <div className="adminestadistica__tipo">
              <div>
                <div>
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label>Seleccionar Distrito</label>
                  </div>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Seleccione</option>
                    {departments.provinces &&
                      departments.provinces.map((datos, i) =>
                        datos.districts.map((data, i) => (
                          <option key={i} value="1">
                            {data.name}
                          </option>
                        ))
                      )}
                  </select>
                </div>
                <textarea></textarea>
              </div>
              <div>
                <div>
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label>Seleccionar Clinica</label>
                  </div>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Seleccionar</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <textarea></textarea>
              </div>
            </div>
            <div className="adminestadistica__tipo">
              <div>
                <div>
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label>Tipo de Prueba</label>
                  </div>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Seleccionar</option>

                    {servicios &&
                      servicios.map((data, i) =>
                        data.services.map((datos, i) => (
                          <option key={i} value="1">
                            {datos.name}
                          </option>
                        ))
                      )}
                  </select>
                </div>
                <textarea></textarea>
              </div>
              <div>
                <div>
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label>Resultado de prueba</label>
                  </div>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Seleccionar</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="barra">
            <div className="adminestadistica__fecha">
              <label>Día</label>
              <div className="adminestadistica__subfecha">
                <div>
                  <label>Inicio:</label>
                  <input type="number" />
                </div>
                <div>
                  <label>Fin:</label>
                  <input type="number" />
                </div>
              </div>
            </div>
            <div className="adminestadistica__fecha">
              <label>Mes</label>
              <div className="adminestadistica__subfecha">
                <div>
                  <label>Inicio:</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Seleccionar</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <label>Fin:</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Seleccionar</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="adminestadistica__fecha">
              <label>Año</label>
              <div className="adminestadistica__subfecha">
                <div>
                  <label>Inicio:</label>
                  <input type="number" />
                </div>
                <div>
                  <label>Fin:</label>
                  <input type="number" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="barra">
            <Bar className="bar" data={data} responsive />
            <button className="botones mt-5 ">Graficar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estadistica;
