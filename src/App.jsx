import React, { useState, useEffect } from "react";
import Dices from "./components/dices";
import { nanoid } from "nanoid";
import "./App.css";
import Button from "./components/button";

/*
  * TODO 1.16
    3. if all selected numbers are same we won the game ⭐
  */

function App() {
  const [num, setNumber] = useState([]);
  const [status, setStatus] = useState("Roll")
  // this section kinda wrong => 🤔
  useEffect(() => {
    let arr = [];

    for (let i = 0; i < 10; i++) {
      let randomNum = Math.floor(Math.random() * 10 + 1);
      arr.push({
        id: nanoid(),
        dice_number: randomNum,
        isSelected: false,
      });
    }
    setNumber(arr);
  }, []);

  const generateDices = (arr) => {
    const dice = arr.map((numbers) => {
      return (
        <Dices
          key={numbers.id}
          num={numbers.dice_number}
          isSelected={numbers.isSelected}
          func={() => dice_selection(numbers)}
        />
      );
    });
    return <>{dice}</>;
  };


  // we are calculating stuffs in dice_selection ... 
  // -> and roll is just doing generating numbers
  const dice_selection = (dice) => {
    const dices = num.map((oldDice) => {
      if (oldDice.id === dice.id) {
        let checkIsSelected = oldDice.isSelected === true ? false : true;
        return { ...oldDice, isSelected: checkIsSelected };
      }
      return oldDice;
    });

    setNumber(dices);
  };

  const diceRoll = (e) => {
    e.preventDefault();

    if(status !== "Reset game") {
      let temp = 0;
      const newDice = num.map((oldDice) => {
        let randomNum = Math.floor(Math.random() * 10 + 1);
        if(oldDice.isSelected != true) {
          return {...oldDice, dice_number: randomNum}
        }
        temp = oldDice.dice_number
        return oldDice
      })  
      setNumber(newDice)
    }
    else {
      const resetDice = num.map((oldDice) => {
        let randomNum = Math.floor(Math.random() * 10 + 1);
        if(oldDice.isSelected == true) {
          return {...oldDice,isSelected: false, dice_number: randomNum}
        }
      })
      setStatus("Roll")
      setNumber(resetDice)
    }

  };

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
        <div className="dice-container">{generateDices(num)}</div>
        <Button roll={diceRoll} description={status} />
      </div>
    </div>
  );
}

export default App;
