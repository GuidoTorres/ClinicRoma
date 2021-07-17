import React, { useState } from 'react';
import Modal from 'react-modal';
import { customStyles } from '../../../helpers/tablaOpciones';
import MMAParticulares from './MMAParticulares';
const MMParticulares = ({ openModalParticular, setOpenModalParticular }) => {
  const [openModalCrear, setOpenModalCrear] = useState(false);
  const handleAgregarCliente = () => {
    setOpenModalCrear(true);
  };
  const closeModal = () => {
    setOpenModalParticular(false);
  };
  return (
    <Modal
      isOpen={openModalParticular}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal  mfacturacion__particular"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      preventScroll={true}
      ariaHideApp={false}
    >
      <h3 className="title__modal">Detalles de atención</h3>
      <div className="container">
        <div className="row">
          <div className="col-12 fmparticular">
            <div>
              <div className="fmparticular__tipo">
                <label>Tipo de usuario</label>
                <input type="text" />
              </div>
              <div className="fmparticular__tipo">
                <label>Fecha de emisión</label>
                <input type="date" />
              </div>
            </div>
            <div>
              <div className="">
                <label>Agregar paciente</label>
                <i
                  className="fas fa-plus-circle"
                  onClick={handleAgregarCliente}
                ></i>
              </div>
            </div>
            <div className="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">DNI</th>
                    <th scope="col">Hora</th>
                    <th scope="col">Nombres</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Tipo de prueba</th>
                    <th scope="col">Servicio</th>
                    <th scope="col">Sub-Total</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td colSpan="7">Obvervación</td>
                    <td>Sub Total</td>
                    <td>133</td>
                  </tr>
                  <tr>
                    <td colspan="7">Factura F000000</td>
                    <td>IGV</td>
                    <td>133</td>
                  </tr>
                  <tr>
                    <td colspan="7"></td>
                    <td>Total</td>
                    <td>266</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {openModalCrear && (
          <MMAParticulares
            openModalCrear={openModalCrear}
            setOpenModalCrear={setOpenModalCrear}
          />
        )}
        <div className="list-botones">
          <button className="botones">Cancelar</button>
          <button className="botones">Aceptar</button>
        </div>
      </div>
    </Modal>
  );
};

export default MMParticulares;
