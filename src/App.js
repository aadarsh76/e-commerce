import logo from './logo.svg';
import './App.css';
import HomePage from './customers/components/Pages/HomePage/HomePage';
import Navigation from './customers/components/navbar/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
