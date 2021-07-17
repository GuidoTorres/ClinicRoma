import { Redirect, Switch } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Registro from '../components/clienteCorporativo/EmpresaRegistro';
import EmpresaAsignacion4 from '../components/clienteCorporativo/EmpresaAsignacion4';
import EmpresaAsignacion from '../components/clienteCorporativo/EmpresaAsignacion1';
import EmpresaAsignacion2 from '../components/clienteCorporativo/EmpresaAsignacion2';
import EmpresaFacturacion from '../components/clienteCorporativo/EmpresaFacturacion';
import EmpresaResultados from '../components/clienteCorporativo/EmpresaResultados';
import { Route } from 'react-router';

const EmpresaAsociadaRouter = () => {
  return (
    <>
      <Navbar
        titulo1={'Registro de trabajador'}
        url1={'/empresa/registro'}
        titulo2={'Asignación de pruebas'}
        url2={'/empresa/asignacion1'}
        titulo3={'Facturación'}
        url3={'/empresa/facturacion'}
        titulo4={'Resultados'}
        url4={'/empresa/resultados'}
        titulo5={''}
        url5={''}
        titulo6={''}
        url6={''}
        ruta={'/empresa/registro'}
      />

      <div>
        <Switch>
          <Route exact path="/empresa/registro" component={Registro} />
          <Route
            exact
            path="/empresa/asignacion1"
            component={EmpresaAsignacion}
          />
          <Route
            exact
            path="/empresa/asignacion2"
            component={EmpresaAsignacion2}
          />
          <Route
            exact
            path="/empresa/asignacion3"
            component={EmpresaAsignacion4}
          />
          <Route
            exact
            path="/empresa/facturacion"
            component={EmpresaFacturacion}
          />
          <Route
            exact
            path="/empresa/resultados"
            component={EmpresaResultados}
          />
          <Redirect to="/empresa/registro" />
        </Switch>
      </div>
    </>
  );
};

export default EmpresaAsociadaRouter;
