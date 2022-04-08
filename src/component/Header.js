import './Header.css';
import React from 'react';


function Header(){
    return(
        <div className="header">
            <h1>React: Memory Game Project</h1>
            <h2 style={{
                marginBottom: 0,
            }}>Objective: Answer the questions to test your memory</h2>
            <h2 style={{
                marginTop: 0,
            }}>highest score is 10!</h2>

            <div className="score_board">
                <span className='leftBox'> SCORE: ?? </span>
                <span className='rightBox'> BEST SCORE: ?? </span>
            </div>
        </div>
    )
}

export default Header;