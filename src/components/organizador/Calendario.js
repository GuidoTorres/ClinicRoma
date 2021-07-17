import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import OMHorario from './OMHorario';
import OMPaciente from './OMPaciente';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';

moment.locale('es');

const localizer = momentLocalizer(moment);

const Calendario = () => {
  const [MPaciente, setMPaciente] = useState(false);
  const [MHorario, setMHorario] = useState(false);

  const events = [
    {
      title: 'Juan',
      start: moment().toDate(),
      end: moment().add(15, 'minutes').toDate(),
      backgroundColor: 'red',
    },
    {
      title: 'Marcos',
      start: moment().add(15, 'minutes').toDate(),
      end: moment().add(35, 'minutes').toDate(),
    },
  ];

  const handlePacienteUbicacion = () => {
    console.log('click');
    setMPaciente(true);
    // setMHorario(false);
  };
  const hanleMHorario = () => {
    console.log('click');

    setMHorario(true);
    // setMPaciente(false);
  };
  return (
    <div className="container">
      <div className="row">
        <h3>Horarios disponibles</h3>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
          <div className="barra">
            <span>Datos del paciente</span>
            <div className="organizador__datos">
              <div>
                <div>
                  <label>DNI:</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Nombre:</label>
                  <input type="text" />
                </div>
              </div>
              <div>
                <div>
                  <label>A. Paterno:</label>
                  <input type="text" />
                </div>
                <div>
                  <label>A. Materno:</label>
                  <input type="text" />
                </div>
              </div>
              <div>
                <div>
                  <label>Distrito:</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Ubicación:</label>
                  <i
                    className="fas fa-map-marker-alt"
                    onClick={handlePacienteUbicacion}
                  ></i>
                </div>
              </div>
            </div>

            <div className="organizador__transportista">
              {/* <div> */}
              <label>Seleccionar transportista</label>
              <select className="form-select">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
          <div className="barra">
            <span className="">Detalles del pedido</span>
            <div className="organizador__detalle">
              <div>
                <label>Tipo de servicio:</label>
                <input type="text" />
              </div>
              <div>
                <label>Plan de atención:</label>
                <input type="text" />
              </div>
              <div>
                <label>Cantidad:</label>
                <input type="text" />
              </div>
            </div>
            <span className="">Datos del transportista</span>
            <div className="organizador__datostransportista">
              <div>
                <label>Transportista</label>
                <input type="text" />
              </div>
              <div>
                <label>Distrito</label>
                <input type="text" />
              </div>
              <div>
                <label>Ubicación:</label>
                <i className="fas fa-map-marker-alt"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="barra">
            <span className="">Material disponible</span>
            <div className="organizador__datostransportistas">
              <div>
                <label>P. Antigeno(kit):</label>
                <input type="text" />
              </div>
              <div>
                <label>P. Electroquimioluminiscencia(kit):</label>
                <input type="text" />
              </div>
              <div>
                <label>P. Inmunocromatografía(kit):</label>
                <input type="text" />
              </div>
              <div>
                <label>P. RT-PCR en tiempo real(kit):</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <div className="barra">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              // messages={messages}
              // eventPropGetter={eventStyleGetter}
              // components={{
              //   event: CalendarEvent,
              // }}
              // onDoubleClickEvent={onDoubleClick}
              // onSelectEvent={onSelectEvent}
              // onView={onViewChange}
              // view={lastView}
              // onSelectSlot={onSelectSlot}
              // selectable={true}
              // step={170}
              defaultView={Views.AGENDA}
              // formats={formats}
            />
          </div>
        </div>
      </div>
      <div>
        <button className="botones fab" onClick={hanleMHorario}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      {MPaciente && (
        <OMPaciente MPaciente={MPaciente} setMPaciente={setMPaciente} />
      )}
      {MHorario && <OMHorario MHorario={MHorario} setMHorario={setMHorario} />}
    </div>
  );
};

export default Calendario;
