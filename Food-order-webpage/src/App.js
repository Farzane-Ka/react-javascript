import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import CartProvider from "./store/CartProvider";
function App() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
  return (
    <CartProvider>
        {showModal && <Cart onCloseModal={handleCloseModal}/>}
      <Header onShowModal={handleShowModal}/>
        <main>
          <Meals/>
        </main>
    </CartProvider>
  );
}

export default App;
