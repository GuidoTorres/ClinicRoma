import React from "react";
import Modal from "react-modal";
// import { customStyles } from "../../../helpers/ModalStyles";

const EditarDatosTrabajador = ({ modalIsOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      // style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="modalHeader container">
        <h2>Comentarios</h2>

      
      <label>A continuacion debe editar los datos del trabajador</label>
      <br></br>
      <div className="mt-2"> 

        <label htmlFor="">Comentarios ligados a la factura:</label>
        <input
          type="number"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div>
        <label htmlFor="">Numero de documento:</label>
        <input
          type="number"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div>
        <label htmlFor="">Nombres:</label>
        <input
          type="number"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div>
        <label htmlFor="">Apellidos:</label>
        <input
          type="number"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="btnContainer">

      <button type="button" class="btn1 btn btn-primary" onClick={closeModal}>
        Cancelar
      </button>
      <button type="button" class="btn1 btn btn-primary">
        Guardar
      </button>
      </div>
      </div>
    </Modal>
  );
};

export default EditarDatosTrabajador;
