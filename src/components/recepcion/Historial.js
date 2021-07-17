import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import DataTable from "react-data-table-component";
import CodigoBarrasHistorial from "./Modales/CodigoBarrasHistorial";
import { fetchGETPOSTPUTDELETE } from "../../helpers/fetch";
import { generarDeclaracionJurada } from "../../helpers/GenerarPdfs/DeclaracionJurada";
import { generarConsentimientoInformado } from "../../helpers/GenerarPdfs/ConsentimientoInformado";
import { generarFichaCovid } from "../../helpers/GenerarPdfs/FichaCovid";

const Historial = () => {
  const [busqueda, setBusqueda] = useState("");
  const [addRegistro, setAddRegistro] = useState(false);
  const [codigoHistorial, setCodigoHistorial] = useState(false);
  const [attention, setAttention] = useState({});
  const [dataBarCode, setDataBarCode] = useState({});

  const getAttention = () => {
    fetchGETPOSTPUTDELETE("result")
      .then((data) => data.json())
      .then((datos) => setAttention(datos.data));
  };

  useEffect(() => {
    getAttention();
  }, []);

  console.log(attention);
  function CodigoBarras(e) {
    setCodigoHistorial(true);
    setDataBarCode(e);
  }

  const handleAddRegistro = () => {
    setAddRegistro(true);
  };

  const paginacionOpciones = {
    rowsPerPageText: "Fila por pagina",
    rangerSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  const columnas = [
    {
      name: "Item",
      selector: "id",
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Nombres y apellidos",
      selector: (row) => (row.person && row.person.name ? row.person.name : ""),
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Nº de documento",
      selector: (row) => (row.person && row.person.dni ? row.person.dni : ""),
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Estado",
      selector: (row) => (row.status === 1 ? "Particular" : "Empresa"),
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Tipo de atención",
      // selector: "service.name",
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Código de barras",
      button: true,
      cell: (e) => (
        <button className="table__tablebutton editar">
          <i class="fas fa-barcode" onClick={() => CodigoBarras(e)}></i>
        </button>
      ),
    },
    {
      name: "Declaración jurada",
      button: true,
      cell: (e) => (
        <button className="table__tablebutton editar">
          <i
            class="far fa-file-pdf"
            onClick={() => {
              generarDeclaracionJurada();
            }}
          ></i>{" "}
        </button>
      ),
    },
    {
      name: "Consentimiento informado",
      button: true,
      cell: (e) => (
        <button className="table__tablebutton editar">
          <i
            class="far fa-file-pdf"
            onClick={() => {
              generarConsentimientoInformado();
            }}
          ></i>{" "}
        </button>
      ),
    },
    {
      name: "Ficha COVID19",
      button: true,
      cell: (e) => (
        <button className="table__tablebutton editar">
          <i
            class="far fa-file-pdf"
            onClick={() => {
              generarFichaCovid();
              // generarFichaCovid();
            }}
          ></i>{" "}
        </button>
      ),
    },
  ];

  const handleDelete = (e) => {
    console.log("eliminado", e);
  };

  const handleEditar = (e) => {
    console.log("editar", e);
  };

  useEffect(() => {
    // const filtrarElemento = () => {
    //   const search = servicios.filter((data) => {
    //     return (
    //       data.categoria
    //         .normalize("NFD")
    //         .replace(/[\u0300-\u036f]/g, "")
    //         .toLocaleLowerCase()
    //         .includes(busqueda) ||
    //       data.subcategoria
    //         .normalize("NFD")
    //         .replace(/[\u0300-\u036f]/g, "")
    //         .toLocaleLowerCase()
    //         .includes(busqueda) ||
    //       data.precioregular
    //         .normalize("NFD")
    //         .replace(/[\u0300-\u036f]/g, "")
    //         .toLocaleLowerCase()
    //         .includes(busqueda) ||
    //       data.descuentoempresas
    //         .normalize("NFD")
    //         .replace(/[\u0300-\u036f]/g, "")
    //         .toLocaleLowerCase()
    //         .includes(busqueda) ||
    //       data.descuentomiembros
    //         .normalize("NFD")
    //         .replace(/[\u0300-\u036f]/g, "")
    //         .toLocaleLowerCase()
    //         .includes(busqueda)
    //     );
    //   });
    //   setServicio(search);
    // };
    // filtrarElemento();
  }, [busqueda]);

  const handleOnChange = (e) => {
    setBusqueda(([e.target.name] = e.target.value));
  };
  return (
    <>
      <div className="container">
        {/* <h3 className="mt-3">Historial</h3> */}
        <div>
          <div>
            <input
              type="text"
              className="inputBuscar"
              placeholder="Buscar"
              name="busqueda"
              value={busqueda}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <label className="mt-2">
          Las reservas de servicios que se realizaron en su local son las
          siguientes:
        </label>
        <ToastContainer />
        <div className="row px-2">
          <div className=" table-responsive">
            <DataTable
              className="dataTable"
              columns={columnas}
              data={attention}
              pagination
              paginationComponentOptions={paginacionOpciones}
              fixedHeader
              fixedHeaderScrollHeight="450px"
              noDataComponent={
                <div className="spinner">
                  <i className="fas fa-inbox table__icono"></i>
                  <p style={{ color: "grey" }}>No hay datos</p>
                </div>
              }
            />
          </div>
        </div>
      </div>

      <CodigoBarrasHistorial
        codigoHistorial={codigoHistorial}
        setCodigoHistorial={setCodigoHistorial}
        dataBarCode={dataBarCode}
      />

      {/* 

      <DeclaracionJurada

        declaracionJurada={declaracionJurada}
        setDeclaracionJurada = {setDeclaracionJurada}
      
      />

      <ConsentimientoInformado
      
        consentimiento={consentimiento}
        setConsentimiento={setConsetimiento}
      />

      <FichaCovid

        fichaCov = {fichaCov}
        setFichaCov ={setFichaCov}
      /> */}
    </>
  );
};

export default Historial;
