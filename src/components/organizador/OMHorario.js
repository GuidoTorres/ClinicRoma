import React from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import { customStyles } from '../../helpers/tablaOpciones';

const OMHorario = ({ MHorario, setMHorario }) => {
  const closeModal = () => {
    setMHorario(false);
  };
  return (
    <Modal
      isOpen={MHorario}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal modal__horario"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      ariaHideApp={false}
    >
      <h3 className="title__modal">Evento</h3>
      <form className="">
        <div className="form-group mt-3">
          <label>Fecha y hora inicio</label>
          <DateTimePicker
            // onChange={handleStartDateChange}
            // value={dateStart}
            className="form-control"
          />
        </div>

        <div className="form-group mt-3">
          <label>Fecha y hora fin</label>
          <DateTimePicker
            // onChange={handleEndDateChange}
            // value={dateEnd}
            // minDate={dateStart}
            className="form-control"
          />
        </div>

        <div className="form-group mt-3">
          <label>Enviar un comentario</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            // value={notes}
            // onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mt-3">
          <button type="submit" className="boton__horario">
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
        </div>
      </form>
      {/*  */}
    </Modal>
  );
};

export default OMHorario;
