import React from 'react'
import Modal from "react-modal";
// import { customStyles } from "../../../helpers/ModalStyles";

const ConsentimientoInformado = ({consentimiento, setConsentimiento}) => {
    function closeModal() {
        setConsentimiento(false);
      }
    return (
        <Modal
        isOpen={consentimiento} 
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modalHeader container">
          <h2>Consentimiento Informado</h2>
  
          <br></br>

          <div className="btnContainer" style={{display:'flex', flexDirection:'column', width:'200px'}}>
          <div  style={{ marginBottom:'10px', display:'flex',justifyContent:'space-between', alignItems:'center'}}>
              <p>Previsualizar</p><i class="fas fa-print" ></i>
            </div>
            <div  style={{ marginBottom:'10px', display:'flex',justifyContent:'space-between', alignItems:'center'}}>
            <p>Imprimir</p><i class="fas fa-print" ></i>
            </div>
            <div  style={{ marginBottom:'10px', display:'flex',justifyContent:'space-between', alignItems:'center'}}>
            <p>Descargar</p><i class="fas fa-download"></i>
            </div>
          </div>
        </div>
      </Modal>
    )
}

export default ConsentimientoInformado
