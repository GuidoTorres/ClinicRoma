import React, { useEffect, useState } from "react";

import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

// import { servicio } from '../../../data/AServicio';
import {
  fetchGETPOSTPUTDELETE,
  fetchGETPOSTPUTDELETEJSON,
} from "../../../helpers/fetch";
import { paginacionOpciones } from "../../../helpers/tablaOpciones";
import MCrearServicio from "./MCrearServicio";
import MDescargar from "./MDescargar";
import MServicio from "./MServicio";
import MSubCategoria from "./MSubCategoria";

const Servicio = () => {
  const [busqueda, setBusqueda] = useState("");
  // const [listRegistro, setListRegistro] = useState([]);
  const [getServicio, setGetServicio] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [dataSelected, setDataSelected] = useState({});
  const [openSubModal, setopenSubModal] = useState(false);
  const [subCategoria, setSubCategoria] = useState([]);
  const [openHModal, setOpenHModal] = useState(false);
  const [openServicio, setOpenServicio] = useState(false);
  // const [servicios, setServicios] = useState({});

  const getServices = () => {
    fetchGETPOSTPUTDELETE("services")
      .then((info) => info.json())
      .then((datos) => setGetServicio(datos.data));
  };

  useEffect(() => {
    getServices();
  }, []);

  console.log(getServicio);
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
      name: "Categoria",
      selector: "name",
      sortable: true,
      style: {
        borderBotton: "none",
        color: "#555555",
      },
    },
    {
      name: "Sub-categorias",
      button: true,
      cell: (e) => (
        <button
          onClick={() => handleSubcategoria(e)}
          className="table__tablebutton"
        >
          <i className="fas fa-eye"></i>
        </button>
      ),
    },
    {
      name: "Historial",
      button: true,
      cell: (e) => (
        <button
          onClick={() => handleHistorial(e)}
          className="table__tablebutton"
        >
          <i className="far fa-file-excel"></i>
        </button>
      ),
    },
    {
      name: "Editar",
      button: true,
      cell: (e) => (
        <button onClick={() => handleEditar(e)} className="table__tablebutton">
          <i className="fas fa-pencil-alt"></i>
        </button>
      ),
    },
    {
      name: "Eliminar",
      button: true,
      cell: (e) => (
        <button
          onClick={() => handleEliminar(e)}
          className="table__tablebutton"
        >
          <i className="far fa-trash-alt"></i>
        </button>
      ),
    },
  ];

  // useEffect(() => {
  //   const filtrarElemento = () => {
  //     const search = servicio.filter((data) => {
  //       return (
  //         data.categoria
  //           .normalize('NFD')
  //           .replace(/[\u0300-\u036f]/g, '')
  //           .toLocaleLowerCase()
  //           .includes(busqueda) ||
  //         data.subcategoria
  //           .normalize('NFD')
  //           .replace(/[\u0300-\u036f]/g, '')
  //           .toLocaleLowerCase()
  //           .includes(busqueda) ||
  //         data.precio.toString().includes(busqueda)
  //       );
  //     });
  //     setListRegistro(search);
  //   };
  //   filtrarElemento();
  // }, [busqueda]);
  //

  const handleEditar = (e) => {
    setOpenModal(true);
    setDataSelected(e);
  };

  const handleEliminar = (e) => {
    console.log(e);
    const inputOptions = [];

    e.services.forEach(function (value) {
      inputOptions[value.id] = value.name;
    });

    Swal.fire({
      title: "¿Desea eliminar?",
      text: `${e.name}`,
      icon: "warning",
      showCancelButton: true,
      input: "select",
      inputOptions,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetchGETPOSTPUTDELETEJSON(
          `services/${result.value}`,
          {},
          "DELETE"
        ).then((result) => {
          if (result.status === 204) {
            Swal.fire({
              icon: "success",
              title: "Éxito",
              text: "Se elimino la sub-categoria correctamente.",
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Aceptar",
            }).then((resp) => {
              if (resp.isConfirmed) {
                getServices();
              }
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "!Ups¡",
              text: "Algo salió mal.",
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Cerrar",
            });
          }
        });
      }
    });
  };

  const handleSubcategoria = (e) => {
    setopenSubModal(true);
    setSubCategoria(e);
  };

  const handleHistorial = (e) => {
    setOpenHModal(true);
    setDataSelected(e);
  };

  const handleAddService = () => {
    setOpenServicio(true);
  };

  const handleSearch = (e) => {
    setBusqueda(([e.target.name] = e.target.value));
  };
  return (
    <div className="container">
      <div className="row">
        <h3 className="titulo">Servicios</h3>
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
              <label>
                Agregar servicio{" "}
                <i
                  className="fas fa-plus-circle"
                  onClick={handleAddService}
                ></i>{" "}
              </label>
            </div>
          </div>

          <DataTable
            columns={columnas}
            data={getServicio}
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
        <MServicio
          openModal={openModal}
          setOpenModal={setOpenModal}
          dataSelected={dataSelected}
          getServices={getServices}
        />
      )}
      {openServicio && (
        <MCrearServicio
          openServicio={openServicio}
          setOpenServicio={setOpenServicio}
          getServices={getServices}
        />
      )}
      {openSubModal && (
        <MSubCategoria
          openSubModal={openSubModal}
          setOpenSubModal={setopenSubModal}
          subCategoria={subCategoria}
        />
      )}
      {openHModal && (
        <MDescargar
          setOpenHModal={setOpenHModal}
          openHModal={openHModal}
          dataSelected={dataSelected}
          getServices={getServices}
          subCategoria={subCategoria}
        />
      )}
    </div>
  );
};

export default Servicio;
