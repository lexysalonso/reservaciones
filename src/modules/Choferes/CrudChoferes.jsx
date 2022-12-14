import React, { useEffect, useState ,useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import FormChoferes from "./FormChoferes";
import TableChofere from "./TableChoferes";
import Modal from "./modal";
import ModalDelete from "./AlertDelete";
import useModal from "hooks/useModal";
import service from "./services";

const CrudChoferes = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isOpen, setModalShow, setModalClose] = useModal(false);
  const [dataToEdit, setdataToEdit] = useState(null);
  const [datadel, setdataToDel] = useState(null);
  const [isOpenDel, setDataToDelShow, setDataToDelClose] = useModal(false);

  const { choferes , loading} = state.choferes;
  
  useEffect(() => {
    dispatch(service.getChoferes());
  }, []);
  const create = useCallback((form) => {
    dispatch(service.postChoferes(form));
  });
  const update = useCallback((form) => {
    dispatch(service.putChoferes(form));
  });
  const deletech = (ch) => {
     dispatch(service.delChoferes(ch));
  };
  return (
    <>
      <TableChofere
        setdataToEdit={setdataToEdit}
        setModalShow={setModalShow}
        setdataToDel={setdataToDel}
        choferes={choferes}
        setDataToDelShow={setDataToDelShow}
        loading={loading}
      />
      <Modal datatoedit={dataToEdit} show={isOpen} onHide={setModalClose}>
        <FormChoferes
          dataToEdit={dataToEdit}
          setdataToEdit={setdataToEdit}
          setModalClose={setModalClose}
          create={create}
          update={update}
        />
      </Modal>
      <ModalDelete
        show={isOpenDel}
        deletech={deletech}
        datadel={datadel}
        setdatatodelclose={setDataToDelClose}
        setdatatodel={setdataToDel}
      >
        {datadel
          ? `Usted esta seguro que desea eliminar el chofer ${datadel.nombre} de la lista de choferes`
          : ""}
      </ModalDelete>
    </>
  );
};

export default CrudChoferes;
