import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
// import { useSelector } from 'react-redux';
import logo from '../../assets/icons/Isotipo.png';

const Navbar = ({
  titulo1,
  titulo2,
  titulo3,
  titulo4,
  titulo5,
  titulo6,
  url1,
  url2,
  url3,
  url4,
  url5,
  url6,
  ruta,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
    history.replace('/');
  };

  const mostrarSidebar = () => {
    const side = document.querySelector('.navBarUl').style;

    side.display === '' ? (side.display = 'flex') : (side.display = '');
  };
  return (
    <nav className="navbar navbar-expand-md navbar-light mb-5">
      <div className="container">
        <div className="containerLogo">
          <Link className="navbarLink navbar-brand text-white" to={ruta}>
            <img
              src={logo}
              alt="Medical Roma"
              className="logoImg d-inline-block align-text-top"
            />
            Clinica Roma
          </Link>
          <button
            className="buttonNav "
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i
              className="fas fa-bars"
              style={{ color: 'white' }}
              onClick={(e) => mostrarSidebar()}
            ></i>
          </button>
        </div>

        <ul className=" navbar-nav mr-auto">
          <li className="nav-item active">
            <Link
              className="navLink nav-link"
              aria-current="page"
              to={url1}
              style={{ color: 'white', fontSize: '15px' }}
            >
              {titulo1}
            </Link>
          </li>
          <li className="nav-item">
            <NavLink
              className="navLink nav-link"
              to={url2}
              style={{ color: 'white', fontSize: '15px' }}
            >
              {titulo2}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="navLink nav-link"
              to={url3}
              style={{ color: 'white', fontSize: '15px' }}
            >
              {titulo3}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="navLink nav-link"
              to={url4}
              style={{ color: 'white', fontSize: '15px' }}
            >
              {titulo4}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="navLink nav-link"
              to={url5}
              style={{ color: 'white', fontSize: '15px' }}
            >
              {titulo5}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="navLink nav-link"
              to={url6}
              style={{ color: 'white', fontSize: '15px' }}
            >
              {titulo6}
            </NavLink>
          </li>
          <button
            className="text-white"
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '15px',
            }}
            onClick={handleLogout}
          >
            Salir <i className="fas fa-sign-in-alt"></i>
          </button>
        </ul>

        <div className="navBarUl">
          <div className="logoSide">
            <Link className="navbarLink navbar-brand" to={ruta}>
              <img
                src={logo}
                alt="Medical Roma"
                className="sideLogo d-inline-block "
              />
            </Link>
          </div>
          <ul className="navUl navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="navLink nav-link" aria-current="page" to={url1}>
                {titulo1}
              </Link>
            </li>
            <li className="nav-item">
              <NavLink className="navLink nav-link" to={url2}>
                {titulo2}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navLink nav-link" to={url3}>
                {titulo3}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navLink nav-link" to={url4}>
                {titulo4}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navLink nav-link" to={url5}>
                {titulo5}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navLink nav-link" to={url6}>
                {titulo6}
              </NavLink>
            </li>
            <li className="nav-item">
              <button
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '15px',
                  color: 'white',
                }}
                onClick={handleLogout}
              >
                Salir <i className="fas fa-sign-in-alt"></i>
              </button>
            </li>
          </ul>
          <div className="btnCerrar" onClick={(e) => mostrarSidebar()}>
            <i className="far fa-times-circle"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
