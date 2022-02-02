
import './App.css';

import { HeaderScreen } from './screen/HeaderFooterScreen';
import { Header } from "./components/NavHeader";
import { Footer } from './components/footer';
import {Gender} from './screen/genderScreen'



function App() {
  return (
    <div className="App">
      <Header/> 
      <Gender/>
      <Footer/>
    </div>
  );
}

export default App;

{/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Salut <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}