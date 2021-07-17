import AppRoute from './routes/AppRoute';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import 'react-toastify/dist/ReactToastify.css';
function Clinica() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default Clinica;
