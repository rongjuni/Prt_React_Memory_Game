/*eslint-disable*/
import React, { useState, Component } from "react";
import "./Main.css";

function Main(props) {
  const maxScore = Math.floor(Math.random() * 10) + 1;
  let [newNum, setNewNum] = useState(maxScore);
  let [arrayCollection, setArrayCollection] = useState([]);

  const handleClick = (event, answer) => {
    if (!arrayCollection.includes(newNum)) {
      if (answer == "no") {
        props.setScore(props.score + 1);
        console.log("correctly said no");
        console.log(arrayCollection);
      } else {
        props.setScore(0);
        console.log("incorrectly said yes");
        console.log(arrayCollection);
      }
      setArrayCollection([...arrayCollection, newNum]);
    } else {
      if (answer == "yes") {
        props.setScore(props.score + 1);
        console.log("correctly said yes");
        console.log(arrayCollection);
      } else {
        props.setScore(0);
        console.log("incorrectly said no");
        console.log(arrayCollection);
      }
    }

    let newRandNum = Math.floor(Math.random() * 10) + 1;
    setNewNum(newRandNum);
  };

  console.log(arrayCollection);

  return (
    <div className="mainDiv">
      <div className="MainLeftBox">
        <p className="numberSection">{NumberInKorean(newNum)}</p>
        <div className="colorCard"></div>
      </div>

      <div className="MainRightBox">
        <p
          style={{
            content: "center",
          }}
        >
          Have you seen this number yet?
        </p>
        <div>
          <Button onClick={(e) => handleClick(e, "yes")}> YES </Button>
          <Button onClick={(e) => handleClick(e, "no")}> NO </Button>
        </div>
        <div style={ {marginTop:20, fontSize:20} }>
            {props.score}
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
