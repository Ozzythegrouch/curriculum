import Detail from './components/detail'
import List from './components/list'
import data from './mocks/data.json'
import { useState } from 'react';
import './App.css';

function App() {
  const [selectedName, setSelectedName] = useState()

  const handleClick = e => {
    const id = e.target.id
    
    setSelectedName(id)
  }

  return (
    <div>
      <List action={handleClick} data = {data} />
      <Detail selectedName= {selectedName} />
    </div>
  );
}

export default App;
