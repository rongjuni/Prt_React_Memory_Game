import './App.css';
import React, {useState} from "react";
import Header from './component/Header'
import Main from './component/Main'


function App() {
  let [score, setScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  
    return (
      <div>
        <Header score={score} bestScore={bestScore} /> 
        <Main score={score} setScore={setScore}/>

      {
       score > bestScore
       ?setBestScore(score)
       :null
      }

      </div>
      
    );
}

export default App;
 