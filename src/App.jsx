import Form from "./hooks/Form";
import State from "./hooks/State";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import User from './User';
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>   
      </Routes>
      <h1>App</h1>
      <State/>
      <Form/>
      <User name="xyz" age="20"/>
    </>
  );
};

export default App;