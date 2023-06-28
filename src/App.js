import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About></About>
      <Footer></Footer>
    </div>

  );
}

export default App;
