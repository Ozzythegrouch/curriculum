import { useState } from 'react';
import './App.css';
import Card from './components/card'


function App() {
  const [selectedCard, setSelectedCard] = useState()
  const handleClick = (e) => {
    const card = e.target.dataset.type
    setSelectedCard(card)
    
  } 
  return (
    <div className="containerCards">
      <Card selectedCard = {selectedCard} card = '1' action = {handleClick}/>      
      <Card selectedCard = {selectedCard} card = '2' action = {handleClick}/>
      <Card selectedCard = {selectedCard} card = '3' action = {handleClick}/>
      <Card selectedCard = {selectedCard} card = '4' action = {handleClick}/>      
      <Card selectedCard = {selectedCard} card = '5' action = {handleClick}/>
      <Card selectedCard = {selectedCard} card = '6' action = {handleClick}/>
      <Card selectedCard = {selectedCard} card = '7' action = {handleClick}/>      
      <Card selectedCard = {selectedCard} card = '8' action = {handleClick}/>
      <Card selectedCard = {selectedCard} card = '9' action = {handleClick}/>
    </div>
  );
}

export default App;