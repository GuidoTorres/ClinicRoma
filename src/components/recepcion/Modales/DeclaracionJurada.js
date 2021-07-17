import React from 'react'
import Modal from "react-modal";
import { customStyles } from '../../../helpers/tablaOpciones';

const DeclaracionJurada = ({declaracionJurada, setDeclaracionJurada}) => {
    function closeModal() {
        setDeclaracionJurada(false);
      }
    return (
        <Modal
        isOpen={declaracionJurada} 
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modalHeader container">
        <h3 className="title__modal">Declaración jurada</h3>

  
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

export default DeclaracionJurada
