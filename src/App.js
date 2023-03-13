import logo from './logo.svg';
import './App.css';
import AllRouts from './Routs/AllRouts';
import ContextProvider from './Context/ContextProvider';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <AllRouts/>
      </ContextProvider>
    </div>
  );
}

export default App;
