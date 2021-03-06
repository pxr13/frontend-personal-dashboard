import React from 'react';

import './style.css';

const Checkbox = ({ isCheckedOff, isMousedOver, toggleCheckbox }) => (
  <div
    className={
      'checkbox-container ' +
      (isCheckedOff ? 'checkbox-container__checked' : '') +
      (!isMousedOver && !isCheckedOff ? 'not-moused-over' : '')
    }>
    <input onClick={toggleCheckbox} type="checkbox" id="rememberMe" defaultChecked={isCheckedOff} />
    <label className="checkbox" htmlFor="rememberMe" />
  </div>
);

export default Checkbox;
