import React, { useState, useEffect} from "react";
import Dices from "./components/dices";
import {nanoid} from "nanoid"
import "./App.css";
import Button from "./components/button";

/*
  * TODO 1.15
    3. style button
  */

const generateDices = (arr) => {
  const dice = arr.map((numbers) => {
    return <Dices key={nanoid()} num={numbers}/>
  })
  return (
    <>
    {dice}
    </>
  )
}


function App() {

  const [num, setNumber] = useState([])

  useEffect(() => {
    let arr = []

    for(let i=0; i < 10; i++) {
      let randomNum = Math.floor((Math.random() * 10) + 1)
      arr.push(randomNum)
    }
    setNumber(arr)
  }, [])

  return (
    <div className="app">
      <div className="block">
        <div className="upper-part">
          <div className="title">
            <h1>Tenzies</h1>
          </div>
          <div className="description">
            <p>
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
          </div>
        </div>
        <div className="dice-container">
          {generateDices(num)}
        </div>
          <Button/> 
      </div>
    </div>
  );
}

export default App;
