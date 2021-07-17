import React, { useEffect, useRef, useState } from 'react';
import DataTable from 'react-data-table-component';
// import iconAgregar from '../../assets/images/icon_anadir.png';
// import image from '../../assets/logo/logo.png'
import { ToastContainer } from 'react-toastify';
import XLSX from 'xlsx'
import { fetchGETPOSTPUTDELETE, postExcel } from '../../helpers/fetch';
import EditarDatosTrabajador from './Modales/EditarDatosTrabajador'



const EmpresaRegistro = () => {
  const [busqueda, setBusqueda] = useState('');
  const [employees, setEmployees] = useState([]);
  const [header, setHeader]= useState()
  const [excel, setExcel] = useState();
  const [uploadExcel, setUploadExcel] = useState();
  const fileRef = useRef();

  const [modalIsOpen,setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const getEmployees = () =>{

    fetchGETPOSTPUTDELETE("company_employees").then(res=> res.json()).then(res=> setEmployees(res))
  }
  useEffect(()=>{

    getEmployees();

  },[])

  console.log(employees);

  const subirExcel = () =>{
    const formData = new FormData()

    formData.set("file", uploadExcel)

    fetchGETPOSTPUTDELETE("company_employees/import", formData, "POST").then(res => console.log(res))

  }

  const triggerClick= () =>{

    fileRef.current.click();
  }



  const paginacionOpciones = {
    rowsPerPageText: 'Fila por pagina',
    rangerSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  const converToJson = (headers,data)=>{

    const rows= []
    data.forEach(row => {
      let rowData = {}
      row.forEach((element, index) => {

        rowData[headers[index]]= element
      })
      rows.push(rowData)
      
    });
    return rows;

  }

  const importExcel = (e)=>{

    const file = e.target.files[0]
    setUploadExcel(file)
    const reader = new FileReader()
    reader.onload = (event) =>{
        //parse data
        const bstr = event.target.result
        const workBook = XLSX.read(bstr, {type:"binary"})

        //get first sheet
        const workSheetName = workBook.SheetNames[0]
        const workSheet = workBook.Sheets[workSheetName]

        //convert to array
        const fileData = XLSX.utils.sheet_to_json(workSheet, {header:1})
        const headers = fileData[0]
        const heads = headers.map(head=>({title:head, field:head}))
        setHeader(heads)

        //eliminando cabecera
        fileData.splice(0,1)
      
        setExcel(converToJson(headers, fileData))
    }
        reader.readAsBinaryString(file)
  }

  const columnas = [
    {
      name: 'Seleccionar',
      button: true,
      cell: (e) => (
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
      ),
    },
    {
      name: 'Ítem',
      selector: 'id',
      sortable: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Tipo de documento',
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
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Nº de documento',
      selector: row => row.person && row.person.dni ? row.person.dni :"",
      sortable: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Nombres',
      selector: row => row.person && row.person.name ? row.person.name :"",
      sortable: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Sexo',
      selector: row => row.person && row.person.gender_id === 1 ? "Masculino" :"Femenino",

      sortable: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Fecha de Nacimiento',
      selector: 'fecha',
      sortable: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Departamento de Nacimiento',
      selector: 'departamento',
      sortable: true,
      
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Cargo',
      selector: 'Cargo',
      sortable: true,
      
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },

  ];


  useEffect(() => {
    // const filtrarElemento = () => {
    //   const search = excel && excel.filter((data) => {
    //     return (
    //       excel.id
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
    //   setExcel(search);
    // };
    // filtrarElemento();


  }, [busqueda, excel]);

  const handleOnChange = (e) => {
    setBusqueda(([e.target.name] = e.target.value));
  };



  return (
    <>
    
    <div className="registro container " id="target">
      {/* <h3 className="tituloRegTrabajadores mt-3">Registro de trabajadores</h3> */}
      <div className="containerRegistro">
      <div className="">
            <div>
              <input
                type="text"
                placeholder="Buscar"
                name="busqueda"
                value={busqueda}
                onChange={handleOnChange}
              />
            </div>
          </div>
        <div
          className="contenedorDer"
          // onClick={(e) => history.push('/admin/registroempresa')}
        >
          <input className="cargar" type='file' ref={fileRef} id='file' onChange={importExcel} />
          
          <p className="pagregar" onClick={triggerClick} style={{cursor:'pointer'}}>Cargar trabajadores</p>
          <i class="fas fa-upload" onClick={triggerClick} style={{cursor:'pointer'}}></i>
          
          <p className="pagregar" >Editar</p>
          <i class="fas fa-pencil-alt" onClick={()=> openModal()}></i>

          <p className="pagregar">Eliminar</p>
          <i class="fas fa-trash-alt"></i>

        </div>
      </div>
      <ToastContainer />
      <div className="row px-2">

        <div className=" table-responsive">
          <DataTable
            className="dataTable"
            id="table"
            columns={columnas}
            data={employees}
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight="450px"
            noDataComponent={<i className="fas fa-inbox table__icono"></i>
            
          }
          />
        </div>

        <button type="button" class="botones btn btn-primary" onClick={subirExcel}>Subir archivo</button>
      </div>
    </div>
        
      <EditarDatosTrabajador
      
      modalIsOpen={modalIsOpen}
      setIsOpen={setIsOpen}
      />
    
</>
    )
}

export default EmpresaRegistro
