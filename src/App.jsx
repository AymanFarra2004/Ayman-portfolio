import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <head><title>My Portfolio</title></head>
      <Header />
      <Home />
      <About />
      <Projects />
      {/* <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes> */}
    </div>
  );
}

export default App;
