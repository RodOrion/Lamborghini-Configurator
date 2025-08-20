import { useState } from "react";
import "./App.css";
import ListItem from "./components/ListItem";
import models from "./libs/models.json";
import colors from "./libs/colors.json";

function App() {
  const [priceModel, setPriceModel] = useState(0);
  const [priceColor, setPriceColor] = useState(0);
  const [activeModelID, setActiveModelID] = useState(null);
  const [activeColorID, setActiveColorID] = useState(null);
  const [colorActive, setColorActive] = useState("#3F3F3F")

  console.log(activeColorID);
  

  const cout = priceModel + priceColor;

  const handleModelClick = (price, itemId) => {
    setPriceModel(price);
    setActiveModelID(itemId);

  };

  const handleColorClick = (price, itemId) => {
    setPriceColor(price);
    setActiveColorID(itemId)
    const LamboFounded = colors.find( item => item.id === itemId )
    setColorActive(LamboFounded.ref)
  }

  return (
    <>
      <header>
        <h1>Lamborghini - config</h1>
      </header>
      <section id="selection">
        <h2>Sélectionnez votre véhicule</h2>
        {models.map((el) => {
          return (
            <ListItem
              key={el.id}
              itemId={el.id}
              name={el.name}
              price={el.price}
              onItemClick={handleModelClick}
              isActive={activeModelID === el.id}
            />
          );
        })}
      </section>
      <section id="color">
        <h2>Sélectionnez la couleur</h2>
        {colors.map((el) => {
          return (
            <ListItem
              key={el.id}
              itemId={el.id}
              name={el.name}
              price={el.price}
              color={el.ref}
              onItemClick={handleColorClick}
              isActive={activeColorID === el.id}
            />
          );
        })}
      </section>
      <div className="price flexContainer">
        <p>{cout} €</p>
        <button style={{backgroundColor:colorActive}}>Buy it !</button>
      </div>
    </>
  );
}

export default App;
