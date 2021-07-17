import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import CodigoBarras from "./Modales/CodigoBarras";
import { ratencion } from "../../data/RAtencion";
import { paginacionOpciones } from "../../helpers/tablaOpciones";
import Swal from "sweetalert2";
import {
  fetchGETPOSTPUTDELETE,
  fetchGETPOSTPUTDELETEJSON,
} from "../../helpers/fetch";

const Atencion = () => {
  const [busqueda, setBusqueda] = useState("");
  const [listRegistro, setListRegistro] = useState([]);
  const [openModalBar, setOpenModalBar] = useState(false);
  const [dataBarCode, setDataBarCode] = useState({});
  const [attention, setAttention] = useState({});
  const [generateAttention, setGenerateAttention] = useState({});

  //clinic care es el optimo
  // por ahora usar clinics get

  const getAttention = () => {
    fetchGETPOSTPUTDELETE("attention")
      .then((data) => data.json())
      .then((datos) => setAttention(datos.data));
  };

  const getHora = () => {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    return `${h > 9 ? h : "0" + h}${":"}${m > 9 ? m : "0" + m}${":"}${
      s > 9 ? s : "0" + s
    }`;
  };

  useEffect(() => {
    getAttention();
  }, []);

  console.log(attention);
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
      name: "Tipo de documento",
      selector: (row) =>
        row.person && row.person.document_type_id === 3
          ? "Carné de extranjería"
          : row.person && row.person.document_type_id === 2
          ? "Pasaporte"
          : row.person && row.person.document_type_id === 1
          ? "DNI"
          : "",
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
      name: "Tipo de prueba",
      selector: (row) =>
        row.service && row.service.name ? row.service.name : "",
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
        <button
          className="table__tablebutton editar"
          onClick={() => openBarcode(e)}
        >
          <i className="fas fa-barcode"></i>
        </button>
      ),
    },
    {
      name: "Atencion",
      button: true,
      cell: (e) => (
        <button
          className="table__tablebutton editar"
          onClick={() => generarAtencion(e)}
        >
          <i className="fas fa-angle-right"></i>
        </button>
      ),
    },
  ];

  useEffect(() => {
    const filtrarElemento = () => {
      const search = ratencion.filter((data) => {
        return (
          data.nombre
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.dni.toString().includes(busqueda) ||
          data.tipoprueba
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

  const openBarcode = (e) => {
    setDataBarCode(e);
    setOpenModalBar(true);
  };

  const generarAtencion = (e) => {
    setGenerateAttention({
      date_creation: e.date_creation || "",
      time_attention: getHora(),
      people_id: e.people_id || "",
      service_id: e.service_id || "",
      clinic_id: e.clinic_id || "",
      codebar: "0213000011111",
    });
    Swal.fire({
      title: "¿Desea Atender al paciente?",
      text: `${e.person && e.person.name ? e.person.name : "No hay datos"}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Atender",
    }).then((result) => {
      if (result.isConfirmed) {
        fetchGETPOSTPUTDELETEJSON(`attention/attend/${e.id}`).then((data) =>
          console.log(data)
        );
        // .then((datos) => setAttention(datos.data));
        // Swal.fire("Éxito!", "Se genero la atención correctamente.", "success");
      }
    });
  };

  const handleSearch = (e) => {
    setBusqueda(([e.target.name] = e.target.value));
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
          </div>

          <DataTable
            columns={columnas}
            data={attention}
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

      {openModalBar && (
        <CodigoBarras
          openModalBar={openModalBar}
          setOpenModalBar={setOpenModalBar}
          dataBarCode={dataBarCode}
        />
      )}
    </div>
  );
};

export default Atencion;
