import './App.css';
import ComponentC from './Components/Revision30-43/ComponentC';
import ComponentF from './Components/Revision30-43/ComponentF';
import { UserProvider } from './Components/Revision30-43/userContext';

function App() {

  return (
    <div className="App">
      <UserProvider value="MohamedRamadan">
          <ComponentC/>
      </UserProvider>
    
    </div>
  );
}

export default App;
