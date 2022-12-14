import React from 'react'
import { useState , useEffect} from 'react';

const useChofer = (
  objnew,
  dataToEdit,
  setdataToEdit,
  setModalClose,
  create,
  update,
  validationsForm
) => {
  const [form, setForm] = useState(objnew);
  const [errores, setErrores] = useState({});
  const [disable ,setDisable] = useState(true)

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.ci) {
      alert("Los campos esta vacios");
      return;
    }
    if (form.pk === null) {
      delete form.pk;
      create(form);
    } else {
      update(form);
    }
    handleReset();
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrores(validationsForm(form, setDisable));
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
    handleSubmit,
    handleBlur,
    handleReset,

  };
};

export default useChofer;