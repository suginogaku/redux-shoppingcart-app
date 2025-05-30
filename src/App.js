import { useEffect } from 'react';
import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal';

function App() {
  // cartのstateが変化するたびにcalculateTotalsをdispatchするuseEffect
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart]);

  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
