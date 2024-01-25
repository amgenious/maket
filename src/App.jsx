import { Navbar } from "./Components/Navbar"
import { BrowserRouter,  Route,Routes} from 'react-router-dom';
import { CartPage } from "./Pages/CartPage";
import {CheckoutPage} from "./Pages/CheckoutPage"
import { HomePage } from "./Pages/HomePage";
import { ClothesPage } from "./Pages/ClothesPage";
import ShoesPage from "./Pages/ShoesPage";
import { ElectronicsPage } from "./Pages/ElectronicsPage";
import { Footer } from "./Components/Footer";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/clothes"  element={<ClothesPage />} />
        <Route path="/shoes"  element={<ShoesPage />} />
        <Route path="/electronics"  element={<ElectronicsPage />} />
        <Route path="/cart"  element={<CartPage />} />
        <Route path="/checkout"  element={<CheckoutPage />} />
        </Routes>
        
      </div>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
