import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Buying from "./components/Buying";
import Searching from "./components/Searching";
import Listing from "./components/Listing";
import Saved from "./components/Saved";
import ContactForm from "./components/ContactForm";
import PropertyDetails from "./pages/PropertyDetails";
import Search from "./components/Searching";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buying" element={<Buying />} />
        <Route path="/searching" element={<Searching />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Router>
  );
}

export default App;
