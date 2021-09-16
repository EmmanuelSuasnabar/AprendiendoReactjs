import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {NavBar} from './components/NavBar'
import {ItemListContainer} from './components/ItemListContainer'
import  {CartWidget} from "./components/CartWidget"
import {ItemCount} from './components/ItemCount';
import ItemDetailContainer from './components/container/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NavBar productos={["Anillos","Aros","Cadenas","Pulceras"]}/>
        
        <ItemListContainer Saludo={'hola soy itemListContainer'} />
        <ItemDetailContainer/>
      </header>
      <CartWidget/>
    </div>
  );
}



export default App
