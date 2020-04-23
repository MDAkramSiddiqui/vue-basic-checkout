import { API_URL } from "./../../constants";
import axios from "axios";

const state = {
  cartItems: [],
};

const getters = {
  cartItems: (state) => {
    return state.cartItems;
  },
  totalPrice: (state) => {
    // let sum = 0;
    // for (let item of state.cartItems)
    //   sum += Number(item.qty) * Number(item.price);
    // return sum.toFixed(2);
    return state.cartItems
      .reduce((acc, item) => {
        return (acc += Number(item.qty) * Number(item.price));
      }, 0)
      .toFixed(2);
  },
};

const mutations = {
  UPDATE_CART_ITEMS: (state, payload) => {
    state.cartItems = payload;
  },
  ADD_CART_ITEM: (state, payload) => {
    state.cartItems.push(payload);
  },
  REMOVE_CART_ITEM: (state, payload) => {
    const index = state.cartItems.findIndex((el) => el.id === payload.id);
    state.cartItems.splice(index, 1);
  },
  UPDATE_CART_ITEM: (state, payload) => {
    const index = state.cartItems.findIndex((el) => el.id === payload.id);
    state.cartItems[index] = payload;
  },
};

const actions = {
  fetchCarts: async (context) => {
    try {
      const { data } = await axios.get(`${API_URL}/cart`);
      context.commit("UPDATE_CART_ITEMS", data);
    } catch (err) {
      console.log(err.message);
    }
  },
  addToCart: async (context, payload) => {
    try {
      payload.id = Date.now().toString();
      const { data } = await axios.post(`${API_URL}/cart`, payload);
      context.commit("ADD_CART_ITEM", data);
    } catch (err) {
      console.log(err.message);
    }
  },
  removeFromCart: async (context, payload) => {
    try {
      await axios.delete(`${API_URL}/cart/${payload.id}`);
      context.commit("REMOVE_CART_ITEM", payload);
    } catch (err) {
      console.log(err.message);
    }
  },
  updateCartQty: async (context, payload) => {
    try {
      const { data } = await axios.put(
        `${API_URL}/cart/${payload.id}`,
        payload
      );
      context.commit("UPDATE_CART_ITEM", data);
    } catch (err) {
      console.log(err.message);
    }
  },
};

const cartModule = {
  state,
  getters,
  mutations,
  actions,
};

export default cartModule;
