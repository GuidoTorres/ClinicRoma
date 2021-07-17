import React, { useState } from "react";
import Modal from "react-modal";
import {
  fetchGETPOSTPUTDELETEJSON,
  fetchGETPOSTPUTDELETE,
} from "../../helpers/fetch";

import { customStyles } from "../../helpers/tablaOpciones";

const MSubirRapida = ({
  openModal,
  setOpenModal,
  dataSelected,
  tipoPrueba,
}) => {
  const [result, setResult] = useState({
    id: dataSelected.id,
  });
  const closeModal = () => {
    setOpenModal(false);
  };
  console.log(result);

  const postResults = () => {
    

    fetchGETPOSTPUTDELETEJSON(`result`, result, "POST").then((data) =>
      console.log(data)
    );
  };



  console.log(result);
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal mlaboratorio_subir-rapida"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      preventScroll={true}
      ariaHideApp={false}
    >
      <h3 className="title__modal mb-3">Cargar resultado</h3>
      <div className="container">
        <div className="row">
          <div className="col-12 mlaboratorio_cargar ">
            <p>
              <strong>Datos del paciente</strong>{" "}
            </p>
            <div className="mt-2">
              <div style={{ display: "flex", alignItems: "center" }}>
                <label>DNI:</label>
                <label>
                  {dataSelected.person.dni ? dataSelected.person.dni : ""}
                </label>
              </div>
              <div>
                <label>Nombre</label>
                <label>
                  {dataSelected.person.name && dataSelected.person.pat_lastname
                    ? dataSelected.person.name +
                      " " +
                      dataSelected.person.pat_lastname
                    : ""}
                </label>
              </div>
              <div>
                <label>Tipo de usuario</label>
                <label>
                  {dataSelected.people_id === 1
                    ? "Particular"
                    : dataSelected.people_id === 0
                    ? "Empresa"
                    : "Sin Tipo"}
                </label>
              </div>
              <div>
                <label>Empresa</label>
                <label>
                  {dataSelected.people_id === 1
                    ? "Particular"
                    : dataSelected.people_id === 0
                    ? "Empresa"
                    : "Sin Tipo"}
                </label>
              </div>
            </div>
            <p>
              <strong>Cargar Resultados</strong>{" "}
            </p>
            <div className="mt-2">
              <div className="d-flex-column">
                <label className="mb-3">El resultado de la prueba es:</label>
                <label>
                  <input
                    type="radio"
                    className="me-3"
                    value="igm"
                    name="reactive"
                    onChange={e => setResult({...result, reactive: e.target.checked ? 2 : ""})}
                  />
                  Reactivo IgM
                </label>
                <label>
                  <input
                    type="radio"
                    className="me-3"
                    value="igg"
                    name="reactive"
                    onChange={e => setResult({...result, reactive: e.target.checked ? 1 : ""})}

                  />
                  Reactivo IgG
                </label>

                <label>
                  <input
                    type="radio"
                    className="me-3"
                    value="igm/igg"
                    name="reactive"
                    onChange={e => setResult({...result, reactive: e.target.checked ? 3 : ""})}
                  />
                  Reactivo IgM/IgG
                </label>
                <label>
                  <input
                    type="radio"
                    className="me-3"
                    value="noReactivo"
                    name="reactive"
                    onChange={e => setResult({...result, reactive: e.target.checked ? 4 : ""})}
                  />
                  No Reactivo
                </label>
                <label>
                  <input
                    type="radio"
                    className="me-3"
                    value="invalido"
                    name="reactive"
                    onChange={e => setResult({...result, reactive: e.target.checked ? 5 : ""})}
                  />
                  Inválido
                </label>
              </div>
            </div>
            <div className="list-botones">
              <button className="botones" onClick={closeModal}>
                Cancelar
              </button>
              <button className="botones">Visualizar</button>
              <button className="botones" onClick={postResults}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MSubirRapida;
