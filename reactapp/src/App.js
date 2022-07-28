import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Products from "./pages/Products"
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import "./App.css";
import SearchBar from './components/SearchBar';

// Links for pages

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />}  />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  )
}

export default App