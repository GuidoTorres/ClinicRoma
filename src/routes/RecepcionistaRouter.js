import { Redirect, Route, Switch } from 'react-router-dom';
import Estadistica from '../components/recepcion/Estadisticas';
import Historial from '../components/recepcion/Historial';
import Atencion from '../components/recepcion/Atencion';
import GenerarAtencion from '../components/recepcion/GenerarAtencion';
import Usuarios from '../components/recepcion/Usuarios';
import Navbar from '../components/ui/Navbar';

const RecepcionistaRouter = () => {
  return (
    <>
      <Navbar
        titulo1={'Usuarios'}
        url1={'/recepcion/usuarios'}
        titulo2={'Atención'}
        url2={'/recepcion/atencion'}
        titulo3={'Historial'}
        url3={'/recepcion/historial'}
        titulo4={'Estadisticas'}
        url4={'/recepcion/estadisticas'}
        titulo5={''}
        url5={''}
        titulo6={''}
        url6={''}
        ruta={'/recepcion/usuarios'}
      />
      <div>
        <Switch>
          <Route exact path="/recepcion/usuarios" component={Usuarios} />
          <Route exact path="/recepcion/atencion" component={Atencion} />
          <Route exact path="/recepcion/historial" component={Historial} />
          <Route exact path="/recepcion/estadisticas" component={Estadistica} />
          <Route
            exact
            path="/recepcion/generar/atencion"
            component={GenerarAtencion}
          />
          <Redirect to="/recepcion/usuarios" />
        </Switch>
      </div>
    </>
  );
};

export default RecepcionistaRouter;
