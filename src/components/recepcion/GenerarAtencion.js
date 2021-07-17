// import React, { useState } from "react";
// // import jsPDF from "jspdf";
// // import image from "../../assets/pdf Imagen/sintomas.png";
// // import consentimiento from "../../assets/pdf Imagen/consentimiento.png";
// // import ficha1 from "../../assets/pdf Imagen/FichaCovid1.png";
// // import ficha2 from "../../assets/pdf Imagen/FichaCovid2.png";
// import DeclaracionJurada from "./FormatosPDF/DeclaracionJurada";
// import ConsentimientoInformado from "./FormatosPDF/ConsentimientoInformado";
// import FichaCovid19 from "./FormatosPDF/FichaCovid19";
// import { useLocation } from "react-router-dom";

// const GenerarAtencion = () => {
//   const location = useLocation();
//   const [data, setData] = useState({
//     nombre: "Hector Torres Durand",
//     dni: "72798529",
//     tipo: "Prueba Molecular",
//     tecnica: "Tecnica nr 1000",
//     edad: 100,
//   });
// // 
//   console.log(location);

//   const [condicion, setCondicion] = useState({});

//   const [declaracion, setDeclaracion] = useState({});
//   const [ficha, setFicha] = useState({});

//   console.log(ficha);

//   const getFecha = () => {
//     let newDate = new Date();
//     let date = newDate.getDate();
//     let month = newDate.toLocaleString("default", { month: "long" });
//     let year = newDate.getFullYear();

//     return `${date}${" de "}${month}${" "}${"de "}${year}`;
//   };

//   const mostrarDeclaracionJurada = () => {
//     const declaracion = document.querySelector(".containerPDF").style;
//     const consentimiento = document.querySelector(".containerPDF1").style;
//     const ficha = document.querySelector(".containerPDF2").style;

//     consentimiento.display = "none";
//     ficha.display = "none";
//     declaracion.display = "flex";
//     declaracion.visibility = "visible";
//   };

//   const mostrarConsentimiento = () => {
//     const declaracion = document.querySelector(".containerPDF").style;
//     const consentimiento = document.querySelector(".containerPDF1").style;
//     const ficha = document.querySelector(".containerPDF2").style;

//     declaracion.display = "none";
//     ficha.display = "none";
//     consentimiento.display = "block";
//     consentimiento.visibility = "visible";
//   };

//   const mostrarFichaCovid = () => {
//     const declaracion = document.querySelector(".containerPDF").style;
//     const consentimiento = document.querySelector(".containerPDF1").style;
//     const ficha = document.querySelector(".containerPDF2").style;

//     declaracion.display = "none";
//     consentimiento.display = "none";
//     ficha.display = "block";
//     ficha.visibility = "visible";
//   };

//   return (
//     <div className="generarAtencion container">
//       {/* <h2 className="tituloAtender">Atender Paciente</h2> */}
//       <div className="datosPaciente">
//         <label htmlFor="">Paciente:</label>
//         <label htmlFor="">Tipo de paciente:</label>
//         <label htmlFor="">Empresa:</label>
//       </div>

//       <div className="container1">
//         <label htmlFor="" className="mt-3">
//           Seleccionar servicio
//         </label>

//         <div className="tipoServicio mt-3">
//           <div>
//             <label htmlFor="">Tipo de servicio:</label>
//             <select class="form-select" aria-label="Default select example">
//               <option selected>Seleccione</option>
//               <option value="1">COVID19</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="">Plan de atención:</label>
//             <select class="form-select" aria-label="Default select example">
//               <option selected>Seleccione</option>
//               <option value="1">One</option>
//               <option value="2">Two</option>
//               <option value="3">Three</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <div className="container2">
//         <div className="containerBotones mt-3">
//           {/* <button
//             type="button"
//             class="btn1 btn btn-primary"
//             // onClick={() => generarDeclaracionJurada()}
//           >
//             Declaración PDF
//           </button>
//           <button
//             type="button"
//             class="btn1 btn btn-primary"
//             // onClick={() => generarConsentimientoInformado()}
//           >
//             Consentimiento PDF
//           </button>
//           <button
//             type="button"
//             class="btn1 btn btn-primary"
//             // onClick={() => generarFichaCovid()}
//           >
//             Ficha Covid PDF
//           </button> */}
//           <button
//             type="button"
//             class="botones btn btn-primary"
//             onClick={() => mostrarDeclaracionJurada()}
//           >
//             Declaración jurada
//           </button>
//           <button
//             type="button"
//             class="botones btn btn-primary"
//             onClick={() => mostrarConsentimiento()}
//           >
//             Consentimiento informado
//           </button>
//           <button
//             type="button"
//             class="botones btn btn-primary"
//             onClick={() => mostrarFichaCovid()}
//           >
//             Ficha COVID 19
//           </button>
//         </div>

//         <div class="contenedorPDF">
//           <div className="containerPDF">
//             <DeclaracionJurada
//               declaracion={declaracion}
//               setDeclaracion={setDeclaracion}
//               condicion={condicion}
//               setCondicion={setCondicion}
//             />
//           </div>

//           <div className="containerPDF1">
//             <ConsentimientoInformado data={data} />
//           </div>

//           <div className="containerPDF2">
//             <FichaCovid19 ficha={ficha} setFicha={setFicha} data={data} />
//           </div>
//         </div>
//       </div>
//       <div className="botones2">
//         <button type="button" class="botones btn btn-primary">
//           Cancelar
//         </button>
//         <button type="button" class="botones btn btn-primary">
//           Finalizar
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GenerarAtencion;
