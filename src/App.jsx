import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import OurRecipe from "./components/OurRecipe";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("/Api.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  const wantToCook = (p) => {
    const isExist = carts.find((card) => card.id == p.id);
    if (!isExist) {
      setCarts([...carts, p]);
    } else {
      alert("Already in cart");
    }
  };

  const Preparing = (id) => {
    const newCart = carts.filter((item) => item.id != id);
    setCarts(newCart);
  };

  return (
    <body className="w-11/12 mx-auto font-[lexend]">
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <div className="grid grid-cols-10 gap-5 my-20">
        <div className="col-span-6 grid lg:grid-cols-2 gap-5">
          {cards.map((card) => (
            <Card key={card.id} data={card} wantToCook={wantToCook}></Card>
          ))}
        </div>

        <div className="col-span-4">
          <div className=" min-h-screen border rounded-3xl">
            <h1 className="text-[#282828] text-2xl text-center font-semibold pt-8 pb-5">
              Want to Cook
            </h1>
            <hr className="w-[80%] mx-auto mb-5" />
            <table className="table table-zebra font-[Fira Sans]">
              <thead className="text-base font-medium text-[#878787] ">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody className="bg-[#28282808] text-[#282828B2] text-base font-normal leading-7">
                {carts.map((cart, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{cart.name}</td>
                    <td>{cart.cook_time}</td>
                    <td>{cart.calories}</td>
                    <td>
                      <button
                        onClick={() => Preparing(cart.id)}
                        className="btn bg-[#0BE58A] text-[#150B2B] rounded-full text-base font-medium"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h1 className="text-[#282828] text-2xl text-center font-semibold pt-8 pb-5">
              Currently Cooking
            </h1>
            <hr className="w-[80%] mx-auto mb-5" />
            <table className="table table-zebra font-[Fira Sans]">
              <thead className="text-base font-medium text-[#878787] ">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody className="bg-[#28282808] text-[#282828B2] text-base font-normal leading-7">
                <tr>
                  <th>1</th>
                  <td>Spaghetti Bolognese</td>
                  <td>30 minutes</td>
                  <td>600 calories</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-zebra  text-end my-5">
              <thead>
                <tr className="text-[#282828CC] text-base font-medium leading-7 ">
                  <th>Total Time =</th>
                  <th>Total Calories =</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[#282828CC] text-base font-medium leading-7">
                  <td>45mins</td>
                  <td>1050 Calories</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
