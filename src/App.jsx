import { useState } from 'react'
import './App.css'
import ListItem from './components/ListItem'
import models from "./libs/models.json"
import colors from "./libs/colors.json"

function App() {

  const [cost, setCost] = useState(0)


  return (
    <>
      <header>
        <h1>Lamborghini - config</h1>
      </header>
      <section id="selection">
        <h2>Sélectionnez votre véhicule</h2>
        {
          models.map( (el) => {
            return <ListItem name={el.name} price={el.price} cost={cost} setCost={setCost} />
          })
        }
      </section>
      <section id="color">
        <h2>Sélectionnez la couleur</h2>
        {
          colors.map( (el) => {
            return <ListItem name={el.name} price={el.price} cost={cost} setCost={setCost}  color={el.ref} />
          })
        }
      </section>
      <div className="price flexContainer">
        <p>{cost} €</p>
        <button>Buy it !</button>
      </div>
    </>
  )
}

export default App
