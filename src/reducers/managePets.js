export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      let updatedPets = state.pets.filter(pet => pet.id !== action.id)
      return {pets: updatedPets}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let petList = state.pets.map(pet => `<li>${pet.name}</li>`)

  document.getElementById('container').innerHTML = `<ul>${petList}</ul>`
}
