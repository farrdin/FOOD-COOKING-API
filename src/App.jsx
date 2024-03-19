import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import OurRecipe from "./components/OurRecipe";
import Card from "./components/Card";
import Selected from "./components/Selected";
import { useState, useEffect } from "react";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/Api.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);
  return (
    <body className="w-11/12 mx-auto font-[lexend]">
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <div className="grid grid-cols-10 gap-5 my-20">
        <div className="col-span-6 grid lg:grid-cols-2 gap-5">
          {cards.map((card) => (
            <Card key={card.id} data={card}></Card>
          ))}
        </div>
        <div className="col-span-4">
          <Selected></Selected>
        </div>
      </div>
    </body>
  );
}

export default App;
