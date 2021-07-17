import jsPDF from "jspdf";
import image from "../../assets/pdf Imagen/sintomas.png";

const getFecha = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.toLocaleString("default", { month: "long" });
  let year = newDate.getFullYear();
  // no mover los espacios del return
  return `${date}${"            "}${month}`;
};

const generarDeclaracionJurada = () => {
  const data = {
    nombre: "Hector Torres Durand",
    dni: "72798529",
    tipo: "Prueba Molecular",
    tecnica: "Tecnica nr 1000",
    edad: 100,
    puesto: "programador",
    empresa: "GetByte",
    sintomasi: true,
    sintomano: false,
    sintomasi1: false,
    sintomano1: true,
  };
  const doc = new jsPDF("p", "pt");
  doc.setProperties({
    title: "Declaración jurada",
  });
  doc.setFontSize(10);

  doc.addImage(image, "PNG", 70, 20, 450, 800);

  //sintomas
  doc.text(125, 115, `${data.nombre}`);
  doc.text(125, 130, `${data.dni}`);
  doc.text(155, 143, `${data.puesto}`);
  doc.text(308, 130, `${data.empresa}`);

  doc.text(
    255,
    255,
    data.sintomano === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    225,
    285,
    data.sintomasi === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    225,
    320,
    data.sintomasi === true ? "X" : data.sintomano1 === false ? "" : ""
  );
  doc.text(
    225,
    350,
    data.sintomano === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    225,
    380,
    data.sintomano === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    225,
    410,
    data.sintomasi === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    225,
    440,
    data.sintomasi === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    225,
    470,
    data.sintomasi === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    225,
    505,
    data.sintomano === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    225,
    550,
    data.sintomano === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    225,
    585,
    data.sintomano === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    225,
    615,
    data.sintomano === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    225,
    645,
    data.sintomasi === true ? "X" : data.sintomano === false ? "" : ""
  );

  //Condicion

  doc.text(
    470,
    255,
    data.sintomano === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    470,
    285,
    data.sintomasi === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    470,
    320,
    data.sintomano === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    470,
    350,
    data.sintomasi === true ? "X" : data.sintomasi === false ? "" : ""
  );
  doc.text(
    470,
    380,
    data.sintomano === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    470,
    410,
    data.sintomano === true ? "X" : data.sintomasi === false ? "" : ""
  );
  doc.text(
    470,
    440,
    data.sintomasi === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    470,
    470,
    data.sintomasi === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    470,
    505,
    data.sintomanosi === true ? "X" : data.sintomano === false ? "" : ""
  );

  doc.text(
    470,
    550,
    data.sintomano === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    470,
    588,
    data.sintomano === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    470,
    618,
    data.sintomano === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(
    470,
    647,
    data.sintomano === true ? "X" : data.sintomano === false ? "" : ""
  );
  doc.text(172, 690, `${getFecha()}`);

  window.open(doc.output("bloburl"), "_blank");
};

export { generarDeclaracionJurada };
