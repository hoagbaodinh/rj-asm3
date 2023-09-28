const { createSlice, configureStore } = require("@reduxjs/toolkit");

const initialState = {
  category: "all",
};

const productListSlice = createSlice({
  name: "productList",
  initialState: initialState,
  reducers: {
    changeCate(state, action) {
      state.category = action.payload;
    },
  },
});
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      !newItem.quantity
        ? state.totalQuantity++
        : (state.totalQuantity += +newItem.quantity);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          price: +newItem.price,
          quantity: +newItem.quantity,
          totalPrice: +newItem.price * +newItem.quantity,
          title: newItem.title,
        });
      } else {
        if (!newItem.quantity) {
          existingItem.quantity++;
          existingItem.totalPrice += +newItem.price;
        } else {
          existingItem.quantity += newItem.quantity;
          existingItem.totalPrice =
            +existingItem.totalPrice + +newItem.price * +newItem.quantity;
        }
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    deleteItemFormCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity -= existingItem.quantity;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

const store = configureStore({
  reducer: {
    productList: productListSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
export const cartActions = cartSlice.actions;
export const productListActions = productListSlice.actions;
