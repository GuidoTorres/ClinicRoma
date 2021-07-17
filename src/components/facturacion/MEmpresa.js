import React from "react";
import Modal from "react-modal";
import { customStyles } from "../../helpers/tablaOpciones";

const MEmpresa = ({ openModal, setOpenModal, datos }) => {
  console.log(datos);
  const closeModal = () => {
    setOpenModal(false);
  };
  console.log(datos);
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal  mfacturacion__empresa"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      preventScroll={true}
      ariaHideApp={false}
    >
      <h3 className="title__modal">
        Empresa: {datos.corporation.business_name}
      </h3>
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 facturacion__empresa">
            <p>Información de la empresa</p>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Tipo de servicio</th>
                    <th scope="col">Descuento (%)</th>
                    <th scope="col">Costos (S/.)</th>
                  </tr>
                </thead>
                <tbody>
                  {datos.length > 0 &&
                    datos.map((data, i) => (
                      <tr key={i}>
                        <td>{data.corporation.address}</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <p>Datos de facturación</p>
            <div>
              <div>
                <label>Facturación (días):</label>
                <input type="text" />
              </div>
              <div>
                <label>Crédito (días):</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MEmpresa;
