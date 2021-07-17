import React from 'react';
import Navbar from '../components/ui/Navbar';
import { Route, Switch } from 'react-router';
import Reservas from '../components/tomanmuestra/Reservas';
import Historial from '../components/tomanmuestra/Historial';
import Perfil from '../components/tomanmuestra/Perfil';
import { Redirect } from 'react-router-dom';

const ClinicaTomaRouter = () => {
  return (
    <>
      <Navbar
        titulo1={'Reservas'}
        url1={'/clinica/toma/reservas'}
        titulo2={'Historial'}
        url2={'/clinica/toma/historial'}
        titulo3={'Perfil'}
        url3={'/clinica/toma/perfil'}
        titulo4={''}
        url4={''}
        titulo5={''}
        url5={''}
        titulo6={''}
        url6={''}
        ruta={'/clinica/toma/reservas'}
      />
      <div>
        <Switch>
          <Route exact path="/clinica/toma/reservas" component={Reservas} />
          <Route exact path="/clinica/toma/historial" component={Historial} />
          <Route exact path="/clinica/toma/perfil" component={Perfil} />
          <Redirect to="/clinica/toma/reservas" />
        </Switch>
      </div>
    </>
  );
};

export default ClinicaTomaRouter;
