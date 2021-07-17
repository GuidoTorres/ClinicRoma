import React from "react";
// import mapa from '../../assets/images/icon_mapa.png'
import { useHistory } from "react-router-dom";


const EmpresaAsignacion2 = () => {
  let history = useHistory();

  return (
    <div className="asignacion2 container">
      <h3 className="admin__registroclinica mt-5">Asignación de pruebas:</h3>
      <div >
        <div className=" mt-3">

       
        <label className="mt-3">2. Seleccione las pruebas a realizar </label>
        <div >
          <div className="">
            <label>Tipo de prueba </label>

            <select class="form-select mt-2" aria-label="Default select example">
            <option selected>Prueba serologica</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div >
          <label className="mt-3">3. Seleccionar clinica </label>
          <div className="">
            <label className="mt-2">Seleccionar distrito: </label>

            <select class="form-select mt-2" aria-label="Default select example">
            <option selected>Distrito</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div>
        </div>
        </div>

        <div className="divider"></div>
        <div className="mt-3">

        <table class="table table-borderless ">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Dirección</th>
            <th scope="col">Ubicación</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Clínica Medical Roma</th>
            <td>SJL. Mz</td>
            {/* <td><img src={mapa} alt="mapa" height="20px" width="30px"/></td> */}
            <td><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/></td>
          </tr>
          <tr>
            <th scope="row">Clínica Medical Roma</th>
            <td>SJL. Mz</td>
            {/* <td><img src={mapa} alt="mapa" height="20px" width="30px"/></td> */}
            <td><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/></td>
          </tr>
          <tr>
            <th scope="row">Clínica Medical Roma</th>
            <td>SJL. Mz</td>
            {/* <td><img src={mapa} alt="mapa" height="20px" width="30px"/></td> */}
            <td><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/></td>
          </tr>
        </tbody>
        </table>
        </div>
        
      </div>
      <div className="containerBtn">

      <button type="button" class="btnSiguiente btn btn-primary mt-5" 
            onClick={(e) => history.push("/empresa/asignacion3")}
            >Siguiente</button>
      </div>


    </div>
  );
};

export default EmpresaAsignacion2;
