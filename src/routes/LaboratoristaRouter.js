import Navbar from '../components/ui/Navbar';
import { Route } from 'react-router';
import SubirLaboratorio from '../components/laboratorio/SubirLaboratorio';
import Historial from '../components/laboratorio/Historial';
import Estadistica from '../components/laboratorio/Estadistica';
import { Redirect, Switch } from 'react-router-dom';

const LaboratoristaRouter = () => {
  return (
    <>
      <Navbar
        titulo1={'Subir resultados'}
        url1={'/laboratorio/subir'}
        titulo2={'Historial'}
        url2={'/laboratorio/historial'}
        titulo3={'Estadisticas'}
        url3={'/laboratorio/estadisticas'}
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
          <Route exact path="/laboratorio/subir" component={SubirLaboratorio} />
          <Route exact path="/laboratorio/historial" component={Historial} />
          <Route
            exact
            path="/laboratorio/estadisticas"
            component={Estadistica}
          />
          <Redirect to="/laboratorio/subir" />
        </Switch>
      </div>
    </>
  );
};

export default LaboratoristaRouter;
