import './App.css';
import NavBar from './components/navBar';
import data from  './mocks/data.json'



function App() {
  return (
    <div >
      <NavBar data = {data}/>
    </div>
  );
}

export default App;
