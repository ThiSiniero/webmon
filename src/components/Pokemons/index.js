import React from "react"
import PropTypes from "prop-types"

import { FaEdit, FaWindowClose } from "react-icons/fa"

import './pokemons.css'

export default function Pokemons({pokemons , handleEdit, handleDelete}){
  return(
    <ul className="pokemons">
          {pokemons.map((pokemon, index) => (
            <li key={pokemon}>
              {pokemon}
              <div>
                <FaEdit onClick={(e) => handleEdit(e, index)} className="edit"/>
                <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete"/>
              </div>
            </li>
          ))}
        </ul>
  )
}

Pokemons.propTypes={
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  pokemons: PropTypes.array.isRequired,
}
