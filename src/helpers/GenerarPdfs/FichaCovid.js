import jsPDF from "jspdf";
import ficha1 from "../../assets/pdf Imagen/FichaCovid1.png";
import ficha2 from "../../assets/pdf Imagen/FichaCovid2.png";


const generarFichaCovid = () => {

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

  const getFecha = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.toLocaleString("en-US", {hour: '2-digit', hour12: false, timeZone: "America/New_York"});
    let year = newDate.getFullYear();
    // no mover los espacios del return
    return `${date}${"      "}${month}${"      "}${year}`;
  };

  const doc = new jsPDF("p", "pt");
  doc.setProperties({
    title: "Ficha COVID19",
  });
  doc.setFontSize(10);
  //PAGINA 1
  doc.addImage(ficha1, "PNG", 25, 30, 550, 800);

  //DATOS GENERALES

  doc.text(
    150,
    108,
    `${getFecha()}`
  );
  // doc.text(165, 128, ficha.geresa && ficha.geresa !== "" ? ficha.geresa : " ");
  // doc.text(80, 148, ficha.eess && ficha.eess !== "" ? ficha.eess : " ");

  doc.text(350, 148, data.sintomano === true ? "X" : " ");
  doc.text(422, 148, "X");
  doc.text(497, 148, data.sintomano === true ? "X" : " ");

  doc.text(166, 168, data.sintomano === true ? "X" : " ");
  doc.text(258, 168, data.sintomano=== true ? "X" : " ");
  doc.text(332, 168, "X");

  doc.text(203, 188, data.sintomano === true ? "X" : " ");
  doc.text(258, 188, "X");
  doc.text(313, 188, data.sintomano === true ? "X" : " ");

  // doc.text(258,188, ficha.detectadoFecha && ficha.detectadoFecha !== "" ? detectadoFecha : "")
  // doc.text(313,188, ficha.detectadoLugar && ficha.detectadoLugar !== "" ? detectadoLugar : "")

  //DATOS DEL PACIENTE

  doc.text(145, 250, `${data.nombre}`);
  doc.text(152, 270, `${getFecha()}`);
  doc.text(320, 270, `${data.edad}`);
  doc.text(93, 290, "X");
  doc.text(167, 290, data.sintomano === true ? "X" : " ");
  doc.text(310, 290, "72798529");
  doc.text(
    460,
    290,
    "200668"
  );

  doc.text(90, 344, "Arequipa");
  doc.text(
    273,
    344,
    "Arequipa"
  );
  doc.text(
    440,
    344,
    "Miraflores"
  );

  doc.text(
    203,
    384,
    "Urb. Las palmeras "
  );

  doc.text(
    90,
    397,
    "Perú"
  );
  doc.text(
    275,
    397,
    "Arequipa"
  );
  doc.text(
    440,
    397,
    "Miraflores"
  );

  // CUADRO CLINICO

  doc.text(313, 443, "X");
  doc.text(423, 443, data.sintomano === true ? "X" : " ");

  doc.text(130, 465, data.sintomano === true ? "X" : " ");
  doc.text(185, 465, "X");
  doc.text(240, 465, data.sintomano === true ? "X" : " ");

  doc.text(130, 525, data.sintomano === true ? "X" : " ");
  doc.text(185, 525, "X");

  doc.text(277, 544, data.sintomano === true ? "X" : " ");
  doc.text(332, 544, "X");
  doc.text(387, 544, data.sintomano === true ? "X" : " ");

  doc.text(185, 564, "X");
  doc.text(277, 564, data.sintomano === true ? "X" : " ");
  doc.text(387, 564, data.sintomano === true ? "X" : " ");
  doc.text(460, 564, data.sintomano === true ? "X" : " ");

  doc.text(57, 618, "X");
  doc.text(57, 632, data.sintomano === true ? "X" : " ");
  doc.text(57, 645, data.sintomano === true ? "X" : " ");
  doc.text(57, 660, "X");
  doc.text(57, 673, "X");

  doc.text(203, 618, data.sintomano === true ? "X" : " ");
  doc.text(203, 632, data.sintomano === true ? "X" : " ");
  doc.text(203, 645, data.sintomano === true ? "X" : " ");
  doc.text(203, 660, data.sintomano === true ? "X" : " ");
  doc.text(203, 673, data.sintomano === true ? "X" : " ");

  doc.text(57, 734, data.sintomano === true ? "X" : " ");
  doc.text(57, 750, data.sintomano === true ? "X" : " ");
  doc.text(57, 763, data.sintomano === true ? "X" : " ");

  doc.text(203, 734, data.sintomano === true ? "X" : " ");
  doc.text(203, 750, data.sintomano === true ? "X" : " ");
  doc.text(203, 763, "X");

  doc.text(368, 734, data.sintomano === true ? "X" : " ");

  //PAGINA 2

  doc.addPage();

  doc.addImage(ficha2, "PNG", 25, 30, 550, 800);

  doc.text(57, 65, data.sintomano === true ? "X" : " ");
  doc.text(57, 78, data.sintomano === true ? "X" : " ");
  doc.text(57, 92, data.sintomano === true ? "X" : " ");
  doc.text(57, 106, data.sintomano === true ? "X" : " ");
  doc.text(57, 120, data.sintomano === true ? "X" : " ");

  doc.text(364, 65, data.sintomano=== true ? "X" : " ");
  doc.text(364, 78, data.sintomano === true ? "X" : " ");
  doc.text(364, 92, data.sintomano === true ? "X" : " ");
  doc.text(364, 106, data.sintomano === true ? "X" : " ");
  doc.text(364, 120, data.sintomano === true ? "X" : " ");
  doc.text(364, 120, data.sintomano === true ? "X" : " ");

  doc.text(57, 198, "X");
  doc.text(57, 213, data.sintomano === true ? "X" : " ");
  doc.text(57, 227, data.sintomano === true ? "X" : " ");

  doc.text(292, 198, data.sintomano === true ? "X" : " ");
  doc.text(292, 213, data.sintomano === true ? "X" : " ");

  doc.text(400, 245, data.sintomano === true ? "X" : " ");
  doc.text(438, 245, "X");
  doc.text(473, 245, data.sintomano === true ? "X" : " ");

  // doc.text(75, 292, ficha.pais && ficha.pais !== "" ? ficha.pais : " ");
  // doc.text(305, 292, ficha.ciudad && ficha.ciudad !== "" ? ficha.ciudad : " ");

  doc.text(55, 355, data.sintomano === true ? "X" : " ");
  doc.text(111, 355, "X");
  doc.text(164, 355, data.sintomano === true ? "X" : " ");
  doc.text(
    220,
    355,
     " "
  );

  doc.text(56, 403, data.sintomano === true ? "X" : " ");
  doc.text(56, 417, "X");
  doc.text(202, 403, data.sintomano === true ? "X" : " ");
  doc.text(365, 403, data.sintomano === true ? "X" : " ");
  doc.text(202, 417, data.sintomano === true ? "X" : " ");

  doc.text(56, 450, data.sintomano === true ? "X" : " ");
  doc.text(110, 450, "X");
  doc.text(164, 450, data.sintomano === true ? "X" : " ");

  doc.text(95, 478,  " ");
  doc.text(95, 495, " ");

  // doc.text(56, 543, ficha.confirmado1 === true ? "X" : " ");
  // doc.text(56, 557, ficha.confirmado2 === true ? "X" : " ");
  // doc.text(202, 543, ficha.confirmado3 === true ? "X" : " ");
  // doc.text(365, 543, ficha.confirmado4 === true ? "X" : " ");
  // doc.text(202, 557, ficha.confirmado5 === true ? "X" : " ");

  doc.text(
    400,
    577,
     " "
  );

  doc.text(56, 608, data.sintomano === true ? "X" : " ");
  doc.text(112, 608, "X");
  doc.text(165, 608, data.sintomano=== true ? "X" : " ");
  doc.text(
    400,
    623,
     " "
  );

  // doc.text(
  //   145,
  //   688,
  //   ficha.laboratorio1 && ficha.laboratorio2 !== "" ? ficha.laboratorio1 : " "
  // );
  // doc.text(
  //   385,
  //   688,
  //   ficha.laboratorio2 && ficha.laboratorio3 !== "" ? ficha.laboratorio2 : " "
  // );

  // doc.text(200, 708, ficha.laboratorio4 === true ? "X" : " ");
  // doc.text(256, 708, ficha.laboratorio5 === true ? "X" : " ");
  // doc.text(311, 708, ficha.laboratorio6 === true ? "X" : " ");

  // doc.text(
  //   200,
  //   775,
  //   ficha.investigador && ficha.investigador !== "" ? ficha.investigador : " "
  // );

  window.open(doc.output("bloburl"), "_blank");
};

export { generarFichaCovid };
