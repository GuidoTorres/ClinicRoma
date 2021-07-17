import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "react-modal";
import {
  fetchGETPOSTPUTDELETE,
  fetchGETPOSTPUTDELETEJSON,
} from "../../helpers/fetch";
import { customStyles } from "../../helpers/tablaOpciones";
import { UploadAvatar } from "../uploadAvatar/uploadAvatar";
import WebCamScreenshot from "../webcam/WebCamScreenshot";
import Swal from "sweetalert2";

const MCrearPaciente = ({
  addRegistro,
  setAddRegistro,
  dataSelected,
  getAttention,
  editar,
  setEditar,
}) => {
  const [avatar, setAvatar] = useState(null);
  const [imagenes, setImagenes] = useState(false);
  const [paciente, setPaciente] = useState({});
  const [religions, setReligions] = useState({});

  const closeModal = () => {
    setAddRegistro(false);
    setEditar(false);
  };
  const handleCambio = () => {
    setImagenes(true);
  };

  const handleChange = (e) => {
    setPaciente({
      ...paciente,
      [e.target.name]: e.target.value,
      address: 1,
      district_id: 1,
    });
  };

  const getReligions = () => {
    fetchGETPOSTPUTDELETE("religions", null, "GET")
      .then((res) => res.json())
      .then((res) => setReligions(res.religions));
  };
  useEffect(() => {
    getReligions();
  }, []);
  console.log(religions);
  console.log(paciente);
  const crearPaciente = () => {
    const formData = new FormData();
    formData.set("document_type_id", paciente.document_type_id || "");
    formData.set("dni", paciente.dni || "");
    formData.set("name", paciente.name || "");
    formData.set("pat_lastname", paciente.pat_lastname || "");
    formData.set("mom_lastname", paciente.mom_lastname || "");
    formData.set("gender_id", paciente.gender_id || "");
    formData.set("birthday", paciente.birthday || "");
    formData.set("religion_id", 1);
    formData.set("department_id", paciente.department_id || "");
    formData.set("civil_status_id", paciente.civil_status_id || "");
    formData.set("grade_id", paciente.grade_id || "");
    formData.set("cellphone", paciente.cellphone || "");
    formData.set("phone", paciente.phone || "");
    formData.set("email", paciente.email || "");
    formData.set("emergency_phone", paciente.emergy_phone || "");
    formData.set("contact_emergency", paciente.contact_emergency || "");
    formData.set("company_id", "");
    formData.set("workstation", paciente.workstation || "");
    formData.set("birthplace", "");
    formData.set("address", paciente.address || "");
    formData.set("reference", paciente.reference || "");
    formData.set("district_id", paciente.district_id || "");
    formData.set("department_id", paciente.district_id || "");
    formData.set("user_type_id", paciente.user_type_id || "");
    // formData.set("country_id", paciente.country_id || "");
    formData.set("grade_id", "");

    fetchGETPOSTPUTDELETE("patient", formData, "POST").then((data) => {
      if (data.status === 200) {
        closeModal();
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Se ha creado el paciente correctamente.",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Aceptar",
        }).then((resp) => {
          if (resp.isConfirmed) {
            getAttention();
          }
        });
      } else {
        closeModal();
        Swal.fire({
          icon: "error",
          title: "!Ups¡",
          text: "Algo salió mal.",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Cerrar",
        });
      }
    });
  };

  const actualizarPaciente = () => {
    const formData = new FormData();
    formData.set("document_type_id", paciente.document_type_id || "");
    formData.set("dni", paciente.dni || "");
    formData.set("name", paciente.name || "");
    formData.set("pat_lastname", paciente.pat_lastname || "");
    formData.set("mom_lastname", paciente.mom_lastname || "");
    formData.set("gender_id", paciente.gender_id || "");
    formData.set("birthday", paciente.birthday || "");
    formData.set("religion_id", 1);
    formData.set("department_id", paciente.department_id || "");
    formData.set("civil_status_id", paciente.civil_status_id || "");
    formData.set("grade_id", paciente.grade_id || "");
    formData.set("cellphone", paciente.cellphone || "");
    formData.set("phone", paciente.phone || "");
    formData.set("email", paciente.email || "");
    formData.set("emergency_phone", paciente.emergy_phone || "");
    formData.set("contact_emergency", paciente.contact_emergency || "");
    formData.set("company_id", "");
    formData.set("workstation", paciente.workstation || "");
    formData.set("birthplace", "");
    formData.set("address", paciente.address || "");
    formData.set("reference", paciente.reference || "");
    formData.set("district_id", paciente.district_id || "");
    formData.set("department_id", paciente.district_id || "");
    formData.set("user_type_id", paciente.user_type_id || "");
    // formData.set("country_id", paciente.country_id || "");
    formData.set("grade_id", "");

    fetchGETPOSTPUTDELETE(`patient/${dataSelected}`, formData, "POST").then(
      (data) => console.log(data)
    );
  };

  console.log(dataSelected);

  return (
    <Modal
      isOpen={addRegistro}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal mrecepcion__usuario"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      preventScroll={true}
      ariaHideApp={false}
    >
      {editar ? (
        <h3 className="title__modal">Editar paciente</h3>
      ) : (
        <h3 className="title__modal">Registro de nuevo paciente</h3>
      )}{" "}
      <div className="container">
        <div className="row">
          <div className="col-md-6 mreceptcion__crearusuario">
            <div>
              <p>Datos generales</p>
              <div>
                <label htmlFor="">Tipo de documento:</label>
                <select
                  name="document_type_id"
                  onChange={(e) => handleChange(e)}
                >
                  <option selected>Seleccione</option>
                  <option value="1">Dni</option>
                  <option value="2">Pasaporte</option>
                  <option value="3">Carne de extranjeria</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Número de documento:</label>
                <input
                  type="number"
                  placeholder=""
                  name="dni"
                  defaultValue={dataSelected}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="">Apellido paterno:</label>
                <input
                  type="text"
                  placeholder=""
                  name="pat_lastname"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="">Apellido materno:</label>
                <input
                  type="text"
                  placeholder=""
                  name="mom_lastname"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="">Nombre:</label>
                <input
                  type="text"
                  placeholder=""
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div>
              <p>Datos de nacimiento:</p>
              <div>
                <label htmlFor="">Sexo:</label>
                <select name="gender_id" onChange={(e) => handleChange(e)}>
                  <option selected>Seleccione</option>
                  <option value="1">Masculino</option>
                  <option value="2">Femenino</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Fecha de nacimiento:</label>
                <input
                  type="date"
                  placeholder=""
                  name="birthday"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="">Edad:</label>
                <input type="number" placeholder="" />
              </div>
              <div>
                <label htmlFor="">Religión:</label>
                <select name="religion_id" onChange={(e) => handleChange(e)}>
                  <option value="">Seleccione</option>
                  {religions.length > 0 &&
                    religions.map((data, i) => (
                      <option key={i} value={i}>
                        {data.name}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label htmlFor="">País: </label>
                <select name="country_id" onChange={(e) => handleChange(e)}>
                  <option value="">Seleccione</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Departmento:</label>
                <select name="department_id" onChange={(e) => handleChange(e)}>
                  <option value="">Seleccione</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Provincia:</label>
                <select>
                  <option value="">Seleccione</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Distrito: </label>
                <select name="district_id" onChange={(e) => handleChange(e)}>
                  <option value="">Seleccione</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div>
              <p>Datos de domicilio</p>
              <div>
                <label htmlFor="">País: </label>
                <select>
                  <option selected>Seleccione</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div>
                <label htmlFor="">Departmento: </label>
                <select>
                  <option selected>Seleccione</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div>
                <label htmlFor="">Provincia:</label>
                <select>
                  <option selected>Seleccione</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div>
                <label htmlFor="">Distrito: </label>
                <select>
                  <option selected>Seleccione</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Dirección:</label>
                <input
                  type="text"
                  placeholder=""
                  name="reference"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mreceptcion__crearusuario">
            <div>
              <p>Otros datos</p>
              <div>
                <label htmlFor="">Estado civil:</label>
                <select
                  name="civil_status_id"
                  onChange={(e) => handleChange(e)}
                >
                  <option selected>Seleccione</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div>
                <label htmlFor="">Grado de instrucción:</label>
                <select name="grade_id" onChange={(e) => handleChange(e)}>
                  <option value="">Seleccione</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div>
                <label htmlFor="">Teléfono celular:</label>
                <input
                  type="text"
                  placeholder=""
                  name="cellphone"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div>
                <label htmlFor="">Teléfono fijo:</label>
                <input
                  type="text"
                  placeholder=""
                  name="phone"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div>
                <label htmlFor="">Correo:</label>
                <input
                  type="text"
                  placeholder=""
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div>
                <label htmlFor="">Teléfono de emergencia:</label>
                <input
                  type="text"
                  placeholder=""
                  name="emergency_phone"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div>
                <label htmlFor="">Contacto de emergencia:</label>
                <input
                  type="text"
                  placeholder=""
                  name="contact_emergency"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div>
              <p>Puesto ocupacional</p>
              <div>
                <input
                  type="text"
                  placeholder=""
                  name="workstation"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {/*  */}
              <div>
                <label htmlFor="">Tipo de usuario:</label>
                <select name="user_type_id" onChange={(e) => handleChange(e)}>
                  <option value="">Seleccione</option>
                  <option value="1">Empresa</option>
                  <option value="2">Particular</option>
                  <option value="3">Trabajador</option>
                </select>
              </div>
              <div>
                <input type="text" placeholder="Buscar" />
              </div>
              <div>
                <input type="text" placeholder="" disabled />
              </div>
            </div>
            <div>
              <div>
                <p>Fotografía</p>
                <i className="fas fa-camera" onClick={handleCambio}></i>
              </div>
              <div>
                {!imagenes ? (
                  <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
                ) : (
                  <WebCamScreenshot />
                )}
              </div>
            </div>

            <div className="list-botones">
              <button className="botones" onClick={closeModal}>
                Cancelar
              </button>

              {editar ? (
                <button className="botones" onClick={crearPaciente}>
                  Editar
                </button>
              ) : (
                <button className="botones" onClick={crearPaciente}>
                  Agregar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MCrearPaciente;
