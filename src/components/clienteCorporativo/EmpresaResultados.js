import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

// import image from '../../assets/logo/logo.png'

import { ToastContainer } from 'react-toastify';
// import { clinicas } from '../../data/clinicas';
import jsPDF  from "jspdf";
// import 'jspdf-autotable';

const EmpresaResultados = () => {
  const [busqueda, setBusqueda] = useState('');
  const [clinica, setClinica] = useState([]);

  const paginacionOpciones = {
    rowsPerPageText: 'Fila por pagina',
    rangerSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };
  
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
  const columnas = [
    {
      name: 'Seleccionar',
      selector: 'id',
      sortable: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
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
      name: 'Nombres y apellidos',
      selector: 'razonsocial',
      sortable: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Tipo de documento',
      selector: 'ruc',
      sortable: true,
      grow: 2,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Nº de documento',
      selector: 'ruc',
      sortable: true,
      grow: 2,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Teléfono',
      selector: 'responsable',
      sortable: true,
      right: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Correo',
      selector: 'telefono',
      sortable: true,
      right: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },

    {
      name: 'Estado',
      selector: 'telefono',
      sortable: true,
      right: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Resultados',
      button: true,
      cell: (e) => (
        <button
        type="button"
          onClick={() => generarPdf(e)}
          className="table__tablebutton eliminar"
        >
          <i class="far fa-file-pdf"></i>
        </button>
      ),
    },

  ];

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
    <div className=" container ">
      {/* <h3 className="tituloResultados mt-3">Resultados</h3> */}

      <div className="empresaResultado">
        <div >
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
        >
        <div class="form-check form-switch">
        <label class="form-check-label" for="flexSwitchCheckDefault">Enviar resultados automáticamente </label>
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
        </div>
          <button type="button" className="botones btn btn-primary">Enviar</button>

        </div>
      </div>
      <ToastContainer />
      <div className="row px-2">
        <div className=" table-responsive">
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
 
 
    </>
    )
}

export default EmpresaResultados
