import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import { itemsApi } from "./api/itemsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import itemsSlice from "./slices/itemsSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    items: itemsSlice,
    [itemsApi.reducerPath]: itemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
