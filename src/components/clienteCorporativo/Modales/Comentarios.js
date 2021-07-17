import React from "react";
import Modal from "react-modal";
// import { customStyles } from "../../../helpers/ModalStyles";

const Comentarios = ({ modalIsOpen, setIsOpen }) => {
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

        <br></br>
        <div className="mt-2">
          <label htmlFor="">Comentarios ligados a la factura:</label>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
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

export default Comentarios;
