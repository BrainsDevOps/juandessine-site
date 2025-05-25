<template>
  <div>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">Shopping Cart</h1>

      <div v-if="cartItems.length > 0">
        <div class="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <table class="w-full">
            <thead class="bg-gray-100">
              <tr>
                <th class="py-4 px-6 text-left">Product</th>
                <th class="py-4 px-6 text-left">Artwork</th>
                <th class="py-4 px-6 text-center">Price</th>
                <th class="py-4 px-6 text-center">Quantity</th>
                <th class="py-4 px-6 text-center">Total</th>
                <th class="py-4 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cartItems" :key="index" class="border-t border-gray-200">
                <td class="py-4 px-6">
                  <div class="flex items-center">
                    <div class="w-16 h-16 bg-gray-200 rounded mr-4"></div>
                    <span>{{ item.product }}</span>
                  </div>
                </td>
                <td class="py-4 px-6">{{ item.artwork }}</td>
                <td class="py-4 px-6 text-center">${{ item.price.toFixed(2) }}</td>
                <td class="py-4 px-6 text-center">
                  <div class="flex items-center justify-center">
                    <button 
                      @click="decreaseQuantity(index)" 
                      class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span class="mx-2">{{ item.quantity }}</span>
                    <button 
                      @click="increaseQuantity(index)" 
                      class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td class="py-4 px-6 text-center">${{ (item.price * item.quantity).toFixed(2) }}</td>
                <td class="py-4 px-6 text-center">
                  <button 
                    @click="removeItem(index)" 
                    class="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div class="mb-4 md:mb-0">
            <NuxtLink :to="localePath('/products')" class="text-blue-600 hover:text-blue-800">
              ← Continue Shopping
            </NuxtLink>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg">
            <div class="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>${{ shipping.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Tax:</span>
              <span>${{ tax.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between font-bold text-lg border-t border-gray-300 pt-2 mt-2">
              <span>Total:</span>
              <span>${{ total.toFixed(2) }}</span>
            </div>
          </div>
        </div>

        <div class="text-right">
          <button 
            @click="proceedToCheckout" 
            class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <div v-else class="bg-gray-100 p-8 rounded-lg text-center">
        <p class="text-xl mb-4">Your cart is empty</p>
        <NuxtLink :to="localePath('/gallery')" class="text-blue-600 hover:text-blue-800">
          Browse our gallery to add items
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '~/stores/cart';

const router = useRouter();
const cartStore = useCartStore();
const localePath = useLocalePath()

// Get cart items from the store
const cartItems = computed(() => cartStore.cartItems);
const subtotal = computed(() => cartStore.subtotal);
const shipping = computed(() => cartStore.shipping);
const tax = computed(() => cartStore.tax);
const total = computed(() => cartStore.total);

const increaseQuantity = (index) => {
  cartStore.updateItemQuantity(index, cartItems.value[index].quantity + 1);
};

const decreaseQuantity = (index) => {
  if (cartItems.value[index].quantity > 1) {
    cartStore.updateItemQuantity(index, cartItems.value[index].quantity - 1);
  }
};

const removeItem = (index) => {
  cartStore.removeItem(index);
};

const proceedToCheckout = () => {
  router.push('/checkout');
};
</script>
