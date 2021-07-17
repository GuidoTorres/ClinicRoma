import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../../actions/auth';

import login from '../../assets/login/login.png';
import logo from '../../assets/login/logo.png';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { role } = useSelector((state) => state.auth);

  const initialState = {
    username: '',
    password: '',
  };
  const [formValues, setFormValues] = useState(initialState);

  const { username, password } = formValues;

  const handleOnChangeLogin = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(username, password));
  };

  useEffect(() => {
    if (role === undefined) {
      return history.push('/');
    }

    if (role.id === 1) {
      return history.push('admin/registro');
    } else if (role.id === 2) {
      return history.replace('empresa/registro');
    } else if (role.id === 3) {
      return history.replace('clinica/toma/reservas');
    } else if (role.id === 4) {
      return history.replace('organizador/solicitud');
    } else if (role.id === 8) {
      return history.replace('laboratorio/subir');
    } else if (role.id === 9) {
      return history.replace('recepcion/usuarios');
    } else if (role.id === 10) {
      return history.replace('facturacion/empresas');
    } else if (role.id === 11) {
      return history.replace('clinica/procesa/reservas');
    } else {
      return history.replace('/');
    }
  }, [history, role]);

  return (
    <div className="container-fluid">
      <div className="row login">
        <div className=" col-4 col-sm-6 col-md-7  col-xl-7 login__img ">
          <img src={login} alt="" />
        </div>
        <div className="col-11 col-sm-5 col-md-4 col-xl-3  login__form ">
          <img src={logo} alt="" />
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Nombre de usuario"
                name="username"
                value={username}
                onChange={handleOnChangeLogin}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={handleOnChangeLogin}
              />
            </div>
            <button type="submit" className="botones">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
