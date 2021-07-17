import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

import { paginacionOpciones } from "../../helpers/tablaOpciones";
import { rusuario } from "../../data/RUsuario";
import MCrearPaciente from "./MCrearPaciente";
import { fetchGETPOSTPUTDELETE } from "../../helpers/fetch";
import MGenerarAtencion from "./Modales/MGenerarAtencion";

const Usuarios = ({ history }) => {
  const [busqueda, setBusqueda] = useState("");
  const [listServicio, setListServicio] = useState([]);
  const [addRegistro, setAddRegistro] = useState(false);
  const [generarAtencion, setGenerarAtencion] = useState(false);
  const [getDateAttention, setGetDateAttention] = useState([]);
  const [editar, setEditar] = useState(false);
  const [dataSelected, setDataSelected] = useState({});

  const handleAddRegistro = () => {
    setAddRegistro(true);
  };
  const generateAttention = (e) => {
    setGenerarAtencion(true);
    setDataSelected(e);
  };

  const getAttention = () => {
    fetchGETPOSTPUTDELETE("patient")
      .then((data) => data.json())
      .then((datos) => setGetDateAttention(datos.data));
  };

  useEffect(() => {
    getAttention();
  }, []);

  console.log(getDateAttention);

  const columnas = [
    {
      name: "Item",
      selector: "id",
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
        width: "100px",
      },
    },
    {
      name: "Nombres y apellidos",
      selector: (row) => (row.name ? row.name : ""),
      sortable: true,
      grow: 2,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "DNI",
      selector: (row) => (row.dni ? row.dni : ""),
      sortable: true,
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Tipo de usuario",
      selector: (row) =>
        row.person && row.status === 1 ? "Particular" : "Empresa",
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Telefono",
      selector: (row) => (row.cellphone ? row.cellphone : ""),
      sortable: true,
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Correo",
      selector: (row) => (row.email ? row.email : ""),
      sortable: true,
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Generar atención",
      button: true,
      cell: (e) => (
        <button
          className="table__tablebutton editar"
          onClick={() => generateAttention(e)}
        >
          <i class="fas fa-stethoscope"></i>
        </button>
      ),
    },
    {
      name: "Editar",
      button: true,
      cell: (e) => (
        <button
          onClick={() => handleEditar(e)}
          className="table__tablebutton editar"
        >
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
          className="table__tablebutton eliminar"
        >
          <i className="far fa-trash-alt"></i>
        </button>
      ),
    },
  ];

  useEffect(() => {
    const filtrarElemento = () => {
      const search = rusuario.filter((data) => {
        return (
          data.nombre
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.dni.toString().includes(busqueda) ||
          data.tipousuario
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.telefono.toString().includes(busqueda) ||
          data.correo
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase()
            .includes(busqueda)
        );
      });
      setListServicio(search);
    };
    filtrarElemento();
  }, [busqueda]);

  const handleSearch = (e) => {
    setBusqueda(([e.target.name] = e.target.value));
  };

  const handleEditar = (e) => {
    setAddRegistro(true);
    setDataSelected(e);
    setEditar(true);
  };

  const handleEliminar = (e) => {
    Swal.fire({
      title: "¿Desea eliminar?",
      text: `${e.nombre}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "Se ha eliminado correctamente.", "success");
        fetchGETPOSTPUTDELETE(`attention/${e.id}`, {}, "DELETE")
          .then((result) => result.json())
          .then((data) => {
            if (data === "Has been deleted") console.log(data);
            getAttention();
          });
      }
    });
  };
  return (
    <div className="container">
      <div className="row">
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
                Crear paciente
                <i
                  className="fas fa-plus-circle"
                  onClick={handleAddRegistro}
                ></i>{" "}
              </label>
            </div>
          </div>

          <DataTable
            columns={columnas}
            data={getDateAttention}
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight="500px"
            noDataComponent={
              <div className="spinner">
                <i className="fas fa-inbox table__icono"></i>
                <p style={{ color: "grey" }}>No hay datos</p>
              </div>
            }
          />
        </div>
      </div>
      {addRegistro && (
        <MCrearPaciente
          addRegistro={addRegistro}
          setAddRegistro={setAddRegistro}
          getAttention={getAttention}
          dataSelected={dataSelected}
          editar={editar}
          setEditar={setEditar}
        />
      )}

      {generarAtencion && (
        <MGenerarAtencion
          generarAtencion={generarAtencion}
          setGenerarAtencion={setGenerarAtencion}
          dataSelected={dataSelected}
        />
      )}
    </div>
  );
};

export default Usuarios;
