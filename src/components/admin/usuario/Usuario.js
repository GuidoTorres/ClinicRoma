import React, { useEffect, useState } from "react";

import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { usuario } from "../../../data/ACUsuario";
import { fetchGETPOSTPUTDELETE } from "../../../helpers/fetch";
import { paginacionOpciones } from "../../../helpers/tablaOpciones";
import MUsuario from "./MUsuario";

const Usuario = () => {
  const [busqueda, setBusqueda] = useState("");
  const [listRegistro, setListRegistro] = useState([]);
  const [getUsuario, setGetUsuario] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [dataSelected, setDataSelected] = useState({});

  // //TODO LISTAR
  const resp = () => {
    fetchGETPOSTPUTDELETE("users")
      .then((data) => data.json())
      .then((datos) => setGetUsuario(datos));
  };

  useEffect(() => {
    resp();
  }, []);

  console.log(getUsuario);

  // console.log(getUsuario);
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
      name: "Tipo documento",
      selector: (row) => row.document_type || "",
      sortable: true,
      style: {
        borderBotton: "none",
        color: "#555555",
      },
    },
    {
      name: "Nº Documento",
      selector: (row) => row.dni || "",
      sortable: true,
      style: {
        borderBotton: "none",
        color: "#555555",
      },
    },
    {
      name: "Tipo usuario",
      selector: (row) => row.user_type || "",
      sortable: true,
      style: {
        borderBotton: "none",
        color: "#555555",
      },
    },
    {
      name: "Empresa",
      selector: (row) => row.company || "",
      sortable: true,
      style: {
        borderBotton: "none",
        color: "#555555",
      },
    },
    {
      name: "Telefono",
      selector: (row) => row.phone || "",
      sortable: true,
      style: {
        borderBotton: "none",
        color: "#555555",
      },
    },
    {
      name: "Correo",
      selector: (row) => row.email || "",
      sortable: true,
      style: {
        borderBotton: "none",
        color: "#555555",
      },
    },
    {
      name: "Generar atención",
      button: true,
      cell: (e) => (
        <button className="table__tablebutton">
          <i class="fas fa-stethoscope"></i>
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

  useEffect(() => {
    const filtrarElemento = () => {
      const search = usuario.filter((data) => {
        return (
          data.documento
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.numero.toString().includes(busqueda) ||
          data.usuario
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.empresa
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.telefono.toString().includes(busqueda) ||
          data.correo
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.atencion
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

  const handleEditar = (e) => {
    setOpenModal(true);
    setDataSelected(e);
  };
  const handleEliminar = (e) => {
    console.log(e);
    Swal.fire({
      title: "¿Desea eliminar?",
      text: `${e.dni}`,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetchGETPOSTPUTDELETE(`users/${e.id}`, {}, "DELETE").then((result) => {
          if (result.status === 204) {
            Swal.fire(
              "Eliminado!",
              "Se ha eliminado correctamente.",
              "success"
            ).then((response) => {
              if (response.isConfirmed) {
                resp();
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
  const handleSearch = (e) => {
    setBusqueda(([e.target.name] = e.target.value));
  };
  return (
    <div className="container">
      <div className="row">
        <h3 className="titulo">Usuarios</h3>
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
          </div>

          <DataTable
            columns={columnas}
            data={getUsuario}
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
        <MUsuario
          openModal={openModal}
          setOpenModal={setOpenModal}
          dataSelected={dataSelected}
        />
      )}
    </div>
  );
};

export default Usuario;
