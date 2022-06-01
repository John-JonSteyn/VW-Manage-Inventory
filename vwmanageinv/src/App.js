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
      <h3 id='locationName'>Roodepoort</h3>
      <h1 id='pageName'>Manage Inventory</h1>
      <Table/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
