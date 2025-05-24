<template>
  <div>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">Print-on-Demand Products</h1>

      <div v-if="selectedArtwork" class="mb-8 p-6 bg-gray-100 rounded-lg">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="w-full md:w-1/3">
            <div class="bg-gray-200 h-64 rounded-lg"></div>
          </div>
          <div class="w-full md:w-2/3">
            <h2 class="text-2xl font-bold mb-2">Selected Artwork: {{ selectedArtwork }}</h2>
            <p class="text-gray-600 mb-4">Choose a product to print this artwork on.</p>
            <button @click="clearSelection" class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Change Artwork
            </button>
          </div>
        </div>
      </div>

      <div v-else class="mb-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p class="text-yellow-800">
          No artwork selected. Please <NuxtLink to="/gallery" class="text-blue-600 underline">visit the gallery</NuxtLink> to select an artwork first.
        </p>
      </div>

      <div class="mb-8">
        <div class="flex flex-wrap gap-4">
          <button class="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">All Products</button>
          <button class="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">T-Shirts</button>
          <button class="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">Posters</button>
          <button class="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">Mugs</button>
          <button class="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">Phone Cases</button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- This would normally be a v-for loop over product data -->
        <div v-for="i in 8" :key="i" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div class="h-48 bg-gray-200"></div>
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-2">{{ productTypes[i % productTypes.length] }}</h3>
            <p class="text-gray-600 mb-4">High-quality print</p>
            <div class="flex justify-between items-center">
              <span class="text-blue-600 font-bold">${{ 15 + i * 5 }}.00</span>
              <button 
                @click="addToCart(i)" 
                class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                :disabled="!selectedArtwork"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const selectedArtwork = ref(null);
const productTypes = ['T-Shirt', 'Poster', 'Mug', 'Phone Case', 'Tote Bag', 'Hoodie', 'Sticker', 'Canvas Print'];

onMounted(() => {
  // Get the selected artwork from the query parameter
  if (route.query.artwork) {
    selectedArtwork.value = `Artwork ${route.query.artwork}`;
  }
});

const clearSelection = () => {
  selectedArtwork.value = null;
  router.push('/gallery');
};

const addToCart = (productId) => {
  if (!selectedArtwork.value) return;

  // This would normally add the product to the cart in a store
  alert(`Added ${productTypes[productId % productTypes.length]} with ${selectedArtwork.value} to cart!`);

  // Navigate to cart
  router.push('/cart');
};
</script>
