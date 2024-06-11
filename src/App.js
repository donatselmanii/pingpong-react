import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PongApp from './components/PongApp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/PingPong" element={<PongApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
