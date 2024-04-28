import { useState, useEffect } from "react";
import ChickImage from "./chick.png";

export default function App() {
  //Stretch: Put in code for LOCAL STORAGE here
  const [chicks, setChicks] = useState(0);
  const [cps, setCps] = useState(1); // CPS = Chicks Per Second

  //--------------UseEffect function------------
  useEffect(() => {
    //Stretch: do some maths here for the 1000/cps
    //a timer to be created when the page loads to increase chicks by cps every second
    console.log("effect has been called");
    const myInterval = setInterval(() => {
      addChick();
    }, 1000 / cps);

    //this cleans up the timer when I rerun useEffect so we don't have multiple timers
    return () => {
      clearInterval(myInterval);
    };
  }, [cps]);

  function addChick() {
    // because this runs in a timer, we need to be more explicit about the previous value of the state variable
    setChicks((currentChicks) => {
      //Stretch: Put in code for LOCAL STORAGE here
      return currentChicks + 1;
    });
  }

  function buyUpgrade() {
    setCps(cps + 1);
  }

  return (
    <div>
      <h1>Click for a chick</h1>
      <img src={ChickImage} alt="kawaii style cartoon chick in egg shell" />
      <button onClick={addChick}>I am one cute chick</button>
      <button onClick={buyUpgrade}>Buy upgrade</button>
      <p>I have {chicks} chicks </p>
      <p>I get {cps} chicks per second</p>
    </div>
  );
}
