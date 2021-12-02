import React from 'react';
import './Filter.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/slice';

export default function Filter() {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <h3 className="filter__header">Find contacts by name :</h3>
      <input
        type="text"
        name="filter"
        value={value}
        className="filter__input"
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </div>
  );
}
