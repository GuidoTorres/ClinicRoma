import { Route } from 'react-router';
import { Redirect, Switch } from 'react-router-dom';
import Empresa from '../components/agenteventas/Empresa';
import Registro from '../components/agenteventas/Registro';
import Servicio from '../components/agenteventas/Servicio';
import Navbar from '../components/ui/Navbar';

const AgenteVentasRouter = () => {
  return (
    <>
      <Navbar
        titulo1={'Registro '}
        url1={'/ventas/registro'}
        titulo2={'Servicios'}
        url2={'/ventas/servicios'}
        titulo3={''}
        url3={''}
        titulo4={''}
        url4={''}
        titulo5={''}
        url5={''}
        titulo6={''}
        url6={''}
        ruta={'/ventas/registro'}
      />
      <div>
        <Switch>
          <Route exact path="/ventas/registro" component={Registro} />
          <Route exact path="/ventas/registro/empresa" component={Empresa} />
          <Route exact path="/ventas/servicios" component={Servicio} />
          <Redirect to="/ventas/registro" />
        </Switch>
      </div>
    </>
  );
};

export default AgenteVentasRouter;
