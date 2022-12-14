import React, { useEffect, useContext, useState } from "react";
import ViajeContext from "context/ViajesContext";

const useViajes = (objnew, validationsForm) => {
  const {
    create,
    update,
    dataToEdit,
    omnibusdisponibles,
    destinos,
    choferes,
    setdataToEdit,
    setModalClose,
    dataToEditPk,
  } = useContext(ViajeContext);
  const [form, setForm] = useState(objnew);
  const [errores, setErrores] = useState({});
  const [disable, setDisable] = useState(true);

  const AtributeInteger = () => {
    if (typeof form.omnibus == "number") form.omnibus = dataToEditPk.omnibus;
    if (typeof form.chofer1 === "string") form.chofer1 = dataToEditPk.chofer1;
    if (typeof form.chofer2 === "string") form.chofer2 = dataToEditPk.chofer2;
    if (typeof form.origen === "string") form.origen = dataToEditPk.origen;
    if (typeof form.destino === "string") form.destino = dataToEditPk.destino;
    form.hora = dataToEditPk?.hora;
  };

  useEffect(() => {
    if (dataToEditPk) {
      console.log("ver data dataToEdit", dataToEditPk);
      setForm(dataToEditPk, console.log("Se Ejecuto"));
      console.log("ver data dataToEdit PK", form);
    } else {
      console.log("Entro Aqui");
      setForm(objnew);
    }
  }, [dataToEditPk]);
  console.log("ver data dataToEdit PK fuera", form);

  const handleChange = (event) => {
    console.log("ver valor onchange", event.target.value);
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeSelect = (event) => {
    console.log("ver valor onchange current", event.currentTarget.value);
    setForm({
      ...form,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrores(validationsForm(form, setDisable));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.hora || !form.omnibus) {
      alert("NO se admiten campos en blanco");
      return;
    }
    if (form.pk === null) {
      create(form);
    } else {
      console.log("ver form", form);
      update(form);
    }
    handleReset();
  };

  const handleReset = () => {
    setForm(objnew);
    setdataToEdit(null);
    setModalClose();
  };
  return {
    form,
    dataToEdit,
    errores,
    disable,
    omnibusdisponibles,
    destinos,
    choferes,
    handleSubmit,
    handleReset,
    handleChange,
    handleChangeSelect,
    handleBlur,
  };
};

export default useViajes;
