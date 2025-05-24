// Cart store using Pinia
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    shippingInfo: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }
  }),

  getters: {
    cartCount: (state) => state.items.length,

    cartItems: (state) => state.items,

    subtotal: (state) => {
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    shipping: (state) => {
      const subtotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      return subtotal > 50 ? 0 : 5.99;
    },

    tax: (state) => {
      const subtotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      return subtotal * 0.08; // 8% tax rate
    },

    total: (state) => {
      const subtotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      const shipping = subtotal > 50 ? 0 : 5.99;
      const tax = subtotal * 0.08;
      return subtotal + shipping + tax;
    }
  },

  actions: {
    addItem(item) {
      // Check if the item already exists in the cart
      const existingItem = this.items.find(
        i => i.product === item.product && i.artwork === item.artwork
      );

      if (existingItem) {
        // If it exists, increment the quantity
        existingItem.quantity += item.quantity || 1;
      } else {
        // Otherwise, add the new item
        this.items.push({
          ...item,
          quantity: item.quantity || 1
        });
      }
    },

    removeItem(index) {
      this.items.splice(index, 1);
    },

    updateItemQuantity(index, quantity) {
      if (quantity > 0) {
        this.items[index].quantity = quantity;
      }
    },

    clearCart() {
      this.items = [];
    },

    setShippingInfo(info) {
      this.shippingInfo = { ...info };
    }
  }
});
