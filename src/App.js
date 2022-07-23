import { Routes, Route, HashRouter } from "react-router-dom";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Price from "./pages/Price";


function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/price" element={<Price />} />
          <Route path='/facebook' element={() => { 
              window.location.href = 'https://www.facebook.com/Taxi-Nova-Legnica-112532474850139'; 
              return null;
          }}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
