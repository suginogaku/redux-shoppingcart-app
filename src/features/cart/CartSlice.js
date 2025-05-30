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
        state.amount += 1;
      }
    },
    minusItem: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find(item => item.id === itemId);
      if (item) {
        item.amount -= 1;
      }
    }
  },
});

export const { clearCart, removeItem, plusItem, minusItem } = cartSlice.actions;
export default cartSlice.reducer;