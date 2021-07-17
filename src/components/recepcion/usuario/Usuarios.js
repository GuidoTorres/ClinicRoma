import React, { useState } from 'react';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';

import { rusuario } from '../../../data/RUsuario';
import { paginacionOpciones } from '../../../helpers/tablaOpciones';

const Usuarios = () => {
  const [busqueda, setBusqueda] = useState('');
  const [listRegistro, setListRegistro] = useState([]);



  const columnas = [
    {
      name: 'Item',
      selector: 'id',
      sortable: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
        width: '100px',
      },
    },
    {
      name: 'Nombres y apellidos',
      selector: 'categoria',
      sortable: true,
      center: 'true',
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Tipo de documento',
      selector: 'subcategoria',
      sortable: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Nº de documento',
      selector: 'subcategoria',
      sortable: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Tipo de usuario',
      selector: 'precioregular',
      sortable: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Teléfono',
      selector: 'descuentoempresas',
      sortable: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Correo',
      selector: 'descuentomiembros',
      sortable: true,
      style: {
        color: '#8f9196',
        borderBotton: 'none',
      },
    },
    {
      name: 'Generar atención',
      button: true,
      cell: (e) => (
        <button className="table__tablebutton editar">
          <i class="fas fa-stethoscope"></i>
        </button>
      ),
    },
    {
      name: 'Editar',
      button: true,
      cell: (e) => (
        <button className="table__tablebutton editar">
          <i className="fas fa-pencil-alt"></i>
        </button>
      ),
    },
    {
      name: 'Eliminar',
      button: true,
      cell: (e) => (
        <button
          //   onClick={() => handleDelete(e)}
          className="table__tablebutton eliminar"
        >
          <i className="far fa-trash-alt" onClick={handleEliminar}></i>
        </button>
      ),
    },
  ];

  useEffect(() => {
    const filtrarElemento = () => {
      const search = rusuario.filter((data) => {
        return (
          data.razon
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.ruc.toString().includes(busqueda) ||
          data.responsable
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.telefono.toString().includes(busqueda) ||
          data.correo
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase()
            .includes(busqueda)
        );
      });
      setListRegistro(search);
    };
    filtrarElemento();
  }, [busqueda]);
  //
  const handleOnChange = (e) => {
    setBusqueda(([e.target.name] = e.target.value));
  };

  const handleEliminar = (e) => {
    Swal.fire({
      title: '¿Desea eliminar?',
      text: `${e.razon}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', 'Se ha eliminado correctamente.', 'success');
      }
    });
  };
  return (
    <div className=" container">
      <h3 className="row mt-3">Lista de usuarios</h3>
      <div className="containerBusquedaRegistro">
        <div className="registroContenedorIzq">
          <i className="iconBuscar" class="iconBuscar fas fa-search"></i>
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
          className="contenedorDer"
          //  onClick={e =>history.push("/admin/registroempresa")}
        >
          <p
            className="pagregar"
            // onClick={(e) => history.push('/recepcion/usuarios/crear')}
          >
            Crear paciente
          </p>
          {/* <img className="iconAgregar" src={iconAgregar} alt="" /> */}
        </div>
      </div>
      <div className="row px-2">
        <div className=" table-responsive">
          <DataTable
            className="dataTable"
            columns={columnas}
            data={listRegistro}
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight="450px"
            noDataComponent={<i className="fas fa-inbox table__icono"></i>}
          />
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
