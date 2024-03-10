import React from "react";
import './Form.css';
import PropTypes from "prop-types";
import { FaPlus } from 'react-icons/fa'

export default function Form({handleInputChange, handleSubmit, novaTarefa}) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleInputChange} type="text" value={novaTarefa} />
      <button type="submit"><FaPlus /></button>
    </form>
  );
}

Form.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired
}
