import React from 'react'

const ConsentimientoInformado = () => {

    const getFecha = () => {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.toLocaleString("default", { month: "long" });
        let year = newDate.getFullYear();
    
        return `${date}${" de "}${month}${" "}${"de "}${year}`;
      };
      const data ={
        nombre: "Hector Torres Durand",
        dni: "72798529",
        tipo: "Prueba Molecular",
        tecnica: "Tecnica nr 1000",
        edad: 100,
      };

    return (
        <>
        <h6>
           <strong>CONSENTIMIENTO INFORMADO PARA TOMA DE MUESTRA MOLECULAR COVID-19</strong> 
          </h6>

          <p>
            Yo: <span style={{ fontWeight: "bold" }}>{data.nombre}</span> con
            DNI Nº <span style={{ fontWeight: "bold" }}>{data.dni}</span>{" "}
            declaro que sido informado de forma verbal clara y sencilla sobre la 
            <span style={{ fontWeight: "bold" }}> TOMA DE MUESTRAS BIOLOGICAS</span>, he podido hacer preguntas y aclarar mis
            dudas sobre que es, como se hace, para que sirve, que riesgo
            conlleva y por que es importante en mi caso. Así, tras haber
            comprendido la informacion recibida, doy libremente mi
            consentimiento para la realizacion de la{" "}
            <span style={{ fontWeight: "bold" }}>{data.tipo} POR LA
            TECNICA RT-PCR EN TIEMPO REAL</span> para la deteccion de COVID-19.
          </p>
          <br />
          <p>Lima, {getFecha()} </p>
        </>
    )
}

export default ConsentimientoInformado
