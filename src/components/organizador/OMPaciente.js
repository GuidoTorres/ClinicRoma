import React from 'react';
import Modal from 'react-modal';

import mapa from '../../assets/mapa/mapa.jpg';
import { customStyles } from '../../helpers/tablaOpciones';

const OMPaciente = ({ setMPaciente, MPaciente }) => {
  const closeModal = () => {
    setMPaciente(false);
  };
  return (
    <div>
      <Modal
        isOpen={MPaciente}
        onRequestClose={closeModal}
        style={customStyles}
        className="modal modal__pacientemap"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
      >
        <div className="omppaciente__modal">
          <h3 className="title__modal">Ubicación del paciente</h3>
          <div className="ompaciente__img">
            <img src={mapa} alt="mapa" />
          </div>
          <button className="botones mt-3">Agregar Ubicación</button>
        </div>
      </Modal>
    </div>
  );
};

export default OMPaciente;
