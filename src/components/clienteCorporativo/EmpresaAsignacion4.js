import React, { useEffect, useRef, useState } from "react";
import Modal from 'react-modal';
import { useHistory } from "react-router-dom";



const EmpresaAsignacion4 = () => {
  let history = useHistory();

  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }


  return (
    <>
    <div className="container">
      <div className="row">
        <h3 className="admin__registroclinica mt-5">Asignación de pruebas</h3>
        <label className="mt-2">4. Facturación </label>
      </div>
      <div className="row d-flex justify-content-center " >

        <div className="col-12">

        
        <table className="tablaAsignacion4 table mt-5">
          <thead class="thead">
            <tr>
              <th scope="col">Prueba</th>
              <th scope="col">Nro de Traabajadores</th>
              <th scope="col">Precio General</th>
              <th scope="col">Precio con descuento</th>
              <th scope="col">Precio total</th>
            </tr>
          </thead>
          <tbody className="tbody">
            <tr>
              <td>Prueba serológica</td>
              <td>15</td>
              <td>150</td>
              <td>140</td>
              <td>2.100</td>
            </tr>
            <tr>
              <td>Prueba covid-19</td>
              <td>15</td>
              <td>10</td>
              <td>90</td>
              <td>1.350</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Subtotal</td>
              <td>3.450</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>IGV</td>
              <td>378</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td colspan="2" className="colspan">

                
              </td>

            </tr>
          </tbody>
        </table>


        <button type="button" class="btn btn-primary" onClick={()=> history.push("/empresa/asignacion1")}>Finalizar</button>

        </div>
        {/* <div className="row d-flex justify-content-center mt-4">

        
        <form className="d-flex justify-content-center align-items-center" method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu">
                <input name="merchantId"    type="hidden"  value="508029"   />
                <input name="accountId"     type="hidden"  value="512323" />
                <input name="description"   type="hidden"  value="Ventas en linea"  />
                <input name="referenceCode" type="hidden"  value="pago09" />
                <input name="amount"        type="hidden"  value="2000"   />
                <input name="tax"           type="hidden"  value="0"  />
                <input name="taxReturnBase" type="hidden"  value="0" />
                <input name="currency"      type="hidden"  value="PEN" />
                <input name="signature"     type="hidden"  value="617cc0bc58681bda433394cbfcc9b372"  />
                <input name="test"          type="hidden"  value="1" />
                <input name="buyerFullName"    type="hidden"  value="Hector Torres" />
                <input name="buyerEmail"    type="hidden"  value="hectortorresdurand@gmail.com" />
                <input name="responseUrl"    type="hidden"  value="http://localhost:3000/empresa/asignacion4" />
                <input name="confirmationUrl"    type="hidden"  value="http://www.test.com/confirmation" />
                <input class="btnPagar btn btn-primary " name="Submit"        type="submit"  value="Pagar" />
                </form>


          </div> */}
      </div>

          

    
    </div>


   
   
    <Modal
          // className="modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
        <>
            <div className="row">
              <div className="col">
                <label htmlFor="">Nombres</label>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>              
              </div>
              <div className="col">

              <label htmlFor="">Apellidos</label>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>              

              </div>
              <div className="col-12">
              <label htmlFor="">Correo Electronico</label>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>              

              </div>

              <div className="col-12">
              <label htmlFor="">Número de tarjeta</label>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>              
              </div>

              <div className="col">
              <label htmlFor="">MM/AA</label>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>              

              </div>
              <div className="col">

              <label htmlFor="">CVV</label>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>              

              </div>

              <div className="col-12">

              <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label" for="flexRadioDefault1">
              Recordar tarjeta
            </label>
              </div>
              </div>
            </div>

            <div className="row">
              <button>Pagar</button>
            </div>
          </>
        </Modal>
   
    </>

  );
};

export default EmpresaAsignacion4;
