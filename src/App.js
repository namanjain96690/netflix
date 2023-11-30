import './App.css';
import "./index.css";
import Card from "./card";
import Sdata from "./data";
function ncard(val){
    return(
      <>
      <Card 
        key={val.key}
        imgsrc={val.imgsrc}
        cardcat={val.cardcat}
        cardtit={val.cardtit}
        cardhref={val.cardhref}
      />
      </>
    )
}
function App() {
  return (
    <>
    <h1 className="headstyle">Here is a list of ypur fav series</h1>
   <div className="main">
   {Sdata.map(ncard)}
   </div>
   </>
  );
}
export default App;
