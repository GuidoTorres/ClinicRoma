import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { lasubir } from "../../data/LASubir";
import { fetchGETPOSTPUTDELETE } from "../../helpers/fetch";

import { paginacionOpciones } from "../../helpers/tablaOpciones";
import MDescargar from "./Modales/MDescargar";
import MSubirLaboratorio from "./MSubirLaboratorio";

const Historial = () => {
  const [busqueda, setBusqueda] = useState("");
  const [listRegistro, setListRegistro] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openDescarga, setOpenDescarga] = useState(false);
  const [results, setResults] = useState({});

  const getResults = () => {
    fetchGETPOSTPUTDELETE("result_historial")
      .then((data) => data.json())
      .then((datos) => setResults(datos.data));
  };

  useEffect(() => {
    getResults();
  }, []);

  console.log(results);

  const columnas = [
    {
      name: "Item",
      selector: "id",
      sortable: true,
      style: {
        borderBotton: "none",
        color: "#555555",
      },
    },
    {
      name: "Tipo de usuario",
      selector: (row) => (row.people_id === 1 ? "Particular" : "Empresa"),
      sortable: true,
      style: {
        borderBotton: "none",
        color: "#555555",
      },
    },
    {
      name: "Nº de documento",
      selector: (row) => (row.person.dni ? row.person.dni : ""),
      sortable: true,
      style: {
        borderBotton: "none",
        color: "#555555",
      },
    },
    {
      name: "Fecha",
      selector: (row) => (row.result.date ? row.result.date : ""),
      sortable: true,
      style: {
        borderBotton: "none",
        color: "#555555",
      },
    },
    {
      name: "Nombre",
      selector: (row) => (row.person.name ? row.person.name : ""),
      sortable: true,
      style: {
        borderBotton: "none",
        color: "#555555",
      },
    },
    {
      name: "Apellido",
      selector: (row) =>
        row.person.pat_lastname ? row.person.pat_lastname : "",

      sortable: true,
      style: {
        borderBotton: "none",
        color: "#555555",
      },
    },
    {
      name: "Visualización",
      button: true,
      cell: (e) => (
        <button
          // onClick={() => handleDetalles(e)}
          className="table__tablebutton"
        >
          <i class="fas fa-file-pdf"></i>
        </button>
      ),
    },
  ];

  useEffect(() => {
    const filtrarElemento = () => {
      const search = lasubir.filter((data) => {
        return (
          data.tipo
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.dni.toString().includes(busqueda) ||
          data.fecha
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.nombre
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.apellido
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase()
            .includes(busqueda)
        );
      });
      setListRegistro(search);
    };
    filtrarElemento();
  }, [busqueda]);
  //
  const handleDetalles = (e) => {
    // console.log(e);
    setOpenModal(true);
  };

  const handleSearch = (e) => {
    setBusqueda(([e.target.name] = e.target.value));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="barra">
            <p>Historial</p>
            <div className="laboratorio__resultados">
              <div>
                <label>Categoría</label>
                <select class="form-select" aria-label="Default select example">
                  <option value="1">COVID - 19</option>
                </select>
              </div>
              <div>
                <label>Sub-categoría</label>
                <select class="form-select" aria-label="Default select example">
                  <option>Seleccione</option>
                  <option value="1">Antigeno</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <div className="adminregistro__option">
              <div>
                <input
                  type="text"
                  placeholder="Buscar"
                  name="busqueda"
                  value={busqueda}
                  onChange={handleSearch}
                />
              </div>
              <div>
                <button
                  className="botones"
                  onClick={(e) => setOpenDescarga(true)}
                >
                  Descargar
                </button>
              </div>
            </div>

            <DataTable
              columns={columnas}
              data={results}
              pagination
              paginationComponentOptions={paginacionOpciones}
              fixedHeader
              fixedHeaderScrollHeight="500px"
              noDataComponent={
                <div className="spinner">
                  <i className="fas fa-inbox table__icono"></i>
                  <p style={{ color: "lightgrey" }}>No hay datos</p>
                </div>
              }
            />
          </div>
        </div>
        {openModal && (
          <MSubirLaboratorio
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
        {openModal && (
          <MDescargar
            openDescarga={openDescarga}
            setOpenDescarga={setOpenDescarga}
          />
        )}
      </div>
    </div>
  );
};

export default Historial;
