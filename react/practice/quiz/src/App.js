import Question from './components/question'
import Feedback from './components/feedback'
import data from './mocks/data.json'
import './App.css';
import { useState } from 'react';

function App() {

  const [isCorrect, setIsCorrect] = useState()


  const handleClick = e => {
    const id = e.target.className
    console.log(alert(id))
    setIsCorrect(id)
  }

  

  return (
    <div>
      <Question action = {handleClick} data = {data}/>
      <Feedback isCorrect = {isCorrect}/>
    </div>
  );
}

export default App;
