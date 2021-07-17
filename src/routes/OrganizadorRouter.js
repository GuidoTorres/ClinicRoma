import { Redirect, Route, Switch } from 'react-router-dom';
import Calendario from '../components/organizador/Calendario';
import Perfil from '../components/organizador/Perfil';
import Solicitud from '../components/organizador/Solicitud';
import Transportista from '../components/organizador/Transportista';
import Navbar from '../components/ui/Navbar';

const OrganizadorRouter = () => {
  return (
    <>
      <Navbar
        titulo1={'Solicitudes'}
        url1={'/organizador/solicitud'}
        titulo2={'Transportistas'}
        url2={'/organizador/transportista'}
        titulo3={'Perfil'}
        url3={'/organizador/perfil'}
        titulo4={''}
        url4={''}
        titulo5={''}
        url5={''}
        titulo6={''}
        url6={''}
        ruta={'/organizador/solicitud'}
      />
      <div>
        <Switch>
          <Route exact path="/organizador/solicitud" component={Solicitud} />
          <Route
            exact
            path="/organizador/transportista"
            component={Transportista}
          />
          <Route exact path="/organizador/perfil" component={Perfil} />
          <Route exact path="/organizador/calendario" component={Calendario} />
          <Redirect to="/organizador/solicitud" />
        </Switch>
      </div>
    </>
  );
};

export default OrganizadorRouter;
