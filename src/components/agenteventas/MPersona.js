import React, { useState } from "react";
import Modal from "react-modal";

import { customStyles } from "../../helpers/tablaOpciones";
import { fetchGETPOSTPUTDELETEJSON } from "../../helpers/fetch";

const MPersona = ({ openModal, setOpenModal }) => {
  const [persona, setPersona] = useState({});

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    setPersona({
      ...persona,

      [e.target.name]: e.target.value,
    });
  };

  const crearDescuentoParticular = () => {
    fetchGETPOSTPUTDELETEJSON("particular_discount", persona, "POST").then(
      (res) => console.log(res)
    );
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal modal__persona"
      closeTimeoutMS={200}
      preventScroll={true}
      overlayClassName="modal-fondo"
      ariaHideApp={false}
    >
      <h3 className="title__modal mb-3">Usuario particular</h3>
      <div className="container">
        <div className="row">
          <div className="col-12 mventas__persona">
            <p>
              <strong>Tipo de paciente</strong>
            </p>
            <div className="mt-2">
              <div>
                <label >Tipo de documento</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="document_type_id"
                  onChange={(e) => handleChange(e)}
                  style={{ width: "163px" }}
                >
                  <option selected>Seleccione</option>
                  <option value="1">Dni</option>
                  <option value="2">Pasaporte</option>
                  <option value="3">Carne de extranjeria</option>
                </select>
              </div>
              <div>
                <label>Número de documento</label>
                <input
                  type="number"
                  name="dni"
                  maxLength="8"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Estado</label>
                <input
                  type="text"
                  name="document_type_id"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Nombres</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Apellidos</label>
                <input
                  type="text"
                  name="pat_lastname"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <p>
              <strong>Datos de descuento</strong>
            </p>
            <div className="mt-2">
              <div>
                <label>Prueba solicitada</label>

                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="service_id"
                  onChange={(e) => handleChange(e)}
                  style={{ width: "163px" }}
                >
                  <option selected>Seleccione</option>
                  <option value="1">Antígeno</option>
                  <option value="2">Electroquimioluminiscencia</option>
                  <option value="3">Inmunocromatografia</option>
                  <option value="4">RT-PCR</option>
                </select>
              </div>
              <div>
                <label>Porcentaje descuento</label>
                <input
                  type="number"
                  name="percent"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Monto</label>
                <input
                  type="number"
                  name="amount"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Número de pruebas(des)</label>
                <input
                  type="number"
                  name="quantity"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="list-botones">
              <button className="botones" onClick={closeModal}>Cancelar</button>
              <button className="botones" onClick={crearDescuentoParticular}>Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MPersona;
