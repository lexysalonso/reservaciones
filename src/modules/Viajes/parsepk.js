const d = document;

export const Parse = (props) => {
  const { viajes, destinos, omnibusdisponibles, choferes, dataToEdit } = props;
  console.log("ver lo que hay en dataToedit", dataToEdit);
  const objnew = {
    pk: null,
    hora: dataToEdit?.hora,
    omnibus: "",
    chofer1: "",
    chofer2: "",
    origen: "",
    destino: "",
    create_by: Number(1),
  };
  if (dataToEdit) {
    let omnibuss = omnibusdisponibles.filter(
      (om) => om.numero === dataToEdit?.omnibus
    );
    //console.log("ver omnibus", omnibuss[0].pk);
    objnew.omnibus = Number(omnibuss[0].pk);
    let chofer1 = choferes.filter((ch) => ch.nombre === dataToEdit?.chofer1);
    objnew.chofer1 = chofer1[0].pk;
    let chofer2 = choferes.filter((ch) => ch.nombre === dataToEdit?.chofer2);
    objnew.chofer2 = chofer2[0].pk;
    let origen = destinos.filter((des) => des.nombre === dataToEdit?.origen);
    objnew.origen = origen[0].pk;
    let destino = destinos.filter((des) => des.nombre === dataToEdit?.destino);
    objnew.destino = destino[0].pk;
    objnew.hora = dataToEdit.hora;
    objnew.pk = dataToEdit.pk;
    console.log("ver px", objnew);
    return objnew;
  }
  return null;
};

export default Parse;
