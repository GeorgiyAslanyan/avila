import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import { RootState } from "../store";

type Item = {
  cartId: number
  id: number;
  img: string;
  title: string;
  price: number;
  size: number;
  count: number
};

interface CartState {
  items: Item[];
  count: number
}

const initialState: CartState = {
  items: [],
  count: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      state.items.push({
        cartId: action.payload.cartId,
        id: action.payload.id,
        img: action.payload.img,
        title: action.payload.title,
        price: action.payload.price,
        size: action.payload.size,
        count: action.payload.count
      });
      state.count += 1
    },
    setSize(state, action: PayloadAction<{id: number, size: number}>) {
      state.items.filter(item => item.cartId === action.payload.id)[0].size = action.payload.size
    },
    setPrice(state, action: PayloadAction<{id: number, price: number}>) {
      state.items.filter(item => item.cartId === action.payload.id)[0].price = action.payload.price
    },
    setCount(state, action: PayloadAction<{id: number, count: number}>) {
      state.items.filter(item => item.cartId === action.payload.id)[0].count = action.payload.count
    },
    removeItem(state, action: PayloadAction<number>) {
        state.items = state.items.filter(item => item.cartId !== action.payload)
        state.count -= 1
    }
  },
});

export const { addItem, removeItem, setSize, setCount, setPrice } = cartSlice.actions;

export default cartSlice.reducer;
