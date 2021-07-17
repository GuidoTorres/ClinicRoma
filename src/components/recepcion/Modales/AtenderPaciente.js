import React from 'react'
import Modal from "react-modal";
// import { customStyles } from "../../../helpers/ModalStyles";

const AtenderPaciente = ({modalAtender, setModalAtender}) => {
    function closeModal() {
        setModalAtender(false);
    }

    return (
        <Modal
        isOpen={modalAtender}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modalHeader container">  
          <br></br>
        <label htmlFor="">¿Está seguro de atender al paciente?:</label>

  
          <div className="btnContainer">
          <button type="button" class="btn1 btn btn-primary" onClick={closeModal}>
              Cancelar
            </button>
            <button type="button" class="btn1 btn btn-primary">
              Confirmar
            </button>
          </div>
        </div>
      </Modal>
    )
}

export default AtenderPaciente
