<template>
  <div>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">Checkout</h1>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Left Column - Forms -->
        <div class="w-full lg:w-2/3">
          <!-- Shipping Information -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-2xl font-bold mb-6">Shipping Information</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="firstName" class="block text-gray-700 mb-2">First Name</label>
                <input 
                  id="firstName" 
                  v-model="shippingInfo.firstName" 
                  type="text" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
              </div>

              <div>
                <label for="lastName" class="block text-gray-700 mb-2">Last Name</label>
                <input 
                  id="lastName" 
                  v-model="shippingInfo.lastName" 
                  type="text" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
              </div>
            </div>

            <div class="mb-6">
              <label for="email" class="block text-gray-700 mb-2">Email Address</label>
              <input 
                id="email" 
                v-model="shippingInfo.email" 
                type="email" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
            </div>

            <div class="mb-6">
              <label for="address" class="block text-gray-700 mb-2">Street Address</label>
              <input 
                id="address" 
                v-model="shippingInfo.address" 
                type="text" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label for="city" class="block text-gray-700 mb-2">City</label>
                <input 
                  id="city" 
                  v-model="shippingInfo.city" 
                  type="text" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
              </div>

              <div>
                <label for="state" class="block text-gray-700 mb-2">State/Province</label>
                <input 
                  id="state" 
                  v-model="shippingInfo.state" 
                  type="text" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
              </div>

              <div>
                <label for="zipCode" class="block text-gray-700 mb-2">ZIP/Postal Code</label>
                <input 
                  id="zipCode" 
                  v-model="shippingInfo.zipCode" 
                  type="text" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
              </div>
            </div>

            <div>
              <label for="country" class="block text-gray-700 mb-2">Country</label>
              <select 
                id="country" 
                v-model="shippingInfo.country" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
                <!-- More countries would be added here -->
              </select>
            </div>
          </div>

          <!-- Payment Information -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold mb-6">Payment Information</h2>

            <div class="mb-6">
              <label class="block text-gray-700 mb-2">Card Information</label>
              <div class="border border-gray-300 rounded-lg p-4 bg-gray-50">
                <!-- This would be replaced with Stripe Elements in a real implementation -->
                <p class="text-gray-500">Stripe payment form would be integrated here</p>
              </div>
            </div>

            <div class="mb-6">
              <label for="nameOnCard" class="block text-gray-700 mb-2">Name on Card</label>
              <input 
                id="nameOnCard" 
                v-model="paymentInfo.nameOnCard" 
                type="text" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
            </div>

            <div class="mb-6">
              <label for="billingAddress" class="block text-gray-700 mb-2">Billing Address</label>
              <div class="flex items-center mb-4">
                <input 
                  id="sameAsShipping" 
                  v-model="sameAsShipping" 
                  type="checkbox" 
                  class="mr-2"
                >
                <label for="sameAsShipping">Same as shipping address</label>
              </div>

              <div v-if="!sameAsShipping">
                <!-- Billing address fields would go here, similar to shipping address -->
                <input 
                  id="billingAddress" 
                  v-model="paymentInfo.billingAddress" 
                  type="text" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter billing address"
                  required
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Order Summary -->
        <div class="w-full lg:w-1/3">
          <div class="bg-white rounded-lg shadow-md p-6 sticky top-8">
            <h2 class="text-2xl font-bold mb-6">Order Summary</h2>

            <div class="mb-6">
              <div v-for="(item, index) in cartItems" :key="index" class="flex justify-between py-2 border-b border-gray-200">
                <div>
                  <p class="font-semibold">{{ item.product }}</p>
                  <p class="text-sm text-gray-600">{{ item.artwork }}</p>
                  <p class="text-sm text-gray-600">Qty: {{ item.quantity }}</p>
                </div>
                <p>${{ (item.price * item.quantity).toFixed(2) }}</p>
              </div>
            </div>

            <div class="mb-6">
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

            <button 
              @click="placeOrder" 
              class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              :disabled="!formIsValid"
            >
              Place Order
            </button>

            <p class="text-sm text-gray-500 mt-4">
              By placing your order, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// This would normally come from a store
const cartItems = ref([
  {
    product: 'T-Shirt',
    artwork: 'Artwork 1',
    price: 25.00,
    quantity: 1
  },
  {
    product: 'Poster',
    artwork: 'Artwork 3',
    price: 15.00,
    quantity: 2
  }
]);

const shippingInfo = ref({
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  country: ''
});

const paymentInfo = ref({
  nameOnCard: '',
  billingAddress: ''
});

const sameAsShipping = ref(true);

const subtotal = computed(() => {
  return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0);
});

const shipping = computed(() => {
  return subtotal.value > 50 ? 0 : 5.99;
});

const tax = computed(() => {
  return subtotal.value * 0.08; // 8% tax rate
});

const total = computed(() => {
  return subtotal.value + shipping.value + tax.value;
});

const formIsValid = computed(() => {
  // Basic validation
  const { firstName, lastName, email, address, city, state, zipCode, country } = shippingInfo.value;
  const { nameOnCard } = paymentInfo.value;

  return firstName && lastName && email && address && city && state && zipCode && country && nameOnCard;
});

const placeOrder = async () => {
  if (!formIsValid.value) return;

  try {
    // This would normally call the Stripe API to process payment
    // and then call the Printify API to create the order

    // For demo purposes, we'll just show an alert and redirect
    alert('Order placed successfully! Thank you for your purchase.');
    router.push('/');
  } catch (error) {
    console.error('Error placing order:', error);
    alert('There was an error processing your order. Please try again.');
  }
};
</script>
