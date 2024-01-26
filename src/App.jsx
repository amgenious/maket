import { Navbar } from "./Components/Navbar"
import { BrowserRouter,  Route,Routes} from 'react-router-dom';
import { CartPage } from "./Pages/CartPage";
import {CheckoutPage} from "./Pages/CheckoutPage"
import { HomePage } from "./Pages/HomePage";
import { ProductsPage } from "./Pages/ProductsPage";
import { Footer } from "./Components/Footer";
import { ShopsPage } from "./Pages/ShopsPage";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/shops"  element={<ShopsPage />} />
        <Route path="/products"  element={<ProductsPage />} />
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
