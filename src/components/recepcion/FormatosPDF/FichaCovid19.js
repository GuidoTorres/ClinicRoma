import React from "react";

const FichaCovid19 = ({ ficha, setFicha}) => {

  const data ={
    nombre: "Hector Torres Durand",
    dni: "72798529",
    tipo: "Prueba Molecular",
    tecnica: "Tecnica nr 1000",
    edad: 100,
  };
  return (
    <div className="fichaCovid">
      <label className="titulo1 mt-2" htmlFor="">
        <strong>I. DATOS GENERALES DE LA NOTIFICACIÓN</strong>
      </label>
      <div className="datosGenerales">
        <div className="div1">
          <div className="mt-2">
            <label htmlFor="">1. Fecha notificación:</label>
            <input
              type="date"
              class="form-control"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) =>
                setFicha({ ...ficha, fechaNoti: e.target.value })
              }
            />
          </div>
          <div className="mt-2">
            <label htmlFor="">2. GERESA/DIRESA/DIRIS:</label>
            <input
              type="text"
              class="form-control"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
              onKeyUp={(e) => setFicha({ ...ficha, geresa: e.target.value })}
            />
          </div>
        </div>
        <div className="mt-2">
          <label htmlFor="">3. EESS:</label>
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            onKeyUp={(e) => setFicha({ ...ficha, eess: e.target.value })}
          />
        </div>

        <label className="mt-2" htmlFor="">
          4. Inst. Adm:
        </label>
        <div className="div2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => {
                setFicha({ ...ficha, minsa: e.target.checked });
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              MINSA
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => {
                setFicha({ ...ficha, essalud: e.target.checked });
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              EsSalud
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => {
                setFicha({ ...ficha, privado: e.target.checked });
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Privado
            </label>
          </div>
        </div>

        <label className="mt-2" htmlFor="">
          5. Clasificación del caso:
        </label>
        <div className="div2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => {
                setFicha({ ...ficha, confirmado: e.target.checked });
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Confirmado
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => {
                setFicha({ ...ficha, probable: e.target.checked });
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Probable
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => {
                setFicha({ ...ficha, sospechoso: e.target.checked });
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Sospechoso
            </label>
          </div>
        </div>

        <label className="mt-2" htmlFor="">
          6. Detectado en punto de entrada:
        </label>
        <div className="div2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => {
                setFicha({ ...ficha, detectadoSi: e.target.checked });
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => {
                setFicha({ ...ficha, detectadoNo: e.target.checked });
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => {
                setFicha({ ...ficha, detectadoDes: e.target.checked });
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Desconocido
            </label>
          </div>
        </div>

        <label className="mt-2" htmlFor="">
          Si la respuesta es si, fecha:
        </label>
        <div className="respuesta">
          <input
            type="date"
            class="form-control"
            placeholder="Fecha"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setFicha({ ...ficha, detectadoFecha: e.target.value });
            }}
          />

          <input
            type="text"
            class="form-control"
            placeholder="Lugar"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setFicha({ ...ficha, detectadoLugar: e.target.value });
            }}
          />
        </div>
      </div>

      <label className="mt-4" htmlFor="">
        <strong>II. DATOS DEL PACIENTE</strong>
      </label>
      <div className="paciente">
        <div className="div1 mt-2">
          <div className="mt-2">
            <label htmlFor="">7. Apellidos y nombres</label>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={data.nombre}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="">8. Fecha de nacimiento</label>
            <input
              type="date"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) =>
                setFicha({ ...ficha, fechaNaci: e.target.value })
              }
            />
          </div>
        </div>
        <div className="mt-2">
          <label htmlFor="">9. Edad</label>
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setFicha({ ...ficha, edad: e.target.value })}
          />
        </div>

        <label className="mt-2" htmlFor="">
          10. Sexo
        </label>
        <div className="div2">
          <div class="form-check">
            <input
              class="masculino form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => {
                setFicha({ ...ficha, masculino: e.target.checked });

                let check = document.querySelector(".femenino");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Masculino
            </label>
          </div>
          <div class="form-check">
            <input
              class="femenino form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => {
                setFicha({ ...ficha, femenino: e.target.checked });

                let check = document.querySelector(".masculino");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Femenino
            </label>
          </div>
        </div>

        <div className="div3">
          <div>
            <label htmlFor="">11. Nº DNI</label>
            <input
              type="text"
              class="form-control"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setFicha({ ...ficha, dni: e.target.value })}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="">12. Nº Teléfono</label>
            <input
              type="text"
              class="form-control"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setFicha({ ...ficha, telefono: e.target.value })}
            />
          </div>
        </div>

        <label className="titulo1 mt-3" htmlFor="">
          Lugar probable de infección
        </label>

        <br />

        <label htmlFor="" className="mt-2">
          12. Lugar donde el caso fue diagnosticado
        </label>
        <div style={{ display: "flex" }} className="mt-2">
          <input
            type="text"
            class="form-control"
            placeholder="Pais"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setFicha({ ...ficha, lugar: e.target.value })}
          />
          <input
            type="text"
            class="form-control"
            placeholder="Provincia"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setFicha({ ...ficha, provincia: e.target.value })}
          />
          <input
            type="text"
            class="form-control"
            placeholder="Distrito"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setFicha({ ...ficha, distrito: e.target.value })}
          />
        </div>

        <label className="titulo1 mt-3" htmlFor="">
          Información del domicilio del paciente
        </label>

        <br />
        <label htmlFor="" className="mt-2">
          13. Dirección de residencia actual
        </label>
        <input
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setFicha({ ...ficha, direccion: e.target.value })}
        />
        <div className="mt-2" style={{ display: "flex" }}>
          <input
            type="text"
            class="form-control"
            placeholder="Pais"
            aria-label=""
            aria-describedby="basic-addon1"
            onChange={(e) => setFicha({ ...ficha, dirPais: e.target.value })}
          />
          <input
            type="text"
            class="form-control"
            placeholder="Provincia"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) =>
              setFicha({ ...ficha, dirProvincia: e.target.value })
            }
          />
          <input
            type="text"
            class="form-control"
            placeholder="Distrito"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) =>
              setFicha({ ...ficha, dirDistrito: e.target.value })
            }
          />
        </div>
      </div>

      <div className="cuadroClinico">
        <label className="titulo1 mt-3" htmlFor="">
          <strong>III. CUADRO CLÍNICO</strong>
        </label>
        <br />
        <label htmlFor="" className="mt-2">
          14. Fecha de inicio de sintomas:
        </label>
        <div className="div1">
          <input
            type="date"
            class="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setFicha({ ...ficha, fechaSinto: e.target.value })}
          />
          <div className="div1 mt-2">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                  id="flexCheckDefault"
                onChange={(e) =>
                  setFicha({
                    ...ficha,
                    cuadroAsintomatico: e.target.checked,
                  })
                }
              />
              <label class="form-check-label" for="flexCheckDefault">
                Asintomático
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                  id="flexCheckDefault"
                onChange={(e) =>
                  setFicha({
                    ...ficha,
                    cuadroDesconocido: e.target.checked,
                  })
                }
              />
              <label class="form-check-label" for="flexCheckDefault">
                Desconocido
              </label>
            </div>
          </div>
        </div>

        <label htmlFor="">15. Hospitalizado:</label>
        <div className="div2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, hospitalizadoSi: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, hospitalizadoNo: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({
                  ...ficha,
                  hospitalizadoDesc: e.target.checked,
                })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Desconocido
            </label>
          </div>
        </div>
        <label className="mt-2" htmlFor="">
          Si fue hospitalizado, complete la siguiente información:
        </label>
        <div>
          <label className="mt-2" htmlFor="">
            16. Fecha de hospitalización:
          </label>
          <input
            type="date"
            class="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setFicha({ ...ficha, fechaHosp: e.target.value })}
          />
        </div>

        <label className="mt-2" htmlFor="">
          17. Aislamiento
        </label>
        <div className="div3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, aislamientoSi: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, aislamientoNo: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">
            18. El paciente estuvo en ventilación mecánica:
          </label>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, ventilacionSi: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, ventilacionNo: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, ventilacionDesc: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Desconocido
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">19. Evolución del paciente:</label>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, recuperado: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Recuperado
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, recuperadoNo: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              No recuperado
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, fallecido: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Falleció
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, evolucionDesc: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Desconocido
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">20. Fecha de defunción, si aplica:</label>
          <input
            type="date"
            class="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setFicha({ ...ficha, fechaDefun: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="" className="mt-2">
            21. Sintomas:
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, sintoma1: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Fiebre/escalofrío
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, sintoma2: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Malestar general
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, sintoma3: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Tos
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, sintoma4: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Dolor de garganta
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, sintoma5: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Congestión nasal
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, sintoma6: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Dificultad respiratoria
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, sintoma7: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Diarrea
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, sintoma8: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Náuseas / vomitos
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, sintoma9: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Cefalea
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, sintoma10: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Irritabilidad/ confusión
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Dolor
            </label>

            <label htmlFor="">Marque todos los que aplica:</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Muscular
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Pecho
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Abdominal
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Articulaciones
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">22. Signos:</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => setFicha({ ...ficha, signo1: e.target.checked })}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Exudado faringeo
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => setFicha({ ...ficha, signo2: e.target.checked })}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Inyeccion conjuntival
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => setFicha({ ...ficha, signo3: e.target.checked })}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Convulsión
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => setFicha({ ...ficha, signo4: e.target.checked })}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Coma
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => setFicha({ ...ficha, signo5: e.target.checked })}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Disnea/taquipnea
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => setFicha({ ...ficha, signo6: e.target.checked })}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Auscultacion pulmonar, anormal
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => setFicha({ ...ficha, signo7: e.target.checked })}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Hallazgos anormales en Rx pulmonar
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => setFicha({ ...ficha, signo8: e.target.checked })}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Otros, especificar
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">23. Condiciones de comorbilidad:</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, condicion1: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Embarazo(Triemestre)
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, condicion2: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Enfermedad cardiovascular (incluye hipertensión)
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, condicion3: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Diabetes
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, condicion4: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Enfermedad hepática
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, condicion5: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Enfermedad crónica neurológica o neuromuscular
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, condicion6: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Pos parto( 6 semanas)
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, condicion7: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Inmunodeficiencia(incluye VIH)
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, condicion8: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Enfermedad renal
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, condicion9: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Daño hepático
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, condicion10: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Enfermedad pulmonar crónica
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, condicion11: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Cancer
            </label>
          </div>
        </div>

        <label htmlFor="">
        <strong> IV. Información de viaje y exposición en los 14 dias anteriores a la
          fecha de inicio de sintomas(antes de informar si es asintomatico)</strong> 
        </label>

        <div>
          <label htmlFor="" className="mt-2">
            24. Ocupación
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, ocupacion1: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Estudiante
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, ocupacion2: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Trabaja con animales
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, ocupacion3: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Trabajador de salud en laboratorio
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, ocupacion4: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Trabajador de salud
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, ocupacion5: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Otros, especificar
            </label>
          </div>
        </div>

        <label htmlFor="" className="mt-2">
          25. ¿Ha viajado el paciente 14 días antes de la fecha de inicio de
          síntomas?
        </label>
        <div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, viajeSi: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, viajeNo: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, viajeDesc: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Desconocido
            </label>
          </div>
        </div>

        <label htmlFor="">
          26. Si la respuesta es Si, especifique los lugares a los que el
          paciente viajó:
        </label>
        <div>
          <label htmlFor="">Pais</label>

          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setFicha({ ...ficha, pais: e.target.value })}
          />

          <label htmlFor="">Ciudad</label>

          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setFicha({ ...ficha, ciudad: e.target.value })}
          />
        </div>
      </div>

      <div className="informacionViaje">
        <label htmlFor="" className="mt-2">
          27. ¿Ha visitado algun establecimiento de salud en los 14 dias previos
          al inicio de síntomas?:
        </label>
        <div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, infoViajeSi: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, infoViajeNo: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, infoViajeDesc: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Desconocido
            </label>
          </div>

          <label htmlFor="">Si la respuesta es Si, nombre el EESS:</label>

          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) =>
              setFicha({ ...ficha, infoViajeNombre: e.target.value })
            }
          />
        </div>

        <label htmlFor="" className="mt-2">
          28. ¿Ha tenido el paciente contacto cercano con una persona con
          infección respiratoria aguda en los 14 dias previos al inicio de
          síntomas? Si la respuesta es si, marque segun corresponda:
        </label>

        <div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, entorno1: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Entorno de salud
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, entorno2: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Desconocido
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, entorno3: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Entorno Familiar
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, entorno4: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Lugar de trabajo
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, entorno5: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Otros, especifique:
            </label>
          </div>
        </div>

        <label htmlFor="">
          29. ¿Ha tenido contacto con un caso confirmado o probable en los 14
          dias previos al inicio de sintomas?
        </label>

        <div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, confirmadoSi: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, confirmadoNo: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, confirmadoDesc: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Desconocido
            </label>
          </div>

          <label htmlFor="">
            Si la respuesta es si, liste los datos confirmados o probables:
          </label>

          <label htmlFor="">Caso 1</label>

          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setFicha({ ...ficha, caso1: e.target.value })}
          />

          <label htmlFor="">Caso 2</label>

          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setFicha({ ...ficha, caso2: e.target.value })}
          />

          <label htmlFor="" className="mt-2">
            Si la respuesta es si, marque el entorno, según corresponda:
          </label>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, confirmado1: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Entorno de salud
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, confirmado2: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Desconocido
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, confirmado3: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Entorno familiar
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, confirmado4: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Lugar de trabajo
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) =>
                setFicha({ ...ficha, confirmado5: e.target.checked })
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Otros, especifique:
            </label>
          </div>

          <label htmlFor="">
            Si la respuesta es si, registre el pais/departamento/localidad de
            exposición:
          </label>

          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setFicha({ ...ficha, exposicion: e.target.value })}
          />
        </div>

        <label htmlFor="" className="mt-2">
          30. ¿Ha visitado algun mercado donde se encuentre animales vivos en
          los 14 dias previos al inicio de síntomas?
        </label>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={(e) => setFicha({ ...ficha, mercado1: e.target.checked })}
          />
          <label class="form-check-label" for="flexCheckDefault">
            Si
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={(e) => setFicha({ ...ficha, mercado2: e.target.checked })}
          />
          <label class="form-check-label" for="flexCheckDefault">
            No
          </label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={(e) => setFicha({ ...ficha, mercado3: e.target.checked })}
          />
          <label class="form-check-label" for="flexCheckDefault">
            Desconocido
          </label>
        </div>

        <label htmlFor="">
          Si la respuesta es si, registre el pais/departamento/localidad de
          exposición:
        </label>

        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setFicha({ ...ficha, mercado4: e.target.value })}
        />
      </div>

      <label className="mt-2" htmlFor="">
        <strong>V. LABORATORIO (Para ser llenado por laboratorio)</strong>
      </label>

      <div className="laboratorio">
        <label htmlFor="" className="mt-2">
          31. Fecha de toma de muestra:
        </label>

        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setFicha({ ...ficha, laboratorio1: e.target.value })}
        />

        <label htmlFor="" className="mt-2">
          32. Tipo de muestra:
        </label>

        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setFicha({ ...ficha, laboratorio2: e.target.value })}
        />

        <label htmlFor="" className="mt-2">
          33. Tipo de prueba:
        </label>

        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setFicha({ ...ficha, laboratorio3: e.target.value })}
        />

        <label htmlFor="" className="mt-2">
          34. ¿Se realizó secuenciamiento?:
        </label>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={(e) =>
              setFicha({ ...ficha, laboratorio4: e.target.checked })
            }
          />
          <label class="form-check-label" for="flexCheckDefault">
            Si
          </label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={(e) =>
              setFicha({ ...ficha, laboratorio5: e.target.checked })
            }
          />
          <label class="form-check-label" for="flexCheckDefault">
            No
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={(e) =>
              setFicha({ ...ficha, laboratorio6: e.target.checked })
            }
          />
          <label class="form-check-label" for="flexCheckDefault">
            Desconocido
          </label>
        </div>

        <label htmlFor="">31. Fecha de resultado de laboratorio:</label>

        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setFicha({ ...ficha, laboratorio7: e.target.value })}
        />
      </div>

      <label className="mt-2" htmlFor="">
        <strong>VI. INVESTIGADOR</strong>
      </label>

      <div className="investigador">
        <label htmlFor="" className="mt-2">
          54. Persona que llena la ficha:
        </label>

        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setFicha({ ...ficha, investigador: e.target.value })}
        />

        <label htmlFor="" className="mt-2">
          55. Firma y sello:
        </label>

        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
};

export default FichaCovid19;
