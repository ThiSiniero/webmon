import React, {Component} from "react"

import Form from './Form'
import Pokemons from './Pokemons'
import Errors from './Errors'

import "./Main.css"

export default class Main extends Component{
  state = {
    novoPokemon: '',
    pokemons: [],
    index:-1,
    errors: [],
  }

  componentDidMount(){
    const pokemons = JSON.parse(localStorage.getItem('pokemons'))

    if(!pokemons) return

    this.setState({
      pokemons
    })
  }

  componentDidUpdate(prevProps, prevState){
    const { pokemons } = this.state

    if(pokemons === prevState.pokemons) return

    localStorage.setItem('pokemons', JSON.stringify(pokemons))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { pokemons, index } = this.state
    let { novoPokemon } = this.state
    novoPokemon = novoPokemon.trim()

    if(this.getErrors() === -1) return

    const novosPokemons = [...pokemons]

    if(index === -1) {
      this.setState({
        pokemons: [...novosPokemons, novoPokemon],
        novoPokemon: '',
        errors: ''
      })
    } else {
      novosPokemons[index] = novoPokemon

      this.setState({
        pokemons: [...novosPokemons],
        index: -1,
        novoPokemon: '',
        errors: ''
      })
    }

  }

  getErrors(){
    const { pokemons, novoPokemon } = this.state

    if(pokemons.indexOf(novoPokemon) !== -1){
      const novoErro = "pokemon já cadastrado !!"
      const {errors} = this.state

      this.setState({
        errors: [...errors, novoErro]
      })
      return -1
    }
    if(novoPokemon === ''){
      const novoErro = "campo em branco !!"
      const {errors} = this.state

      this.setState({
        errors: [...errors, novoErro]
      })
      return -1
    }
  }

  handleChange = (e) => {
    this.setState({
      novoPokemon: e.target.value,
    })
  }

  handleEdit = (e, index) => {
    const { pokemons } = this.state

    this.setState({
      index,
      novoPokemon: pokemons[index]
    })

  }

  handleDelete = (e, index) => {
    const { pokemons } = this.state
    const novosPokemons = [...pokemons]
    novosPokemons.splice(index, 1)

    this.setState({
      pokemons: [...novosPokemons]
    })

  }

  render(){
    const { novoPokemon, pokemons, errors } = this.state

      return(
        <div className="main">
          <h1>Lista de Pokemons</h1>

        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} novoPokemon={novoPokemon} />
        <Errors errors={errors} />
        <Pokemons pokemons={pokemons} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />



        </div>
      )
    }
}
