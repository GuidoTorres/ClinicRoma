import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import validator from 'validator';

import login from '../../assets/login/login.png';
import logo from '../../assets/login/logo.png';

const Register = () => {
  const initialState = {
    email: '',
    password: '',
    privaciPolicy: false,
  };
  const [formValues, setFormValues] = useState(initialState);
  const { email, password, privaciPolicy } = formValues;

  const handleOnChangeLogin = (e) => {
    if (e.target.name === 'privaciPolicy') {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    }
  };

  const validationFormulario = () => {
    if (email.trim().length === 0 || password.trim().length === 0) {
      toast.error('Los campos no deben estar vacios', {
        position: toast.POSITION.TOP_RIGTH,
      });
      return false;
    }

    if (!validator.isEmail(email)) {
      toast.error('Debe ingresar un email valido', {
        position: toast.POSITION.TOP_RIGTH,
      });
      return false;
    }

    if (password.trim().length < 5) {
      toast.error('La contraseña debe tener mas de 6 caracteres', {
        position: toast.POSITION.TOP_RIGTH,
      });
      return false;
    }

    if (privaciPolicy === false) {
      toast.error('Debe aceptar los terminos y condiciones', {
        position: toast.POSITION.TOP_RIGTH,
      });
      return false;
    }

    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validationFormulario()) {
      toast.success('Datos correctos', {
        position: toast.POSITION.TOP_RIGTH,
      });
    }
  };

  return (
    <div className="container-fluid">
      <ToastContainer />
      <div className="row login">
        <div className=" col-4 col-sm-7 col-md-7 col-xl-7 login__img">
          <img src={login} alt="" />
        </div>
        <div className="col-12 col-sm-5 col-md-4 col-xl-3 login__form ">
          <img src={logo} alt="" />
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Nombre de usuario"
                name="email"
                value={email}
                onChange={handleOnChangeLogin}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={handleOnChangeLogin}
              />
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                name="privaciPolicy"
                checked={privaciPolicy}
                onChange={handleOnChangeLogin}
              />
              <label htmlFor="">Recordarme</label>
            </div>
            <Link to="/">Iniciar sessión</Link>
            <button type="submit" className="botones">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
