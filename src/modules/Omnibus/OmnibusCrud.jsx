import React, { useContext } from "react";
import OmnibusContext from "context/OmnibusContext";
import TableOmnibus from "./TableOmnibus";
import Modal1 from "./modal";
import FormOmnibus from "./FormOmnibus";
import ModalDelete from "./AlertDelete";

const OmnibusCrud = () => {
  const { datadel } = useContext(OmnibusContext);
  return (
    <>
      <TableOmnibus />
      <Modal1>
        <FormOmnibus />
      </Modal1>
      <ModalDelete>
        {datadel
          ? `Usted esta seguro que desea eliminar el omnibus ${datadel.chapa} de la lista de omnibus`
          : ""}
      </ModalDelete>
    </>
  );
};

export default OmnibusCrud;
