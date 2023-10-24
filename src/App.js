import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home";
import Footer from './components/Footer';
import './App.css';
import Category from "./components/categories/Category";


const App = () => {
  return (
   <div className='glovo-app'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:id" element={<Category />} />
      </Routes>
      <Footer />
   </div>
  );
}

export default App;
