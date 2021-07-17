import jsPDF from "jspdf";
// import image from "../../assets/pdf Imagen/sintomas.png";
import consentimiento from "../../assets/pdf Imagen/consentimiento.png";
// import DeclaracionJurada from "./Modales/DeclaracionJurada";
// import ConsentimientoInformado from "./Modales/ConsentimientoInformado";
// import FichaCovid from "./Modales/FichaCovid";
// import ficha1 from "../../assets/pdf Imagen/FichaCovid1.png";
// import ficha2 from "../../assets/pdf Imagen/FichaCovid2.png";

const data = {
  nombre: "Hector Torres Durand",
  dni: "72798529",
  tipo: "Prueba Molecular",
  tecnica: "Tecnica nr 1000",
  edad: 100,
};

const getFecha = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.toLocaleString("default", { month: "long" });
  // let year = newDate.getFullYear();

  return `${date}${" de "}${month}${" "}`;
};

const generarConsentimientoInformado = () => {
  const doc = new jsPDF("p", "pt");
  doc.setProperties({
    title: "Consentimiento Informado",
  });
  doc.setFontSize(10);

  doc.addImage(consentimiento, "PNG", 70, 30, 450, 500);

  doc.text(110, 155, `${data.nombre}`);
  doc.text(350, 155, `${data.dni}`);

  doc.text(350, 318, `${getFecha()}`);

  window.open(doc.output("bloburl"), "_blank");
};
export { generarConsentimientoInformado };
