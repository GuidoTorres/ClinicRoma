import React, { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { UploadAvatar } from "../../uploadAvatar/uploadAvatar";

import { fetchGETPOSTPUTDELETE } from "../../../helpers/fetch";

import { customStyles } from "../../../helpers/tablaOpciones";

const MServicio = ({ openModal, setOpenModal, getServices, dataSelected }) => {
  const [crearServicio, setCrearServicio] = useState({});
  const [avatar, setAvatar] = useState(null);

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    setCrearServicio({
      ...crearServicio,

      [e.target.name]: e.target.value,
    });
  };

  const updateService = () => {
    const formData = new FormData();
    formData.set(
      "name",
      crearServicio.name ||
        dataSelected.services[crearServicio.subCategoria].name
    );
    formData.set(
      "abbreviation",
      crearServicio.abbreviation ||
        dataSelected.services[crearServicio.subCategoria].abbreviation
    );
    formData.set(
      "service_category_id",
      crearServicio.service_category_id ||
        dataSelected.services[crearServicio.subCategoria].service_category_id
    );
    formData.set(
      "description",
      crearServicio.description ||
        dataSelected.services[crearServicio.subCategoria].description
    );
    formData.set(
      "url_extra",
      crearServicio.url_extra ||
        dataSelected.services[crearServicio.subCategoria].url_extra
    );
    formData.set(
      "image",
      avatar && avatar.file
        ? avatar.file
        : dataSelected.services[crearServicio.subCategoria].image
    );
    formData.set(
      "stock",
      crearServicio.stock ||
        dataSelected.services[crearServicio.subCategoria].stock
    );
    formData.set(
      "amount",
      crearServicio.amount ||
        dataSelected.services[crearServicio.subCategoria].last_price.amount
    );
    fetchGETPOSTPUTDELETE(
      `services/${
        dataSelected.services[crearServicio.subCategoria].id
      }?_method=put`,
      formData,
      "POST"
    ).then((resp) => {
      if (resp.status === 200) {
        closeModal();
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Se ha editado el servicio correctamente.",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Aceptar",
        }).then((resp) => {
          if (resp.isConfirmed) {
            getServices();
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

 console.log(crearServicio);

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal modal__EServicio"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      preventScroll={true}
      ariaHideApp={false}
    >
      <h3 className="title__modal">Editar servicio</h3>
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 mregistro__servicios">
            <div className="">
              <div>
                <label> Categoria:</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "50%" }}
                  name="service_category_id"
                  onChange={(e) => handleChange(e)}
                >
                  <option selected>Seleccione</option>
                  <option value="1">Covid 19</option>
                </select>
              </div>
              <div>
                <label> Sub-Categoria:</label>
                <select
                  disabled={crearServicio.service_category_id === "1"? false : true}
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "50%" }}
                  name="subCategoria"
                  onChange={(e) => handleChange(e)}
                >
                  <option>Seleccione</option>

                  {dataSelected &&
                    dataSelected.services.map((data, i) => (
                      <option key={data.id} value={i}>
                        {data.name}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label> Nombre:</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={
                    crearServicio.subCategoria &&
                    dataSelected.services &&
                    dataSelected.services[crearServicio.subCategoria] &&
                    dataSelected.services[crearServicio.subCategoria].name
                      ? dataSelected.services[crearServicio.subCategoria].name
                      : ""
                  }
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label> Abreviatura:</label>
                <input
                  type="text"
                  name="abbreviation"
                  defaultValue={
                    crearServicio.subCategoria &&
                    dataSelected.services &&
                    dataSelected.services[crearServicio.subCategoria] &&
                    dataSelected.services[crearServicio.subCategoria]
                      .abbreviation
                      ? dataSelected.services[crearServicio.subCategoria]
                          .abbreviation
                      : ""
                  }
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div>
                <label> Monto:</label>
                <input
                  type="text"
                  name="amount"
                  defaultValue={
                    crearServicio.subCategoria &&
                    dataSelected.services &&
                    dataSelected.services[crearServicio.subCategoria] &&
                    dataSelected.services[crearServicio.subCategoria]
                      .last_price &&
                    dataSelected.services[crearServicio.subCategoria].last_price
                      .amount
                      ? dataSelected.services[crearServicio.subCategoria]
                          .last_price.amount
                      : ""
                  }
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label> Url:</label>
                <input
                  type="text"
                  name="url_extra"
                  defaultValue={
                    crearServicio.subCategoria &&
                    dataSelected.services &&
                    dataSelected.services[crearServicio.subCategoria] &&
                    dataSelected.services[crearServicio.subCategoria].url_extra
                      ? dataSelected.services[crearServicio.subCategoria]
                          .url_extra
                      : ""
                  }
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label> Stock:</label>
                <input
                  type="text"
                  name="stock"
                  defaultValue={
                    crearServicio.subCategoria &&
                    dataSelected.services &&
                    dataSelected.services[crearServicio.subCategoria] &&
                    dataSelected.services[crearServicio.subCategoria].stock
                      ? dataSelected.services[crearServicio.subCategoria].stock
                      : ""
                  }
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label> Descripcion:</label>
                <input
                  type="text"
                  name="description"
                  defaultValue={
                    crearServicio.subCategoria &&
                    dataSelected.services &&
                    dataSelected.services[crearServicio.subCategoria] &&
                    dataSelected.services[crearServicio.subCategoria]
                      .description
                      ? dataSelected.services[crearServicio.subCategoria]
                          .description
                      : ""
                  }
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>
                  Imagen <span>(.jpg, .jpeg, .jpg)</span>
                </p>
                <div style={{ width: "100%" }}>
                  <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
                </div>
              </div>
            </div>

            <div className="list-botones">
              <button className="botones " onClick={closeModal}>
                Cancelar
              </button>
              <button className="botones" onClick={updateService}>
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MServicio;
