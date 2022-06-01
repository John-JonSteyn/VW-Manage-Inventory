import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar.js';
import { Table  } from './components/Table.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <hr/>
      <h1>Roodepoort</h1>
      <h3>Manage Inventory</h3>
      <Table/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
