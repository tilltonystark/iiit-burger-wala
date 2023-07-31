import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Make sure to include 'Route' in the import

import "./styles/app.scss";
import "./styles/headers.scss";
import "./styles/body.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/menuCard.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";

import Header from './components/layout/Header';
import Body from './components/home/Body';
import Footer from './components/layout/Footer';
import Contact from "./components/contact/Contact";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
