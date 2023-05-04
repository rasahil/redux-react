import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import { Routes,Route } from "react-router-dom";
// import Counter from './features/counter/Counter';
// import Coin from './features/coin/Coin';
// import Theme from './features/theme/Theme';
function App() {
  return (
    
    <div className="Container ">
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Shop/>}/>
        <Route  path="/shoping" element={<Card/>}/>
      </Routes>
        {/* <Counter />
      <Coin />
      <Theme /> */}

     

      </div>

      
  
  );
}

export default App;
