import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== itemId);
    },
    plusItem: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find(item => item.id === itemId);
      if (item) {
        item.amount += 1;
      }
    },
    minusItem: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find(item => item.id === itemId);
      if (item) {
        item.amount -= 1;
      }
    },
    calculateTotals: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach(item => {
        total += item.price * item.amount;
        amount += item.amount;
      });
      state.total = total;
      state.amount = amount;
    }
  },
});

export const { clearCart, removeItem, plusItem, minusItem, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;