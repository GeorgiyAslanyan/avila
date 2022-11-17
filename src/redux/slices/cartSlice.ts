import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import { RootState } from "../store";

type Item = {
  id: number;
  img: string;
  title: string;
  price: number;
  category: string;
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
        id: action.payload.id,
        img: action.payload.img,
        title: action.payload.title,
        price: action.payload.price,
        category: action.payload.category
      });
      state.count += 1
    },
    removeItem(state, action: PayloadAction<number>) {
        state.items = state.items.filter(item => item.id !== action.payload)
        state.count -= 1
    }
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
