const d = document;
import { useState } from "react";

export const Parse = (dataToEdit, props) => {
  const [objnew, setObjNew] = useState(dataToEdit);
  const { destinos, omnibus, choferes } = props;
  /* const objnew = {
    pk: null,
    hora: "",
    omnibus: "",
    chofer1: "",
    chofer2: "",
    origen: "",
    destino: "",
    create_by: Number(1),
  }; */
  if (objnew) {
    let omnibuss = omnibus.filter((om) => om.numero === dataToEdit?.omnibus);
    console.log("ver omnibus", omnibuss[0].pk);
    objnew.omnibus = omnibuss[0].pk;
    let chofer1 = choferes.filter((ch) => ch.nombre === dataToEdit?.chofer1);
    objnew.chofer1 = chofer1[0].pk;
    let chofer2 = choferes.filter((ch) => ch.nombre === dataToEdit?.chofer2);
    objnew.chofer2 = chofer2[0].pk;
    let origen = destinos.filter((des) => des.nombre === dataToEdit?.origen);
    objnew.origen = origen[0].pk;
    let destino = destinos.filter((des) => des.nombre === dataToEdit?.destino);
    objnew.destino = destino[0].pk;
    console.log("ver px", objnew);
    return objnew;
  }
  return null;
};

export default Parse;
