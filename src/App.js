import './App.css';
import ErrorBoundery from './Components/Revision30-43/ErrorBoundery';
import Heros from './Components/Revision30-43/Hero';

function App() {

  return (
    <div className="App">
      <ErrorBoundery>
        <Heros heroName={"joker"} />
      </ErrorBoundery>


      <ErrorBoundery>
        <Heros heroName={"Dragon"} />
      </ErrorBoundery>

      <ErrorBoundery>
        <Heros heroName={"Hourse"}/>
      </ErrorBoundery>

    </div>
  );
}

export default App;
