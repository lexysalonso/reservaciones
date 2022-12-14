import React, { useContext, useEffect, useState } from "react";
import OmnibusContext from "context/OmnibusContext";

const useOmnibus = (objnew, validationsForm) => {
  const { dataToEdit, setdataToEdit, setModalClose, create, update } =
    useContext(OmnibusContext);
  const [form, setForm] = useState(objnew);
  const [disable, setDisable] = useState(true);
  const [errores, setErrores] = useState({});

  useEffect(() => {
    console.log("ver datatoEdit", dataToEdit);
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(objnew);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleChangeCkeck = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
   
  };

  const handlekeyUP = (e) => {
    handleChange(e);
    setErrores(validationsForm(form, setDisable));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errores).length === 0) {
      if (form.pk === null) {
        delete form.pk;
        create(form);
      } else {
        update(form);
      }
      handleReset();
    } else {
      return;
    }
  };
  const handleReset = (e) => {
    setForm(objnew);
    setdataToEdit(null);
    setModalClose();
  };

  return {
    form,
    errores,
    disable,
    handleChange,
    handleChangeCkeck,
    handleSubmit,
    handleReset,
    handlekeyUP,
    setModalClose,
  };
};

export default useOmnibus;
