import logo from './logo.svg';
import './styles.css';
import Navbar from './component/Navbar';
import Hero from './pages/Hero';
import About from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './component/Footer';
import Abouts from './pages/About';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
     <Navbar/>
<Hero/>
<Abouts/>
<Skills/>
<Projects/>
<Contact/>
<Footer/>
    </div>
  );
}

export default App;
