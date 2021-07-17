import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';

import { fetchGETPOSTPUTDELETE } from '../../helpers/fetch';
import { paginacionOpciones } from '../../helpers/tablaOpciones';
import MReserva from './MReserva';

const Reservas = () => {
  const [busqueda, setBusqueda] = useState('');
  const [listRegistro, setListRegistro] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [getDateAttention, setGetDateAttention] = useState([]);

  const getAttention = () => {
    fetchGETPOSTPUTDELETE('attention_clinic')
      .then((data) => data.json())
      .then((datos) => setGetDateAttention(datos.data));
  };

  useEffect(() => {
    getAttention();
  }, []);
  console.log(getDateAttention[22]);
  const columnas = [
    {
      name: 'Item',
      selector: 'id',
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'Tipo de documento',
      selector: (row) =>
        row.person && row.person.document_type_id === 3
          ? 'Carné de extranjería'
          : row.person && row.person.document_type_id === 2
          ? 'Pasaporte'
          : row.person && row.person.document_type_id === 1
          ? 'DNI'
          : '',
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'Nº documento',
      selector: (row) => (row.person && row.person.dni ? row.person.dni : ''),
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'Nombre',
      selector: (row) => (row.person && row.person.name ? row.person.name : ''),
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'Apellido',
      selector: (row) =>
        row.person && row.person.pat_lastname ? row.person.pat_lastname : '',

      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'Tipo prueba',
      selector: (row) =>
        row.service && row.service.name ? row.service.name : '',

      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'Fecha solicitud',
      selector: (row) => (row.date_creation ? row.date_creation : ''),
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },

    {
      name: 'Código Barras',
      button: true,
      cell: (e) => (
        <button onClick={() => handleBarCode(e)} className="table__tablebutton">
          <i className="fas fa-barcode"></i>
        </button>
      ),
    },
    {
      name: 'Atender',
      button: true,
      cell: (e) => (
        <button
          onClick={() => handleDetalles(e)}
          className="table__tablebutton"
        >
          <i className="fas fa-angle-right"></i>
        </button>
      ),
    },
  ];
  //
  useEffect(() => {
    const filtrarElemento = () => {
      const search =
        getDateAttention.length > 0 &&
        getDateAttention.filter((data) => {
          return (
            data.person.dni.toString().includes(busqueda) ||
            data.person.name
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLocaleLowerCase()
              .includes(busqueda) ||
            data.person.pat_lastname
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLocaleLowerCase()
              .includes(busqueda)
          );
        });
      setListRegistro(search);
    };
    filtrarElemento();
  }, [busqueda, getDateAttention]);

  const handleSearch = (e) => {
    setBusqueda(([e.target.name] = e.target.value));
  };
  const handleDetalles = (e) => {
    Swal.fire({
      title: '¿Atender paciente?',
      text: `${e.person.name + ' ' + e.person.pat_lastname}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Atender',
    }).then((result) => {
      if (result.isConfirmed) {
        fetchGETPOSTPUTDELETE(`attention/attend/${e.id}`).then((data) => {
          console.log(data);
          if (data.status === 200) {
            Swal.fire(
              'Éxito!',
              'Se genero la atención correctamente.',
              'success'
            );

            getAttention();
          }
        });
      }
    });
  };
  const handleBarCode = () => {
    setOpenModal(true);
  };
  //
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
            data={listRegistro}
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight="500px"
            noDataComponent={
              <div className="spinner">
                <i className="fas fa-inbox table__icono"></i>
                <p style={{ color: 'lightgrey' }}>No hay datos</p>
              </div>
            }
          />
        </div>
      </div>
      {openModal && (
        <MReserva openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default Reservas;
