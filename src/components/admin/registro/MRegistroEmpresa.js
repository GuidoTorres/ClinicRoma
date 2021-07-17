import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { fetchGETPOSTPUTDELETE, fetchRUC } from "../../../helpers/fetch";
import { customStyles } from "../../../helpers/tablaOpciones";
import { UploadAvatar } from "../../uploadAvatar/uploadAvatar";
import Swal from "sweetalert2";

const MRegistroEmpresa = ({
  openModal,
  setOpenModal,
  getCorporations,
  dataSelected,
  setDataSelected,
  editar,
  setEditar,
}) => {
  const [avatar, setAvatar] = useState(null);
  const [empresa, setEmpresa] = useState({});
  const [types, setTypes] = useState([]);
  const [ruc, setRuc] = useState({});

  const closeModal = () => {
    setOpenModal(false);
    setEditar(false);
    setDataSelected(null);
  };

  const getCorporationTypes = () => {
    fetchGETPOSTPUTDELETE("corporation_types")
      .then((data) => data.json())
      .then((datos) => {
        setTypes(datos.types);
      });
  };

  const getRuc = () => {
    fetchRUC(empresa.ruc, "GET")
      .then((res) => res.json())
      .then((res) => setRuc(res));
  };

  useEffect(() => {
    getCorporationTypes();

    if (empresa && empresa.ruc && empresa.ruc.length === 11) {
      getRuc();
    }
  }, [empresa.ruc]);

  console.log(empresa);

  const postCorporation = () => {
    const formData = new FormData();

    formData.set("ruc", empresa.ruc || "");
    formData.set("business_name", ruc.razonSocial || empresa.business_name || "");
    formData.set("commercial_name", empresa.commercial_name || "");
    formData.set("logo", avatar ? avatar.file : "logo");

    formData.set("address", ruc.direccion || empresa.address || "");
    formData.set("reference", empresa.reference || "");

    formData.set("contacts[0][name]", empresa.name || "");
    formData.set("contacts[0][phone]", empresa.phone || "");
    formData.set("contacts[0][email]", empresa.email || "");
    formData.set("contacts[0][contact_type]", 1);

    formData.set("contacts[1][name]", empresa.name1 || "");
    formData.set("contacts[1][phone]", empresa.phone1 || "");
    formData.set("contacts[1][email]", empresa.email1 || "");
    formData.set("contacts[1][contact_type]", 2);

    formData.set("before", empresa.before || "");
    formData.set("credit", empresa.credit || "");

    formData.set("services[0][service_id]", empresa.service_id1 || "");
    // formData.set("services[0][state]", 0);
    formData.set("services[1][service_id]", empresa.service_id2 || "");
    // formData.set("services[0][state]", 0);
    formData.set("services[2][service_id]", empresa.service_id3 || "");
    // formData.set("services[0][state]", 0);
    formData.set("services[3][service_id]", empresa.service_id4 || "");
    // formData.set("services[0][state]", 0);

    fetchGETPOSTPUTDELETE("company", formData, "POST").then((resp) => {
      console.log(resp);
      if (resp.status === 200) {
        closeModal();
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Se ha creado la empresa correctamente.",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Aceptar",
        }).then((resp) => {
          if (resp.isConfirmed) {
            getCorporations();
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

  const putCorporation = () => {
    const formData = new FormData();

    formData.set(
      "ruc",
      dataSelected && dataSelected.corporation.ruc
        ? dataSelected.corporation.ruc
        : ""
    );
    formData.set(
      "business_name",
      empresa.business_name
        ? empresa.business_name
        : dataSelected &&
          dataSelected.corporation &&
          dataSelected.corporation.business_name
        ? dataSelected.corporation.business_name
        : ""
    );
    formData.set(
      "commercial_name",
      empresa.commercial_name
        ? empresa.commercial_name
        : dataSelected &&
          dataSelected.corporation &&
          dataSelected.corporation.commercial_name
        ? dataSelected.corporation.commercial_name
        : ""
    );
    formData.set("logo", avatar ? avatar.file : "");

    formData.set(
      "address",
      empresa.address
        ? empresa.address
        : dataSelected &&
          dataSelected.corporation &&
          dataSelected.corporation.address &&
          dataSelected.corporation.address.address
        ? dataSelected.corporation.address.address
        : ""
    );
    formData.set(
      "reference",
      empresa.reference
        ? empresa.reference
        : dataSelected &&
          dataSelected.corporation &&
          dataSelected.corporation.address &&
          dataSelected.corporation.address.reference
        ? dataSelected.corporation.address.reference
        : ""
    );

    formData.set(
      "contacts[0][name]",
      empresa.name
        ? empresa.name
        : dataSelected &&
          dataSelected.corporation &&
          dataSelected.corporation.contacts &&
          dataSelected.corporation.contacts[0] &&
          dataSelected.corporation.contacts[0].name
        ? dataSelected.corporation.contacts[0].name
        : ""
    );
    formData.set(
      "contacts[0][phone]",
      empresa.phone
        ? empresa.phone
        : dataSelected &&
          dataSelected.corporation &&
          dataSelected.corporation.contacts &&
          dataSelected.corporation.contacts[0] &&
          dataSelected.corporation.contacts[0].phone
        ? dataSelected.corporation.contacts[0].phone
        : ""
    );
    formData.set(
      "contacts[0][email]",
      empresa.email
        ? empresa.email
        : dataSelected &&
          dataSelected.corporation &&
          dataSelected.corporation.contacts &&
          dataSelected.corporation.contacts[0] &&
          dataSelected.corporation.contacts[0].email
        ? dataSelected.corporation.contacts[0].email
        : ""
    );
    formData.set("contacts[0][contact_type]", 1);

    formData.set(
      "contacts[1][name]",
      empresa.name1
        ? empresa.name1
        : dataSelected &&
          dataSelected.corporation &&
          dataSelected.corporation.contacts &&
          dataSelected.corporation.contacts[1] &&
          dataSelected.corporation.contacts[1].name
        ? dataSelected.corporation.contacts[1].name
        : ""
    );
    formData.set(
      "contacts[1][phone]",
      empresa.phone1
        ? empresa.phone1
        : dataSelected &&
          dataSelected.corporation &&
          dataSelected.corporation.contacts &&
          dataSelected.corporation.contacts[1] &&
          dataSelected.corporation.contacts[1].phone
        ? dataSelected.corporation.contacts[1].phone
        : ""
    );
    formData.set(
      "contacts[1][email]",
      empresa.email1
        ? empresa.email1
        : dataSelected &&
          dataSelected.corporation &&
          dataSelected.corporation.contacts &&
          dataSelected.corporation.contacts[1] &&
          dataSelected.corporation.contacts[1].email
        ? dataSelected.corporation.contacts[1].email
        : ""
    );
    formData.set("contacts[1][contact_type]", 2);

    formData.set(
      "before",
      empresa.before
        ? empresa.before
        : dataSelected && dataSelected.billing && dataSelected.billing.before
        ? dataSelected.billing.before
        : ""
    );
    formData.set(
      "credit",
      empresa.credit
        ? empresa.credit
        : dataSelected && dataSelected.billing && dataSelected.billing.credit
        ? dataSelected.billing.credit
        : ""
    );

    formData.set(
      "services[0][service_id]",
      empresa.service_id1
        ? empresa.service_id1
        : dataSelected &&
          dataSelected.services &&
          dataSelected.services[0] &&
          dataSelected.services[0].id
        ? dataSelected.services[0].id
        : ""
    );
    formData.set("services[0][state]", 0);

    formData.set(
      "services[1][service_id]",
      empresa.service_id2
        ? empresa.service_id2
        : dataSelected &&
          dataSelected.services &&
          dataSelected.services[1] &&
          dataSelected.services[1].id
        ? dataSelected.services[1].id
        : ""
    );
    formData.set("services[1][state]", 0);

    formData.set(
      "services[2][service_id]",
      empresa.service_id3
        ? empresa.service_id3
        : dataSelected &&
          dataSelected.services &&
          dataSelected.services[2] &&
          dataSelected.services[2].id
        ? dataSelected.services[2].id
        : ""
    );
    formData.set("services[2][state]", 0);

    formData.set(
      "services[3][service_id]",
      empresa.service_id4
        ? empresa.service_id4
        : dataSelected &&
          dataSelected.services &&
          dataSelected.services[3] &&
          dataSelected.services[3].id
        ? dataSelected.services[3].id
        : ""
    );
    formData.set("services[3][state]", 0);

    fetchGETPOSTPUTDELETE(
      `company/update/${dataSelected.id}`,
      formData,
      "POST"
    ).then((resp) => {
      if (resp.status === 200) {
        closeModal();
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Se actualizo la empresa correctamente.",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Aceptar",
        }).then((resp) => {
          if (resp.isConfirmed) {
            getCorporations();
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

  console.log(dataSelected);

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal modal__empresa"
      closeTimeoutMS={200}
      preventScroll={true}
      overlayClassName="modal-fondo"
      ariaHideApp={false}
    >
      {editar ? (
        <h3 className="title__modal">Editar Empresa</h3>
      ) : (
        <h3 className="title__modal">Registar Empresa</h3>
      )}
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 mregistro__empresa">
            <div className="mregistro__datos">
              <div>
                <label>RUC:</label>
                <input
                  type="text"
                  name="ruc"
                  disabled={editar ? true : false}
                  defaultValue={
                    dataSelected &&
                    dataSelected.corporation &&
                    dataSelected.corporation.ruc
                      ? dataSelected.corporation.ruc
                      : ""
                  }
                  onChange={(e) =>
                    setEmpresa({ ...empresa, ruc: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Razón social:</label>
                <input
                  type="text"
                  name="business_name"
                  defaultValue={
                    editar
                      ? dataSelected &&
                        dataSelected.corporation &&
                        dataSelected.corporation.business_name
                        ? dataSelected.corporation.business_name
                        : ""
                      : ruc.razonSocial
                  }
                  onChange={(e) =>
                    setEmpresa({ ...empresa, business_name: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Nombre comercial:</label>
                <input
                  type="text"
                  name="commercial_name"
                  defaultValue={
                    dataSelected &&
                    dataSelected.corporation &&
                    dataSelected.corporation.commercial_name
                      ? dataSelected.corporation.commercial_name
                      : ""
                  }
                  onChange={(e) =>
                    setEmpresa({ ...empresa, commercial_name: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Dirección:</label>
                <input
                  type="text"
                  name="address"
                  defaultValue={
                    editar
                      ? dataSelected &&
                        dataSelected.corporation &&
                        dataSelected.corporation.address &&
                        dataSelected.corporation.address.address
                        ? dataSelected.corporation.address.address
                        : ""
                      : ruc.direccion
                  }
                  onChange={(e) =>
                    setEmpresa({
                      ...empresa,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label>Referencia:</label>
                <input
                  type="text"
                  name="reference"
                  defaultValue={
                    dataSelected &&
                    dataSelected.corporation &&
                    dataSelected.corporation.address &&
                    dataSelected.corporation.address.reference
                      ? dataSelected.corporation.address.reference
                      : ""
                  }
                  onChange={(e) =>
                    setEmpresa({
                      ...empresa,

                      reference: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label>Rubro:</label>
                <select
                  aria-label="Default select example"
                  name="corporation_type_id"
                  defaultValue={
                    dataSelected &&
                    dataSelected.corporation &&
                    dataSelected.corporation.corporation_type_id
                      ? dataSelected.corporation.corporation_type_id
                      : ""
                  }
                  onChange={(e) =>
                    setEmpresa({
                      ...empresa,
                      corporation_type_id: e.target.value,
                    })
                  }
                >
                  <option value="Agroindustria">Seleccione</option>
                  {types.length > 0 &&
                    types.map((rubro, i) => (
                      <option key={i} value={i + 1}>
                        {rubro.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="mregistro__contacto">
              <h6>Contácto de la empresa</h6>
              <div className="">
                <div>
                  <label>Responsable:</label>
                  <input
                    type="text"
                    name="contactsname"
                    defaultValue={
                      dataSelected &&
                      dataSelected.corporation &&
                      dataSelected.corporation.contacts &&
                      dataSelected.corporation.contacts[0] &&
                      dataSelected.corporation.contacts[0].name
                        ? dataSelected.corporation.contacts[0].name
                        : ""
                    }
                    onChange={(e) =>
                      setEmpresa({
                        ...empresa,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label>Teléfono:</label>
                  <input
                    type="text"
                    name="contactsphone"
                    defaultValue={
                      dataSelected &&
                      dataSelected.corporation &&
                      dataSelected.corporation.contacts &&
                      dataSelected.corporation.contacts[0] &&
                      dataSelected.corporation.contacts[0].phone
                        ? dataSelected.corporation.contacts[0].phone
                        : ""
                    }
                    onChange={(e) =>
                      setEmpresa({
                        ...empresa,

                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label>Correo:</label>
                  <input
                    type="text"
                    name="contactsemail"
                    defaultValue={
                      dataSelected &&
                      dataSelected.corporation &&
                      dataSelected.corporation.contacts &&
                      dataSelected.corporation.contacts[0] &&
                      dataSelected.corporation.contacts[0].email
                        ? dataSelected.corporation.contacts[0].email
                        : ""
                    }
                    onChange={(e) =>
                      setEmpresa({
                        ...empresa,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="mregistro__recursos">
              <h6>Contácto en Recusos humanos</h6>
              <div className="">
                <div>
                  <label>Responsable:</label>
                  <input
                    type="text"
                    defaultValue={
                      dataSelected &&
                      dataSelected.corporation &&
                      dataSelected.corporation.contacts &&
                      dataSelected.corporation.contacts[1] &&
                      dataSelected.corporation.contacts[1].name
                        ? dataSelected.corporation.contacts[1].name
                        : ""
                    }
                    onChange={(e) =>
                      setEmpresa({
                        ...empresa,

                        name1: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label>Teléfono:</label>
                  <input
                    type="text"
                    defaultValue={
                      dataSelected &&
                      dataSelected.corporation &&
                      dataSelected.corporation.contacts &&
                      dataSelected.corporation.contacts[1] &&
                      dataSelected.corporation.contacts[1].phone
                        ? dataSelected.corporation.contacts[1].phone
                        : ""
                    }
                    onChange={(e) =>
                      setEmpresa({
                        ...empresa,

                        phone1: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label>Correo:</label>
                  <input
                    type="text"
                    defaultValue={
                      dataSelected &&
                      dataSelected.corporation &&
                      dataSelected.corporation.contacts &&
                      dataSelected.corporation.contacts[1] &&
                      dataSelected.corporation.contacts[1].email
                        ? dataSelected.corporation.contacts[1].email
                        : ""
                    }
                    onChange={(e) =>
                      setEmpresa({
                        ...empresa,

                        email1: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div className="mregistro__logo">
              <p>
                Logo <span>(.jpg, .jpeg, .jpg)</span>
              </p>
              <div>
                <UploadAvatar
                  avatar={avatar}
                  setAvatar={setAvatar}
                  dataSelected={dataSelected}
                  editar={editar}
                />
              </div>
            </div>
            <div className="mregistro__facturacion">
              <h6>Datos de facturación</h6>
              <div>
                <div>
                  <label>Facturación(días)</label>
                  <input
                    type="number"
                    defaultValue={
                      dataSelected &&
                      dataSelected.billing &&
                      dataSelected.billing.before
                        ? dataSelected.billing.before
                        : ""
                    }
                    onChange={(e) =>
                      setEmpresa({
                        ...empresa,
                        before: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label>Crédito(días)</label>
                  <input
                    type="number"
                    defaultValue={
                      dataSelected &&
                      dataSelected.billing &&
                      dataSelected.billing.credit
                        ? dataSelected.billing.credit
                        : ""
                    }
                    onChange={(e) =>
                      setEmpresa({
                        ...empresa,
                        credit: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="mregistro__facturacion">
              <h6>Seleccionar servicio</h6>
              <div>
                <div>
                  <label>Tipo de servicio</label>
                  <select
                    aria-label="Default select example"
                    defaultValue={
                      dataSelected &&
                      dataSelected.services &&
                      dataSelected.services[0] &&
                      dataSelected.services[0].services_category_id
                    }
                    onChange={(e) =>
                      setEmpresa({
                        ...empresa,

                        service_id: e.target.value,
                      })
                    }
                  >
                    <option value="">Seleccione</option>
                    <option value="1">Covid 19</option>
                  </select>
                </div>
                <div>
                  <label style={{ width: "50%" }}>Plan de atención</label>
                  <div className="mselect">
                    <div className="mselect__item">
                      <input
                        type="checkbox"
                        className="w-auto"
                        defaultChecked={
                          dataSelected &&
                          dataSelected.services &&
                          dataSelected.services[0]
                            ? true
                            : false
                        }
                        onChange={(e) =>
                          setEmpresa({
                            ...empresa,
                            service_id1: e.target.checked ? 1 : "",
                          })
                        }
                      />
                      <label>Antígeno</label>
                    </div>
                    <div className="mselect__item">
                      <input
                        type="checkbox"
                        className="w-auto"
                        defaultChecked={
                          dataSelected &&
                          dataSelected.services &&
                          dataSelected.services[1]
                            ? true
                            : false
                        }
                        onChange={(e) =>
                          setEmpresa({
                            ...empresa,
                            service_id2: e.target.checked ? 2 : "",
                          })
                        }
                      />
                      <label>Electroquimioluminiscencia</label>
                    </div>
                    <div className="mselect__item">
                      <input
                        type="checkbox"
                        className="w-auto"
                        defaultChecked={
                          dataSelected &&
                          dataSelected.services &&
                          dataSelected.services[2]
                            ? true
                            : false
                        }
                        onChange={(e) =>
                          setEmpresa({
                            ...empresa,

                            service_id3: e.target.checked ? 3 : "",
                          })
                        }
                      />
                      <label>RT-PCR</label>
                    </div>
                    <div className="mselect__item">
                      <input
                        type="checkbox"
                        className="w-auto"
                        defaultChecked={
                          dataSelected &&
                          dataSelected.services &&
                          dataSelected.services[3]
                            ? true
                            : false
                        }
                        onChange={(e) =>
                          setEmpresa({
                            ...empresa,

                            service_id4: e.target.checked ? 4 : "",
                          })
                        }
                      />
                      <label>Inmunocromatografia</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-botones">
                {editar === true ? (
                  <button
                    className="botones mregistro__botones"
                    onClick={(e) => putCorporation(e)}
                  >
                    Editar
                  </button>
                ) : (
                  <button
                    className="botones mregistro__botones"
                    onClick={postCorporation}
                  >
                    Aceptar
                  </button>
                )}
                <button
                  className="botones mregistro__botones"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
    // </div>
  );
};

export default MRegistroEmpresa;
