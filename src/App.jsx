import  {BodyComp}  from "./Components/BodyComp"
import { Navbar } from "./Components/Navbar"
import { BrowserRouter,  Route,Routes} from 'react-router-dom';
import { CartPage } from "./Pages/CartPage";
import {CheckoutPage} from "./Pages/CheckoutPage"

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
        <Route path="/"  element={<BodyComp />} />
        <Route path="/cart"  element={<CartPage />} />
        <Route path="/checkout"  element={<CheckoutPage />} />
        </Routes>
        
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
