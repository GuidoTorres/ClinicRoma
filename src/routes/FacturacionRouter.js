import React from 'react';
import Empresa from '../components/facturacion/Empresa';
import Navbar from '../components/ui/Navbar';
import { Route } from 'react-router';
import Particulares from '../components/facturacion/costoatencion/Particulares';
import Liquidacion from '../components/facturacion/Liquidacion';
import { Redirect, Switch } from 'react-router-dom';

const FacturacionRouter = () => {
  return (
    <>
      <Navbar
        titulo1={'Empresas'}
        url1={'/facturacion/empresas'}
        titulo2={'Costo por atención'}
        url2={'/facturacion/costo'}
        titulo3={'Liquidación'}
        url3={'/facturacion/liquidacion'}
        titulo4={''}
        url4={''}
        titulo5={''}
        url5={''}
        titulo6={''}
        url6={''}
        ç
        ruta={'/laboratorio/subir'}
      />
      <div>
        <Switch>
          <Route exact path="/facturacion/empresas" component={Empresa} />
          <Route exact path="/facturacion/costo" component={Particulares} />
          <Route
            exact
            path="/facturacion/liquidacion"
            component={Liquidacion}
          />
          <Redirect to="/facturacion/empresas" />
        </Switch>
      </div>
    </>
  );
};

export default FacturacionRouter;
