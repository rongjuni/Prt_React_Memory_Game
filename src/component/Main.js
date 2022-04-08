/*eslint-disable*/

import React, { useState } from 'react';
import './Main.css'

function Main(){
        
    const maxScore = React.useMemo(() => {
        return Math.floor(Math.random() * 10 ) + 1
     }, []);

     let [arrayCollection, setArrayCollection] = useState(0);
     let [newNum, setNewNum] = useState(0);    
     
     
     React.useEffect(() => {
        setArrayCollection(maxScore)
        setNewNum(maxScore)
     }, [maxScore])
    

    return(
        <div className='mainDiv'>
            <div className='MainLeftBox'> 
                <p className='numberSection'>
                    {NumberInKorean(newNum)}
                </p>
                <div className='colorCard'>
                </div>
            </div>
            <div className='MainRightBox'>
                <p style={{
                    content: 'center'
                }}>Have you seen this number yet?</p>
                <div>
                    <SeenYes newNum={newNum} setNewNum={setNewNum} arrayCollection={arrayCollection} /> 
                   
                    <SeenNo newNum={newNum} setNewNum={setNewNum} arrayCollection={arrayCollection}/>
                </div>
            </div>
        </div>
    )
}

function SeenYes(props){
    return(
        <button className='button' onClick={ ()=>{

            let newRandNum = Math.floor(Math.random() * 10 ) + 1;
            // {
            //     props.arrayCollection.find( (ele) => {
            //         console.log(ele = newRandNum)
            //     })
            //     ?alert('done')
            //     :null
            // }

            props.arrayCollection.push(newRandNum);
            // console.log(props.arrayCollection);
            props.setNewNum(newRandNum);
        }}>YES</button>
    )
  
}

function SeenNo(props){
    return(
    <button className='button' onClick={ ()=>{
        let newRandNum = Math.floor(Math.random() * 10 ) + 1;

        // {
        //     props.arrayCollection.find( (ele) => {
        //         console.log(ele = newRandNum)
        //     })
        //     ?alert('done')
        //     :null
        // }

        props.arrayCollection.push(newRandNum);
        // console.log(props.arrayCollection);
        props.setNewNum(newRandNum);
    }}>NO</button>
)
}



function NumberInKorean(newNum){
    switch(newNum){
        case 1:
            return 'IL';
        case 2:
            return 'EE';
        case 3:
            return 'SAM';
        case 4:
            return 'SA';
        case 5:
            return 'O';
        case 6:
            return 'YOOK';
        case 7:
            return 'CHIL';
        case 8:
            return 'PAL';
        case 9:
            return 'GOO';
        case 10:
            return 'SHIP';
        default:
            return 
    }
}

export default Main