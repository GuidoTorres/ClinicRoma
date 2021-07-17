import React from 'react';
// import hambulancia from '../../../assets/icons/hambulancia.svg';
import clinica from '../../../assets/icons/clinica.svg';
import empresa from '../../../assets/icons/empresaxd.svg';
const Registro = ({ history }) => {
  // console.log(history);
  const handleClinica = () => {
    history.push('/admin/registro/clinica');
  };

  const handleEmpresa = () => {
    history.push('/admin/registro/empresa');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6 adminregistro__clinica">
          <div className="card">
            <div className="card-body">
              <img src={clinica} alt="registro clinica" />
              <button className="botones" onClick={handleClinica}>
                Registro de clínicas
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 adminregistro__clinica">
          <div className="card">
            <div className="card-body">
              <img src={empresa} alt="registro clinica" />
              <button className="botones" onClick={handleEmpresa}>
                Registro de empresas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
