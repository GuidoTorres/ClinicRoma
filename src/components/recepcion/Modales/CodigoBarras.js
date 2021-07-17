import React from 'react';
import Modal from 'react-modal';
// import { customStyles } from "../../../helpers/ModalStyles";
import { useBarcode } from 'react-barcodes';
import { customStyles } from '../../../helpers/tablaOpciones';

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

const CodigoBarras = ({ openModalBar, setOpenModalBar, dataBarCode }) => {
  console.log(dataBarCode);
  // const { dni} = dataBarCode;
  const closeModal = () => {
    setOpenModalBar(false);
  };

  const descargar = () => {

    const data = document.querySelector("#bar")
      const pngUrl = data
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      let downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'mybarcode.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
  }

  return (
    <Modal
      isOpen={openModalBar}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal modal__barcode"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      preventScroll={true}
      ariaHideApp={false}
      contentLabel="Example Modal"
      id="modalBar"
    >
      <h3 className="title__modal">Código de barras</h3>
      <div className="container">
        <div className="row">
          <BarCode textobarcode={`${dataBarCode.person.pat_lastname}`} id="bar" />
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

export default CodigoBarras;
