import React, { useEffect } from "react";
import Modal from "react-modal";
// import { customStyles } from "../../../helpers/ModalStyles";
import { useBarcode } from "react-barcodes";
import { customStyles } from "../../../helpers/tablaOpciones";

function BarCode({ textobarcode }) {
  const { inputRef } = useBarcode({
    value: textobarcode === "" ? "vacio" : textobarcode,
    options: {
      background: "#ffffff",
      height: "70px",
      width: "2px",
    },
  });
  return <canvas id="bar" ref={inputRef} />;
}

const CodigoBarrasHistorial = ({
  codigoHistorial,
  setCodigoHistorial,
  dataBarCode,
}) => {
  console.log(dataBarCode);
  // const { dni} = dataBarCode;
  const closeModal = () => {
    setCodigoHistorial(false);
  };

  const descargar = () => {
    const data = document.querySelector("#canvas");
    const pngUrl = data
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = dataBarCode.codebar + ".png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const cargarBarra = () => {
    const canvas = document.getElementById("canvas");
    const img = document.getElementById("bar");
    const ctx = canvas.getContext("2d");

    let cw = (canvas.width = img.width + (290 - img.width)),
      cx = cw / 2;
    canvas.height = img.height + (280 - img.height);
    ctx.textAlign = "center";

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.fillStyle = "#000";

    ctx.drawImage(img, (canvas.width - img.width) / 2, 50);

    let person__name =
      dataBarCode.person !== undefined
        ? `${dataBarCode.person.pat_lastname} ${dataBarCode.person.mom_lastname} , ${dataBarCode.person.name}`
        : "";
    let person__info =
      dataBarCode.person !== undefined
        ? `DNI: ${dataBarCode.person.dni} \t Sexo: M \t Edad: 28`
        : "";
    let attention__name =
      dataBarCode.service !== undefined ? dataBarCode.service.name : "";
    let attention__date = `${dataBarCode.date_attention} \t ${dataBarCode.time_attention}`;

    let name1 = attention__name.substring(0, 34);
    let name2 = attention__name.substring(34, 68);
    let name3 = attention__name.substring(68, 102);
    let name4 = attention__name.substring(102);
    // console.log(attention__name.length);

    let tamanoTexto = 60;

    ctx.font = tamanoTexto + "px Arial";
    let anchuraTexto = ctx.measureText(person__name).width;
    while (anchuraTexto > canvas.width - 20) {
      tamanoTexto--;
      ctx.font = tamanoTexto + "px Georgia";

      let pi = ctx.measureText(person__info).width;
      anchuraTexto = pi;
    }

    ctx.fillText(person__name.toUpperCase(), cx, 25);
    ctx.fillText(person__info, cx, 50);
    // ctx.fillText(attention__name, cx, 175);
    ctx.fillText(name1, cx, 175);
    ctx.fillText(name2, cx, 195);
    ctx.fillText(name3, cx, 215);
    ctx.fillText(name4, cx, 235);

    ctx.fillText(attention__date, cx, 255);

    // console.log(canvas.toDataURL());
  };

  useEffect(() => {
    if (codigoHistorial) {
      setTimeout(() => cargarBarra(), 0);
    }
  }, [codigoHistorial]);

  return (
    <Modal
      isOpen={codigoHistorial}
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
          <canvas id="canvas">
            <BarCode textobarcode={dataBarCode.codebar || ""} id="bar" />
          </canvas>

          <div className="d-flex justify-content-between mt-3">
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

export default CodigoBarrasHistorial;
