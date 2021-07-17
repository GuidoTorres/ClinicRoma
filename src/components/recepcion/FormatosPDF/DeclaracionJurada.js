import React from "react";

const DeclaracionJurada = ({
  declaracion,
  setDeclaracion,
  condicion,
  setCondicion,
}) => {
  return (
    <>
      <div className="sintomas  mb-2" style={{width: '40%',}}>
        <label htmlFor=""><strong>Síntomas</strong></label>
        
        <div className="mt-2 ">
          <label htmlFor="">Sin síntomas</label>
          <div className="form-check">
            <input
              className="sintoma form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  sintomaSi: e.target.checked,
                });
                let check = document.querySelector(".sintoma1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />

            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="sintoma1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  sintomaNo: e.target.checked,
                });

                let check = document.querySelector(".sintoma");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />

            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Fiebre / escalofrío</label>
          <div className="form-check">
            <input
              className="fiebre form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  fiebre: e.target.checked,
                });
                let check = document.querySelector(".fiebre1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="fiebre1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  fiebre1: e.target.checked,
                });
                let check = document.querySelector(".fiebre");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Malestar general</label>
          <div className="form-check">
            <input
              className="malestar form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  malestar: e.target.checked,
                });
                let check = document.querySelector(".malestar1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="malestar1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  malestar1: e.target.checked,
                });
                let check = document.querySelector(".malestar");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Tos</label>
          <div className="form-check">
            <input
              className="tos form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({ ...declaracion, tos: e.target.checked });
                let check = document.querySelector(".tos1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="tos1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({ ...declaracion, tos1: e.target.checked });
                let check = document.querySelector(".tos");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Dolor de garganta</label>
          <div className="form-check">
            <input
              className="garganta form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  garganta: e.target.checked,
                });
                let check = document.querySelector(".garganta1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="garganta1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  garganta1: e.target.checked,
                });
                let check = document.querySelector(".garganta");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Congestión nasal</label>
          <div className="form-check">
            <input
              className="congestion form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  congestion: e.target.checked,
                });
                let check = document.querySelector(".congestion1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="congestion1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  congestion1: e.target.checked,
                });
                let check = document.querySelector(".congestion");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Dificultad respiratoria</label>
          <div className=" form-check">
            <input
              className="respiratoria form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  respiratoria: e.target.checked,
                });
                let check = document.querySelector(".respiratoria1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="respiratoria1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  respiratoria1: e.target.checked,
                });
                let check = document.querySelector(".respiratoria");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Diarrea</label>
          <div className="form-check">
            <input
              className="diarrea form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  diarrea: e.target.checked,
                });
                let check = document.querySelector(".diarrea1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="diarrea1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  diarrea1: e.target.checked,
                });
                let check = document.querySelector(".diarrea");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Naúseas / Vómitos</label>
          <div className="form-check">
            <input
              className="nauseas form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  nauseas: e.target.checked,
                });
                let check = document.querySelector(".nauseas1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="nauseas1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  nauseas1: e.target.checked,
                });
                let check = document.querySelector(".nauseas");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Cefalea</label>
          <div className="form-check">
            <input
              className="cefalea form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  cefalea: e.target.checked,
                });
                let check = document.querySelector(".cefalea1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="cefalea1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  cefalea1: e.target.checked,
                });
                let check = document.querySelector(".cefalea");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Irritabilidad/ Confusión</label>
          <div className="form-check">
            <input
              className="irritabilidad form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  irritabilidad: e.target.checked,
                });
                let check = document.querySelector(".irritabilidad1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="irritabilidad1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  irritabilidad1: e.target.checked,
                });
                let check = document.querySelector(".irritabilidad");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Pérdida del gusto</label>
          <div className="form-check">
            <input
              className="gusto form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({ ...declaracion, gusto: e.target.checked });
                let check = document.querySelector(".gusto1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="gusto1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  gusto1: e.target.checked,
                });
                let check = document.querySelector(".gusto");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Pérdida del olfato</label>
          <div className="form-check">
            <input
              className="olfato form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  oldato: e.target.checked,
                });
                let check = document.querySelector(".olfato1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="olfato1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setDeclaracion({
                  ...declaracion,
                  olfato1: e.target.checked,
                });
                let check = document.querySelector(".olfato");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>
      </div>

      <div className="condicionContainer">
      <label htmlFor=""><strong>Condición de riesgo</strong></label>

        <div className="mt-2">
          <label htmlFor="">Ninguna condición de riesgo</label>
          <div className="form-check">
            <input
              className="condicion form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  condicion: e.target.checked,
                });
                let check = document.querySelector(".condicion1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="condicion1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  condicion1: e.target.checked,
                });
                let check = document.querySelector(".condicion");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Mayor de 65 años</label>
          <div className="form-check">
            <input
              className="mayor form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  mayor: e.target.checked,
                });
                let check = document.querySelector(".mayor1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="mayor1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  condicion: e.target.checked,
                });
                let check = document.querySelector(".mayor");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Hipertensión arterial</label>
          <div className="form-check">
            <input
              className="hipertencion form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  hipertencion: e.target.checked,
                });
                let check = document.querySelector(".hipertencion1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="hipertencion1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  hipertencion1: e.target.checked,
                });
                let check = document.querySelector(".hipertencion");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Enfermedad cardiovascular</label>
          <div className="form-check">
            <input
              className="cardiovascular form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  cardiovascular: e.target.checked,
                });
                let check = document.querySelector(".cardiovascular1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="cardiovascular1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  cardiovascular1: e.target.checked,
                });
                let check = document.querySelector(".cardiovascular");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Diabetes</label>
          <div className="form-check">
            <input
              className="diabetes form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  diabetes: e.target.checked,
                });
                let check = document.querySelector(".diabetes1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="diabetes1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  diabetes2: e.target.checked,
                });
                let check = document.querySelector(".diabetes");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Obesidad</label>
          <div className="form-check">
            <input
              className="obesidad form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  obesidad: e.target.checked,
                });
                let check = document.querySelector(".obesidad1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="obesidad1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  obesidad1: e.target.checked,
                });
                let check = document.querySelector(".obesidad");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Asma</label>
          <div className="form-check">
            <input
              className="asma form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  asma: e.target.checked,
                });
                let check = document.querySelector(".asma1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="asma1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  asma1: e.target.checked,
                });
                let check = document.querySelector(".asma");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Enfermedad pulmonar crónica</label>
          <div className="form-check">
            <input
              className="pulmonar form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  pulmonar: e.target.checked,
                });
                let check = document.querySelector(".pulmonar1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="pulmonar1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  pulmonar1: e.target.checked,
                });
                let check = document.querySelector(".pulmonar");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Insuficiencia renal crónica</label>
          <div className="form-check">
            <input
              className="insuficiencia form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  insuficiencia: e.target.checked,
                });
                let check = document.querySelector(".insuficiencia1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="insuficiencia1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  insuficiencia1: e.target.checked,
                });
                let check = document.querySelector(".insuficiencia");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>


        <div>
          <label htmlFor="">Enfermedad o tratamiento inmunosupresor</label>
          <div className="form-check">
            <input
              className="inmunosupresor form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  inmunosupresor: e.target.checked,
                });
                let check = document.querySelector(".inmunosupresor1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="inmunosupresor1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  inmunosupresor1: e.target.checked,
                });
                let check = document.querySelector(".inmunosupresor");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Cáncer</label>
          <div className="form-check">
            <input
              className="cancer form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  cancer: e.target.checked,
                });
                let check = document.querySelector(".cancer1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="cancer1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  cancer1: e.target.checked,
                });
                let check = document.querySelector(".cancer");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>


        <div>
          <label htmlFor="">Personal de salud</label>
          <div className="form-check">
            <input
              className="personal form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  personal: e.target.checked,
                });
                let check = document.querySelector(".personal1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="personal1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  personal1: e.target.checked,
                });
                let check = document.querySelector(".personal");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="">Otra condición de riesgo</label>
          <div className="form-check">
            <input
              className="otra form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  otra: e.target.checked,
                });
                let check = document.querySelector(".otra1");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Si
            </label>
          </div>

          <div className="form-check">
            <input
              className="otra1 form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setCondicion({
                  ...condicion,
                  otra: e.target.checked,
                });
                let check = document.querySelector(".otra");
                e.target.checked === true
                  ? (check.disabled = true)
                  : (check.disabled = false);
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              No
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeclaracionJurada;
