import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/Banner/Banner";
import OurRecipe from "./components/OurRecipe/OurRecipe";
import DynamicData from "./components/DynamicData/DynamicData";

function App() {
  return (
    <body className="w-11/12 mx-auto font-[lexend]">
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <DynamicData></DynamicData>
    </body>
  );
}

export default App;
