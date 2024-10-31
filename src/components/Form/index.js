import React from 'react'
import PropTypes from 'prop-types'
import { FaPlus } from 'react-icons/fa'

import './form.css'

export default function Form({ handleSubmit, handleChange, novoPokemon}){
  return(
    <form onSubmit={handleSubmit} action="#" className="form">

            <input onChange={handleChange} type="text" value={novoPokemon} placeholder='digite o nome do pokemon' />
            <button type="submit">
              <FaPlus/>
            </button>

          </form>
  )
}

Form.propTypes={
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novoPokemon: PropTypes.string.isRequired,
}
