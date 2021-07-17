import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

import { fetchGETPOSTPUTDELETE } from '../../helpers/fetch';
import { paginacionOpciones } from '../../helpers/tablaOpciones';

const Historial = () => {
  const [busqueda, setBusqueda] = useState('');
  const [listRegistro, setListRegistro] = useState([]);
  const [dataHistorial, setDataHistorial] = useState([]);

  const getHistorial = () => {
    fetchGETPOSTPUTDELETE('attention_historial')
      .then((data) => data.json())
      .then((datos) => setDataHistorial(datos.data));
  };

  useEffect(() => {
    getHistorial();
  }, []);

  console.log(dataHistorial);

  const columnas = [
    {
      name: 'Item',
      selector: (row) => (row.id ? row.id : ''),
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
    {
      name: 'DNI',
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
      name: 'Fecha entrega',
      selector: (row) => (row.date_creation ? row.date_creation : ''),
      sortable: true,
      style: {
        borderBotton: 'none',
        color: '#555555',
      },
    },
  ];
  //
  useEffect(() => {
    const filtrarElemento = () => {
      const search = dataHistorial.filter((data) => {
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
  }, [busqueda, dataHistorial]);
  console.log(listRegistro);
  const handleSearch = (e) => {
    setBusqueda(([e.target.name] = e.target.value));
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
    </div>
  );
};

export default Historial;
