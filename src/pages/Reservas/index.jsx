import React from 'react';
import { MdAddCircle, MdDelete, MdRemoveCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeReserve,
  updateAmountRequest,
} from '../../store/modules/reserve/actions';
import './styles.css';

export function Reservas() {
  const reserves = useSelector((state) => state.reserve);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeReserve(id));
  };

  const decrementAmount = (trip) => {
    dispatch(updateAmountRequest(trip.id, trip.amount - 1));
  };

  const incrementAmount = (trip) => {
    dispatch(updateAmountRequest(trip.id, trip.amount + 1));
  };

  return (
    <div>
      <h1 className="title">Voce solicitou {reserves.length} reservas</h1>

      {reserves.map((reserve) => (
        <div className="reservas" key={reserve.id}>
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>

          <div className="amount">
            <button type="button" onClick={() => decrementAmount(reserve)}>
              <MdRemoveCircle size={25} color="#191919" />
            </button>
            <span> {reserve.amount}</span>
            <button type="button" onClick={() => incrementAmount(reserve)}>
              <MdAddCircle size={25} color="#191919" />
            </button>
          </div>

          <button type="button" onClick={() => handleRemove(reserve.id)}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}

      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
}
