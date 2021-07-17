import React, { useState } from "react";
import Modal from "react-modal";
import { fetchGETPOSTPUTDELETEJSON } from "../../../helpers/fetch";
import { customStyles } from "../../../helpers/tablaOpciones";

const MUsuario = ({ openModal, setOpenModal, dataSelected }) => {
  const [usuario, setUsuario] = useState({});

  const closeModal = () => {
    setOpenModal(false);
  };
  console.log(dataSelected);

  const editarUsuario = () => {
    fetchGETPOSTPUTDELETEJSON(`users/${dataSelected.id}`, usuario, "PUT").then(
      (resp) => console.log(resp)
    );
  };

  const handleChange = (e) => {
    setUsuario({
      ...usuario,

      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal modal__usuario"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      preventScroll={true}
      ariaHideApp={false}
    >
      <h3 className="title__modal">Editar Usuario</h3>
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 mregistro__usuario">
            <div className="usuario">
              <div>
                <label>Tipo de documento</label>
                <input
                  type="text"
                  name="document_type"
                  defaultValue={dataSelected.document_type || ""}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Número de documento</label>
                <input
                  type="text"
                  defaultValue={dataSelected.dni || ""}
                  name="dni"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Tipo de usuario</label>
                <input
                  type="text"
                  defaultValue={dataSelected.user_type || ""}
                  name="user_type"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Empresa</label>
                <input
                  type="text"
                  defaultValue={dataSelected.company || ""}
                  name="company"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Teléfono</label>
                <input
                  type="text"
                  defaultValue={dataSelected.phone || ""}
                  name="phone"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Correo</label>
                <input
                  type="text"
                  defaultValue={dataSelected.email || ""}
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Generar actividad</label>
                <input type="text" />
              </div>
            </div>
            <button className="botones" onClick={editarUsuario}>
              Editar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MUsuario;
