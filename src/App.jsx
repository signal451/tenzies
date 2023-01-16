import React, { useState, useEffect } from "react";
import Dices from "./components/dices";
import { nanoid } from "nanoid";
import "./App.css";
import Button from "./components/button";

/*
  * TODO 1.16
    1. roll to generate new random numbers
    2. click to select numbers -> also unselect numbers
    3. selected numbers won't generate when we roll the numbers
    4. if all selected numbers are same we won the game ⭐
  */

function App() {
  const [num, setNumber] = useState([]);

  // this section kinda wront
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

  const dice_selection = (dices) => {
    const newDice = num.map((oldDice) => {
      if (oldDice.id === dices.id) {
        let checkIsSelected = oldDice.isSelected === true ? false : true;
        return { ...oldDice, isSelected: checkIsSelected };
      }
      return oldDice;
    });
    setNumber(newDice);
  };

  const diceRoll = (e) => {
    e.preventDefault();
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
        <Button roll={diceRoll} />
      </div>
    </div>
  );
}

export default App;
