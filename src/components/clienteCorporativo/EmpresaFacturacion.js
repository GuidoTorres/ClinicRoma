import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { ToastContainer } from 'react-toastify';
// import { clinicas } from '../../data/clinicas';
// import image from '../../assets/logo/logo.png'
import jsPDF  from "jspdf";
// import 'jspdf-autotable';
import Comentarios from './Modales/Comentarios';

const EmpresaFacturacion = () => {
  const [busqueda, setBusqueda] = useState('');
  const [clinica, setClinica] = useState([]);

  const [modalIsOpen,setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }



  const paginacionOpciones = {
    rowsPerPageText: 'Fila por pagina',
    rangerSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  const columnas = [
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
      name: 'Nº de factura',
      selector: 'razonsocial',
      sortable: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Comentarios',
      button: true,
      cell: (e) => (
        <button
          onClick={() => openModal()}
          className="table__tablebutton eliminar"
        >
          <i class="far fa-file-pdf"></i>
        </button>
      ),
    },
    {
      name: 'Factura',
      button: true,
      cell: (e) => (
        <button
          onClick={() => handleDelete()}
          className="table__tablebutton eliminar"
        >
          <i class="far fa-file-pdf"></i>
        </button>
      ),
    },
    {
      name: 'Factura',
      button: true,
      cell: (e) => (
        <button
          onClick={() => handleDelete(e)}
          className="table__tablebutton eliminar"
        >
          <i class="far fa-file-pdf"></i>
        </button>
      ),
    },


  ];

  const generarPdf = () =>{

    const doc = new jsPDF('p', 'pt');
    doc.setFontSize(10);

    // doc.addImage(image, 'PNG', 60,20,180,100)

    doc.setFillColor(255,255,255);
    doc.rect(400, 20, 150, 100, 'FD');

    doc.text(440, 50, 'RUC: 200000002')
    doc.text(420, 70, 'FACTURA ELECTRÓNICA')
    doc.text(440, 90, 'F001-00000011')

    doc.text(60,150, 'FECHA DE EMISIÓN')
    doc.text(170,150, ': 20/05/2021')

    doc.text(60,170, 'SEÑOR(ES)')
    doc.text(170,170, ': Alles Peru' )

    doc.text(60,190, 'RUC')
    doc.text(170,190, ': 20104578922')

    doc.text(60,210, 'DIRECCIÓN')
    doc.text(170,210, ': Matara sn, CUSCO-CUSCO')

    doc.text(60,230, 'TELÉFONO')
    doc.text(170,230, ': 987654768')

    doc.text(60,250, 'MONEDA')
    doc.text(170,250, ': Soles')

    doc.setLineWidth(0.5)
    doc.line(270, 25, 160, 25)



    doc.autoTable( {
      theme:'plain',
      tableWidth: "grid",
      head: [['Cant.', 'Unidad', 'Descripción', 'Total']],
      margin: { top: 270, left: 60, },
      body: [
        ['1.000', 'servicio', 'Alquiler de cisterna', '96.78'],
        ['1.000', 'unidades', 'Barniz', '25.40'],
        ['1.000', 'unidades', 'Barniz', '25.40'],

        // ...
      ],
      foot:[['Son: ciento veinte y dos'],
      ['','','',''],
      ['','','', 'OP. EXONERADAS    : S/'],
      ['','','', 'OP. GRAVADAS         : S/'],
      ['','','', 'IGV                               : S/'],
      ['','','', 'TOTAL A PAGAR        : S/'],
    ]

    })


    

    doc.setFont('courier')


    

    
      window.open(doc.output('bloburl'), '_blank');

}

  const handleDelete = (e) => {
    console.log('eliminado', e);
  };

  const handleEditar = (e) => {
    console.log('editar', e);
  };

  useEffect(() => {
    // const filtrarElemento = () => {
    //   const search = clinicas.filter((data) => {
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
    <div className="facturacion container ">
    {/* <button type="button" class="btn btn-primary" onClick={generarPdf}>GenerarPDF</button> */}

      {/* <h3 className="tituloFacturacion mt-3">Facturación</h3> */}
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
      <ToastContainer />
      <div className="row px-2">
        <div className="tabla table-responsive">
          <div className="tablaContenedor">
          <DataTable
            className="dataTable"
            columns={columnas}
            data={clinica}
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight="450px"
            noDataComponent={<i className="fas fa-inbox table__icono"></i>}
          />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

    </div> 

    <Comentarios
    modalIsOpen={modalIsOpen}
     setIsOpen={setIsOpen}
    />

        </>
    )
}

export default EmpresaFacturacion
