import React, { useState } from "react";
import Modal from "react-modal";
import {
  fetchGETPOSTPUTDELETEJSON,
  fetchGETPOSTPUTDELETE,
} from "../../helpers/fetch";

import { customStyles } from "../../helpers/tablaOpciones";

const MSubirEclea = ({ openModal, setOpenModal, dataSelected, tipoPrueba }) => {
  const [result, setResult] = useState({
    id: dataSelected.id,
  });
  const closeModal = () => {
    setOpenModal(false);
  };
  console.log(result);

  const postResults = () => {
    const formData = new FormData();

    formData.set("id", 8);
    formData.set("result", "0");

    fetchGETPOSTPUTDELETE(`result`, formData, "POST").then((data) =>
      console.log(data)
    );
  };

  console.log(dataSelected);
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal mlaboratorio_subir-eclea"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      preventScroll={true}
      ariaHideApp={false}
    >
      <h3 className="title__modal mb-3">Cargar resultado</h3>
      <div className="container">
        <div className="row">
          <div className="col-12 mlaboratorio_cargar">
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
            </div>
            <p>
              <strong>Cargar Resultados</strong>{" "}
            </p>
            <div className="mt-3">
              <div className="d-flex-column">
                <label className="mb-3">El resultado de la prueba es:</label>
                <div>
                  <label>Resultado IgM:</label>
                  <input type="text" name="resultIgm" />
                </div>
                <div>
                  <label>Resultado IgG:</label>
                  <input type="text" name="resultIgg" />
                </div>
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

export default MSubirEclea;
