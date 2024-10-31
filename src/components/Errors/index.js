import React from "react"
import PropTypes from "prop-types"

import './errors.css'

export default function Pokemons({errors}){
  if(errors.length> 0) {
    return(
        <div className="row errors">
            <div className="col my-3">
                <div className="div alert alert-danger">
                {errors.map((erro) => (
                  <li key={erro}>
                    {erro}
                  </li>
                ))}
                </div>
            </div>
        </div>
    )
  } else{
    return
  }
}

Pokemons.propTypes={
  errors: PropTypes.array,
}
