/*eslint-disable*/
import React, { useState, Component } from "react";
import "./Main.css";

function Main() {
  const maxScore = Math.floor(Math.random() * 10) + 1;
  let [arrayCollection, setArrayCollection] = useState([maxScore]);
  let [newNum, setNewNum] = useState(maxScore);

  console.log(maxScore);

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
          <Button onClick={handleClick(e, 'yes')}> YES </Button>
          <Button onClick={handleClick(e, 'no')}> NO </Button>
        </div>
      </div>
    </div>
  );
}

function Button(props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

const handleClick = (event, answer) => {
  if (!arrayCollection.includes(newNum)) {
    if (answer == "no") {
      console.log("correctly said no");
    } else {
      console.log("incorrectly said yes");
    }

    setArrayCollection([...arrayCollection, newNum]);
  } else {
    if (answer == "yes") {
      console.log("correctly said yes");
    } else {
      console.log("incorrectly said no");
    }
  }

  let newRandNum = Math.floor(Math.random() * 10) + 1;
  setNewNum(newRandNum);
};

//   if(answer=='yes'){
//             if(arrayCollection.include(maxScore)){
//                 console.log('Correct yes');
//             }else{
//                 console.log('Wrong yes');
//             }
//         }else{
//             if(answer='no'){
//                 console.log('Correct No');
//             }else{
//                 console.log('Incorrect');
//         }
//     }

// }

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
