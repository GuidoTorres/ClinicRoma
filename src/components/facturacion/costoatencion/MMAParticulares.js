import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Modal from 'react-modal';
import { fparticular } from '../../../data/FParticular';
import {
  customStyles,
  paginacionOpciones,
} from '../../../helpers/tablaOpciones';

const MMAParticulares = ({ openModalCrear, setOpenModalCrear }) => {
  const [busqueda, setBusqueda] = useState('');
  const [listRegistro, setListRegistro] = useState([]);

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
      name: 'Nombre',
      selector: 'nombre',
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'Apellido',
      selector: 'apellido',
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'DNI',
      selector: 'dni',
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'Fecha',
      selector: 'fecha',
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'Tipo de servicio',
      selector: 'tipo',
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'Plan de atención',
      selector: 'atencion',
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'SubTotal',
      selector: 'subtotal',
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'Impuesto',
      selector: 'impuesto',
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'Total',
      selector: 'total',
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
  ];

  useEffect(() => {
    const filtrarElemento = () => {
      const search = fparticular.filter((data) => {
        return (
          data.nombre
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.apellido
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.dni.toString().includes(busqueda) ||
          data.fecha
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.tipo
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.atencion
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase()
            .includes(busqueda) ||
          data.subtotal.toString().includes(busqueda) ||
          data.impuesto.toString().includes(busqueda) ||
          data.total.toString().includes(busqueda)
        );
      });
      setListRegistro(search);
    };
    filtrarElemento();
  }, [busqueda]);

  const handleSearch = (e) => {
    setBusqueda(([e.target.name] = e.target.value));
  };
  const closeModal = () => {
    setOpenModalCrear(false);
  };
  return (
    <Modal
      isOpen={openModalCrear}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal  mfacturacion__particular"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      preventScroll={true}
      ariaHideApp={false}
      selectableRows
    >
      <h3 className="title__modal">Agregar Paciente</h3>
      <div className="container">
        <div className="row">
          <div className="col-12">
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
                noDataComponent={<i className="fas fa-inbox table__icono"></i>}
                selectableRows
              />
            </div>
            <div className="list-botones">
              <button className="botones">Cancelar</button>
              <button className="botones">Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MMAParticulares;
