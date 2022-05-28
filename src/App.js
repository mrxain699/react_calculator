/* eslint no-eval: 0 */
import { useState } from 'react';
import './App.css';
import Button from './Button';
import ButtonContent from './ButtonContent';
function App() {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    if(e.target.value === "="){
      try{
        setInput(eval(input).toString());
      }
      catch(error){}
    }
    else if(e.target.value === "c"){
      setInput('');
    }
    else{
      setInput((prevState)=>{
        return prevState + e.target.value;
      });
    }
  } 
  return (
    <div className="wrapper">
      <header>
        <h1>React Calculator</h1>
      </header>
      <div className="cal_box">
        <div className="input_screen">
          <span>{input !== '' ? input : 0}</span>
        </div>
        <div className="buttons">
          {
            ButtonContent.map((row, index)=>{
              return <Button  key={index} row={row} index={index} handleInput={handleInput}/>
            })
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
