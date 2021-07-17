import React from 'react';
import Modal from 'react-modal';

import { customStyles } from '../../helpers/tablaOpciones';
import { useBarcode } from 'react-barcodes';

function BarCode({ textobarcode }) {
  const { inputRef } = useBarcode({
    value: textobarcode === '' ? 'vacio' : textobarcode,
    options: {
      background: '#ffffff',
      height: '70px',
      width: '2px',
    },
  });
  return <canvas id="bar" ref={inputRef} />;
}

const MReserva = ({ openModal, setOpenModal }) => {
  const closeModal = () => {
    setOpenModal(false);
  };

  const descargar = () => {
    const data = document.querySelector('#bar');
    const pngUrl = data
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'mybarcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal modal__tomanBarcode"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      preventScroll={true}
      ariaHideApp={false}
    >
      <h3 className="title__modal">Código de barra</h3>
      <div className="container">
        <div className="row">
          <BarCode textobarcode={`AAAA`} id="bar" />
          <div className="d-flex justify-content-between mt-5">
            <button
              type="button"
              className="botones"
              onClick={(e) => window.print()}
            >
              Imprimir
            </button>

            <button type="button" className="botones" onClick={descargar}>
              Descargar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MReserva;
