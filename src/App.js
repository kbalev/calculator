import './App.css';
import React, {useState} from 'react';

const App = () => {
  const [firstDigit, setFirstDigit] = useState(``);
  const [secondDigit, setSecondDigit] = useState(``);
  const [step, setStep] = useState(0);
  const [operation, setOperation] = useState(``);

  const calculate = () =>{
    if(operation === `+`) {
      setFirstDigit((parseFloat(firstDigit)+parseFloat(secondDigit)))
      setSecondDigit(``)
      setStep(0)}
    else if (operation === `-`) {
      setFirstDigit((parseFloat(firstDigit)-parseFloat(secondDigit)))
      setSecondDigit(``)
      setStep(0)}
    else if (operation === `*`) {
      setFirstDigit((parseFloat(firstDigit)*parseFloat(secondDigit)))
      setSecondDigit(``)
      setStep(0)}
    else if (operation === `/`) {
      setFirstDigit((parseFloat(firstDigit)/parseFloat(secondDigit)))
      setSecondDigit(``)
      setStep(0)}
    else {
      setFirstDigit(`Something went wrong, try again.`)
      setStep(0)}
  }


  const reset = () =>{
    setFirstDigit(``);
    setSecondDigit(``);
    setStep(0)
    setOperation(``)
  }

  const selectDigit = (int) =>{
    if(step ===0){
      setFirstDigit(`${int}`)
      setStep(1)
    } 
    else if(step === 1){
      setFirstDigit(`${firstDigit}` + `${int}`)
      }
    else {
      setSecondDigit(`${secondDigit}` + `${int}`)
      setStep(3)}
  }

  const selectOperator = (sign) => {
    setOperation(sign);
    setStep(2);
  }

  
  const Digits = (props) => {
    return(
      <button className="digits" onClick={()=>{selectDigit(props.digit)}}>{props.digit}</button>
    )
  }

  const Operators = (props) => {
    return(
      <button className="operatorButton" onClick={()=>{selectOperator(props.sign)}}>{props.sign}</button>
    )  
  }

  return (
    <div className="App">
      <h1>Kamen's Calculator</h1>
      {step >= 3 ? (<h2>{secondDigit}</h2>) :
      (<h2>{firstDigit}</h2>)}
      <div className="clear"><button className="clearButton" onClick={() => reset()}>Clear</button></div>
      <div className="numberButtons">
        <Digits digit={1}/>
        <Digits digit={2}/>
        <Digits digit={3}/>
        <Digits digit={4}/>
        <Digits digit={5}/>
        <Digits digit={6}/>
        <Digits digit={7}/>
        <Digits digit={8}/>
        <Digits digit={9}/>
        <Digits digit={0}/>
        <Digits digit={`.`}/>

      </div>
      <div className="operatorButtonsArray">
        <Operators sign="+"/>
        <Operators sign="-"/>
        <Operators sign="*"/>
        <Operators sign="/"/>
        <button className="operatorButton" onClick={()=>calculate()}>=</button>
      </div>


    </div>
  );
}



export default App;
