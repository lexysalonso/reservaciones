import React, { createContext, useEffect, useState } from "react";
import services from "../modules/Viajes/services";
import { getOmnibusDisponibles } from "../modules/Reportes/services";
import servicesch from "../modules/Choferes/services";
import { useSelector, useDispatch } from "react-redux";
import useModal from "hooks/useModal";
import Parse from "../modules/Viajes/parsepk";


const ViajeContext = createContext();

const ViajeProvider = ({ children }) => {
  const [dataToEdit, setdataToEdit] = useState(null);
  const [datadel, setdataToDel] = useState(null);
  const [isOpen, setModalShow, setModalClose] = useModal(false);
  const [isOpenDel, setDataToDelShow, setDataToDelClose] = useModal(false);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { viajes, destinos , loading } = state.viajes;
 // const {  } = state.viajes;
  const { omnibusdisponibles } = state.omnibus;
  const { choferes } = state.choferes;

  console.log("ver viajes-omnibus-dsiponible", omnibusdisponibles);
  console.log("ver viajes-choferes", choferes);

  useEffect(() => {
    dispatch(services.getViajes());
    dispatch(getOmnibusDisponibles());
    dispatch(servicesch.getChoferes());
    dispatch(services.getDestinos());
  }, []);
  let dataToEditPk = Parse({
    viajes,
    destinos,
    omnibusdisponibles,
    choferes,
    dataToEdit,
  });
  console.log("ver dataTOedit", dataToEdit);

  const create = (data) => {
    dispatch(services.postViajes(data));
  };

  const update = (data) => {
    dispatch(services.editViajes(data));
  };
  const deleteViajes = (data) => {
    dispatch(services.delViajes(data));
  };

  const selectData = (viaje) => {
    setdataToEdit(viaje);
    setModalShow();
  };
  const delData = (viaje) => {
    setdataToDel(viaje);
    console.log("ver datatoedit", dataToEdit);
    setDataToDelShow();
  };

  const delDataViajes = () => {
    deleteViajes(datadel);
    setDataToDelClose();
    setdataToDel(null);
  };

  const data = {
    loading,
    dataToEdit,
    isOpen,
    isOpenDel,
    setModalClose,
    setDataToDelClose,
    setdataToEdit,
    setModalShow,
    setModalClose,
    viajes,
    datadel,
    destinos,
    choferes,
    omnibusdisponibles,
    dataToEditPk,
    create,
    update,
    deleteViajes,
    selectData,
    delData,
    delDataViajes,
  };

  return <ViajeContext.Provider value={data}>{children}</ViajeContext.Provider>;
};

export { ViajeProvider };
export default ViajeContext;
