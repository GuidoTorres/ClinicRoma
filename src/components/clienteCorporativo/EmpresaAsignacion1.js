import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import DataTable from "react-data-table-component";
// import iconAgregar from '../../assets/images/icon_anadir.png';
// import image from '../../assets/logo/logo.png'
import { usuario } from "../../data/ACUsuario";
import XLSX from "xlsx";

import { ToastContainer } from "react-toastify";
// import { clinicas } from '../../data/clinicas';

const EmpresaAsignacion = () => {
  let history = useHistory();
  const fileRef = useRef();

  const [busqueda, setBusqueda] = useState("");
  const [clinica, setClinica] = useState([]);
  const [header, setHeader] = useState();
  const [excel, setExcel] = useState();

  const paginacionOpciones = {
    rowsPerPageText: "Fila por pagina",
    rangerSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };
  const triggerClick = () => {
    fileRef.current.click();
  };

  const converToJson = (headers, data) => {
    const rows = [];
    data.forEach((row) => {
      let rowData = {};
      row.forEach((element, index) => {
        rowData[headers[index]] = element;
      });
      rows.push(rowData);
    });
    return rows;
  };

  const importExcel = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      //parse data
      const bstr = event.target.result;
      const workBook = XLSX.read(bstr, { type: "binary" });

      //get first sheet
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];

      //convert to array
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      const headers = fileData[0];
      const heads = headers.map((head) => ({ title: head, field: head }));
      setHeader(heads);

      //eliminando cabecera
      fileData.splice(0, 1);

      setExcel(converToJson(headers, fileData));
    };
    reader.readAsBinaryString(file);
  };

  const columnas = [
    {
      name: "Seleccionar",
      button: true,
      cell: (e) => (
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
      ),
    },
    {
      name: "Ítem",
      selector: "id",
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Tipo de documento",
      selector: "documento",
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Nº de documento",
      selector: "nro",
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Nombres",
      selector: "nombre",
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Sexo",
      selector: "sexo",
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Fecha de Nacimiento",
      selector: "fecha",
      sortable: true,
      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Departamento de Nacimiento",
      selector: "departamento",
      sortable: true,

      style: {
        color: "#8f9196",
        borderBotton: "none",
      },
    },
    {
      name: "Cargo",
      button: true,
    },
  ];

  useEffect(() => {
    // const filtrarElemento = () => {
    //   const search = excel.filter((data) => {
    //     return (
    //       data.razonsocial
    //         .normalize('NFD')
    //         .replace(/[\u0300-\u036f]/g, '')
    //         .toLocaleLowerCase()
    //         .includes(busqueda) ||
    //       data.ruc
    //         .normalize('NFD')
    //         .replace(/[\u0300-\u036f]/g, '')
    //         .toLocaleLowerCase()
    //         .includes(busqueda) ||
    //       data.responsable
    //         .normalize('NFD')
    //         .replace(/[\u0300-\u036f]/g, '')
    //         .toLocaleLowerCase()
    //         .includes(busqueda) ||
    //       data.telefono.toString().includes(busqueda) ||
    //       data.correo
    //         .normalize('NFD')
    //         .replace(/[\u0300-\u036f]/g, '')
    //         .toLocaleLowerCase()
    //         .includes(busqueda) ||
    //       data.actividad
    //         .normalize('NFD')
    //         .replace(/[\u0300-\u036f]/g, '')
    //         .toLocaleLowerCase()
    //         .includes(busqueda)
    //     );
    //   });
    //   setClinica(search);
    // };
    // filtrarElemento();
  }, [busqueda]);

  const handleOnChange = (e) => {
    setBusqueda(([e.target.name] = e.target.value));
  };

  return (
    <>
      <div className="container mt-3">
        {/* <label>Asignacion de pruebas</label> */}
        <div className="asignacion1">
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
          <div
            // onClick={(e) => history.push('/admin/registroempresa')}
            style={{display:'flex', alignItems:'center'}}
            >
            <input
              type="file"
              ref={fileRef}
              id="file"
              onChange={importExcel}/>

            <p className="pagregar" onClick={triggerClick} style={{cursor:'pointer', marginRight:'5px'}}>Cargar</p>
            <i class="fas fa-upload" onClick={triggerClick} style={{cursor:'pointer'}}></i>

          </div>
        </div>
        <div className="row mt-4">
          <ToastContainer />
          <div className="row px-2">
            <div className=" table-responsive">
              <DataTable
                className="dataTable"
                id="table"
                columns={columnas}
                data={excel}
                pagination
                paginationComponentOptions={paginacionOpciones}
                fixedHeader
                fixedHeaderScrollHeight="450px"
                noDataComponent={<i className="fas fa-inbox table__icono"></i>}
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="botones btn btn-primary"
            onClick={(e) => history.push("/empresa/asignacion2")}
          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};

export default EmpresaAsignacion;
