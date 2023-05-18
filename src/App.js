import logo from './logo.svg';
import './App.css';
import Greet from "./Components/Revision1-20/Greet"
function App() {
  const name = "mohamed Ramadan";
  return (
    <div className="App">
      <Greet name={name } />

    
    </div>
  );
}

export default App;
