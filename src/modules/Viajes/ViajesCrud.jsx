import React, { useContext } from "react";
import TableViajes from "./TableViajes";
import Modal from "./modal";
import FormViajes from "./FormViajes";
import AlertDelete from "./AlertDelete";
import ViajeContext from "context/ViajesContext";

const ViajesCrud = () => {
  const { datadel } = useContext(ViajeContext);
  console.log("ver datadel", datadel);
  return (
    <>
      <TableViajes />
      <Modal>
        <FormViajes />
      </Modal>
      <AlertDelete>
         { datadel &&  `Usted esta seguro que desea eliminar el viaje ${datadel.origen} - ${datadel.destino } de la lista de viajes`
           }
      </AlertDelete>
    </>
  );
};

export default ViajesCrud;
