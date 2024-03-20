import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import OurRecipe from "./components/OurRecipe";
import Card from "./components/Card";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function App() {
  const [cards, setCards] = useState([]);
  const [carts, setCarts] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [addremove, setAddRemove] = useState(clickCount);
  const [preparedItems, setPreparedItems] = useState([]);
  const [totalCookTime, setTotalCookTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  useEffect(() => {
    fetch("/Api.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  const wantToCook = (p) => {
    if (clickCount >= 6) {
      toast("You can't add more than 6 items to Want to Cook");
      return;
    }
    const isExist = carts.find((card) => card.id === p.id);
    if (!isExist) {
      setClickCount((prevCount) => prevCount + 1);
      setCarts([...carts, p]);
    } else {
      toast("Already Added");
    }
  };

  const Preparing = (id) => {
    if (addremove >= 6) {
      toast("You can't prepare more than 6 items");
      return;
    }
    const itemToPrepare = carts.find((item) => item.id === id);
    const newCart = carts.filter((item) => item.id !== id);
    setCarts(newCart);
    setPreparedItems([...preparedItems, itemToPrepare]);
    setAddRemove((prevCount) => prevCount + 1);
    setClickCount((prevCount) => Math.max(0, prevCount - 1));

    const newtotalCookTime =
      preparedItems.reduce(
        (total, item) => total + parseInt(item.cook_time),
        0
      ) + parseInt(itemToPrepare.cook_time);

    const newTotalCalories =
      preparedItems.reduce((total, item) => total + item.calories, 0) +
      itemToPrepare.calories;

    setTotalCookTime(newtotalCookTime);
    setTotalCalories(newTotalCalories);
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
              Want to Cook ({clickCount})
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
                  <tr key={index}>
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
              Currently Cooking ({addremove})
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
                {preparedItems.map((item, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.cook_time}</td>
                    <td>{item.calories}</td>
                  </tr>
                ))}
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
                  <td>{totalCookTime} mins</td>
                  <td>{totalCalories} Calories</td>
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
