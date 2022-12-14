import { createContext, useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import useModal from "hooks/useModal";
import service from "../modules/Omnibus/services";

const OmnibusContext = createContext();

const OmnibusProvider = ({ children }) => {
  const [dataToEdit, setdataToEdit] = useState(null);
  const [datadel, setdataToDel] = useState(null);
  const [isOpen, setModalShow, setModalClose] = useModal(false);
  const [isOpenDel, setDataToDelShow, setDataToDelClose] = useModal(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { omnibus, loading } = state.omnibus;

  useEffect(() => {
    dispatch(service.getOmnibus());
  }, []);

  const create = (data) => {
    dispatch(service.postOmnibus(data));
  };
  const update = (data) => {
    dispatch(service.putOmnibus(data));
  };
  const deleteOmnibus = (data) => {
    dispatch(service.delOmnibus(data));
  };

  const tallerOmnibus = (data) => {
    dispatch(service.tallerOmnibus(data));
  };

  const disponibleOmnibus = (data) => {
    dispatch(service.disponibleOmnibus(data));
  };

  const selectData = (om) => {
    setdataToEdit(om);
    setModalShow();
  };
  const delData = (om) => {
    setdataToDel(om);
    setDataToDelShow();
  };

  const delDataOmnibus = () => {
    deleteOmnibus(datadel);
    setDataToDelClose();
    setdataToDel(null);
  };

  const data = {
    omnibus,
    loading,
    dataToEdit,
    setdataToEdit,
    datadel,
    setdataToDel,
    isOpen,
    setModalShow,
    setModalClose,
    isOpenDel,
    setDataToDelShow,
    setDataToDelClose,
    create,
    update,
    deleteOmnibus,
    tallerOmnibus,
    disponibleOmnibus,
    selectData,
    delDataOmnibus,
    delData,
  };

  return (
    <OmnibusContext.Provider value={data}>{children}</OmnibusContext.Provider>
  );
};

export { OmnibusProvider };
export default OmnibusContext;
