import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import servicesviajes from "modules/Viajes/services";
import ReservacionContext from "context/ReservacionesContext";
import parsetError from "utilitis/parsetError";
import { loading } from 'components/Loading/loading';

const useReservciones = (reserva, validationsForm, validationsFormCI) => {
  const [res, setRes] = useState(reserva);
  const [cis, setCis] = useState([]);
  const [errores, setErrores] = useState({});
  const [erroscis, setErrorsCI] = useState({});
  const [disable, setDisable] = useState(true);
  const [ci, setCI] = useState("");
  const { cant } = useParams();
  const state = useSelector((state) => state);
  const { cantidad } = state.reservacion;
  //const { viajes } = state.viajes;
  const dispatch = useDispatch();

  const { viajes, loadViajes, postReservaciones, setOpenModal , loading} =
    useContext(ReservacionContext);

  console.log("ver cantidad", cantidad);
  let history = useHistory();

  const Regresar = () => {
    history.push("/admin/reservar");
  };

  useEffect(() => {
    loadViajes();
  }, []);

  useEffect(() => {
    setErrorsCI(validationsFormCI(ci, setDisable));
    console.log("cambio ci", erroscis);
    }, [ci]);

  const handleChangeCIS = (e) => {
    e.preventDefault();
    setCI(e.target.value);
    cis.push(e.target.value);
  };

  const handleChange = (e) => {
    res.asientos = Number(cant);

    setRes({
      ...res,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnKeyUp = (e) => {
    handleChange(e);
    setErrores(validationsForm(res, cis, setDisable));
  };
  const hanledsubmit = (e) => {
    e.preventDefault();
    console.log("se envio el submit", cis);
    res.cis = cis.join(",");
    console.log("se envio el submit", res);
    //console.log("ver viajes", viajes);
    postReservaciones(res);
    history.push("/admin/reservaciones");
  };
  return {
    loading,
    disable,
    errores,
    erroscis,
    cantidad,
    viajes,
    res,
    ci,
    cant,
    handleOnKeyUp,
    hanledsubmit,
    handleChange,
    handleChangeCIS,
    Regresar,
  };
};

export default useReservciones;
