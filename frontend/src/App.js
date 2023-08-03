import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Make sure to include 'Route' in the import

import "./styles/app.scss";
import "./styles/headers.scss";
import "./styles/body.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/menuCard.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmorder.scss";
import "./styles/login.scss";
import "./styles/profile.scss";

import Header from './components/layout/Header';
import Body from './components/home/Body';
import Footer from './components/layout/Footer';
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart"
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess.jsx";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <Router>
      <Header isAuthenticated={true}/>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
