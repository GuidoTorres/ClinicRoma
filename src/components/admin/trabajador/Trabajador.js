import React, { useEffect, useState } from 'react';

import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';

import { fetchGETPOSTPUTDELETE } from '../../../helpers/fetch';
import { paginacionOpciones } from '../../../helpers/tablaOpciones';
import MTrabajador from './MTrabajador';

const Trabajador = () => {
  const [busqueda, setBusqueda] = useState('');
  const [listRegistro, setListRegistro] = useState([]);
  const [getTrabajador, setGetTrabajador] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [dataSelected, setDataSelected] = useState();
  const [editar, setEditar] = useState();
  const [trabajadores, setTrabajador] = useState([]);

  const getEmployee = () => {
    fetchGETPOSTPUTDELETE('employees')
      .then((info) => info.json())
      .then((datos) => setTrabajador(datos));
  };
  useEffect(() => {
    getEmployee();
  }, []);

  const columnas = [
    {
      name: 'Item',
      selector: 'user_id',
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'Tipo',
      selector: (row) => (row.type ? row.type : ''),
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'Nombre',
      selector: (row) => (row.name ? row.name : ''),
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'Editar',
      button: true,
      cell: (e) => (
        <button onClick={() => handleEditar(e)} className="table__tablebutton">
          <i className="fas fa-pencil-alt"></i>
        </button>
      ),
    },
    {
      name: 'Eliminar',
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

  console.log(trabajadores);

  // useEffect(() => {
  //   const filtrarElemento = () => {
  //     const search = trabajadores.filter((data) => {
  //       return (
  //         data.username
  //           .normalize('NFD')
  //           .replace(/[\u0300-\u036f]/g, '')
  //           .toLocaleLowerCase()
  //           .includes(busqueda) ||
  //         data.role.name
  //           .normalize('NFD')
  //           .replace(/[\u0300-\u036f]/g, '')
  //           .toLocaleLowerCase()
  //           .includes(busqueda)
  //       );
  //     });
  //     setListRegistro(search);
  //   };
  //   filtrarElemento();
  // }, [busqueda, trabajadores]);
  //

  const handleEditar = (e) => {
    setOpenModal(true);
    setDataSelected(e);
    setEditar(true);
  };
  const handleEliminar = (e) => {
    Swal.fire({
      title: '¿Desea eliminar?',
      text: `${e.name ? e.name : ''}`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        fetchGETPOSTPUTDELETE(`employees/${e.user_id}`, {}, 'DELETE').then(
          (result) => {
            if (result.status === 204) {
              Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Se elimino el trabajador correctamente.',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Aceptar',
              }).then((resp) => {
                if (resp.isConfirmed) {
                  getEmployee();
                }
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: '!Ups¡',
                text: 'Algo salió mal.',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Cerrar',
              });
            }
          }
        );
      }
    });
  };
  const handleSearch = (e) => {
    setBusqueda(([e.target.name] = e.target.value));
  };
  const handleAddRegistro = () => {
    setOpenModal(true);
  };
  return (
    <div className="container">
      <div className="row">
      <h3 className ="titulo">Trabajadores</h3>
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
                Agregar trabajador{' '}
                <i
                  className="fas fa-plus-circle"
                  onClick={handleAddRegistro}
                ></i>{' '}
              </label>
            </div>
          </div>

          <DataTable
            columns={columnas}
            data={trabajadores}
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
        <MTrabajador
          openModal={openModal}
          setOpenModal={setOpenModal}
          getEmployee={getEmployee}
          dataSelected={dataSelected}
          setDataSelected={setDataSelected}
          editar={editar}
          setEditar={setEditar}
        />
      )}
    </div>
  );
};

export default Trabajador;
