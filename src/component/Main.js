/*eslint-disable*/
import React, { useState, Component } from "react";
import "./Main.css";

function Main(props) {
    // Generating random number
  const maxScore = Math.floor(Math.random() * 10) + 1;
  
  let [newNum, setNewNum] = useState(maxScore);
    
  // Empty array to save generated number to check if number was previously generate
  let [arrayCollection, setArrayCollection] = useState([]);

  // console.log(maxScore);
  // console.log(newNum);

  const handleClick = (event, answer) => {
    // if Array does not include new number
    if ( !arrayCollection.includes(newNum) ) {
      
      // when correctly said no
      if (answer == "no") {
        props.setScore(props.score + 1);
        setArrayCollection([...arrayCollection, newNum]);
      } 
      
      // when incorrectly said yes
      else {
        props.setScore(0);
        setArrayCollection([]);
      }
    } else if ( arrayCollection.includes(newNum) ) {

      // when correctly said yes
      if (answer == "yes") {
        props.setScore(props.score + 1);
        setArrayCollection([...arrayCollection, newNum]);
      }
      
      // When incorrectly said no
      else {
        props.setScore(0);
        setArrayCollection([]);
      }
    }

    // Generate new number and set new value for next question
    let newRandNum = Math.floor(Math.random() * 10) + 1;
    setNewNum(newRandNum);
  };

  console.log('If you know how to check developer tool, this is the cheat sheet',arrayCollection);

  return (
    <div className="mainDiv">
      <div className="MainLeftBox">
        <p className="numberSection">
          {NumberInKorean(newNum)}
        </p>
      </div>

      <div className="MainRightBox">
         <p> Have you seen this number yet? </p>
        <div className='buttonClass'>
          <Button onClick={(e) => handleClick(e, "yes")}> YES </Button>
          <Button onClick={(e) => handleClick(e, "no")}> NO </Button>
        </div>
      </div>
    </div>
  );

  function Button(props) {
    return (
      <button className="button" onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
} // finishing line //

function NumberInKorean(newNum) {
  switch (newNum) {
    case 1:
      return "IL";
    case 2:
      return "EE";
    case 3:
      return "SAM";
    case 4:
      return "SA";
    case 5:
      return "O";
    case 6:
      return "YOOK";
    case 7:
      return "CHIL";
    case 8:
      return "PAL";
    case 9:
      return "GOO";
    case 10:
      return "SHIP";
    default:
      return;
  }
}

export default Main;
