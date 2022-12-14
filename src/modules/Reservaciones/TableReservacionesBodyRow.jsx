import React,{useContext} from 'react'
import { Button } from 'react-bootstrap';
import ReservacionContext from 'context/ReservacionesContext';
import { useHistory } from 'react-router-dom';
import servicesreservacion from './servicesreservacion';
import { useDispatch } from 'react-redux';

const TableReservacionesBodyRow = ({reservacion}) => {
    let history = useHistory();
    const {pk,fecha,asientos} = reservacion;
    const { loadDatadeleteReservacions } = useContext(ReservacionContext);
    const dispatch = useDispatch()
    
    

    const  SearchViajeros=()=>{
       dispatch(servicesreservacion.loadViajeros(reservacion));
       history.push("/admin/viajeros/"); 
    }
  return (
    <>
      <tr>
        <td>{pk}</td>
        <td>{fecha}</td>
        <td>{asientos}</td>
        <td>
          <Button
            type="submit"
            onClick={() => SearchViajeros()}
            className="btn-fill ml-2 "
            variant="info"
          >
            Ver Viajeros
          </Button>
        </td>
        <td>
          <>
            <Button
              type="submit"
              onClick={() => loadDatadeleteReservacions(reservacion)}
              className="btn-fill ml-2 "
              variant="danger"
            >
              Eliminar
            </Button>
          </>
        </td>
      </tr>
    </>
  );
}

export default TableReservacionesBodyRow;