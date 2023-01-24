import logo from './logo.svg';
import './App.css';
import { MainComponent } from './Components/MainComponent';
import { Footer } from './Components/Footer';
import HackerNews from './Components/HackerNews';
import HackerNewsV2 from './Components/HackerNewsV2';
import HackerNewsV2Host from './Components/HackerNewsV2';

function App() {
  return (
    <div className="App">
        <HackerNewsV2Host/>             
    </div>
  );
}

export default App;
