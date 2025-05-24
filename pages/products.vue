<template>
  <div>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">Print-on-Demand Products</h1>

      <div v-if="selectedArtwork" class="mb-8 p-6 bg-gray-100 rounded-lg">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="w-full md:w-1/3">
            <div class="bg-cover bg-center h-64 rounded-lg" :style="{ backgroundImage: `url(${selectedArtwork.image})` }"></div>
          </div>
          <div class="w-full md:w-2/3">
            <h2 class="text-2xl font-bold mb-2">Selected Artwork: {{ selectedArtwork.title }}</h2>
            <p class="text-gray-600 mb-4">{{ selectedArtwork.description }}</p>
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
          <button 
            @click="filterType = 'All Products'" 
            :class="[
              'px-4 py-2 rounded-full hover:bg-gray-300',
              filterType === 'All Products' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            ]"
          >
            All Products
          </button>
          <button 
            v-for="type in productTypes" 
            :key="type" 
            @click="filterType = type" 
            :class="[
              'px-4 py-2 rounded-full hover:bg-gray-300',
              filterType === type ? 'bg-blue-600 text-white' : 'bg-gray-200'
            ]"
          >
            {{ type }}
          </button>
        </div>
      </div>

      <div v-if="loading" class="flex justify-center items-center py-12">
        <p class="text-gray-600">Loading products...</p>
      </div>

      <div v-else-if="filteredProducts.length === 0" class="flex justify-center items-center py-12">
        <p class="text-gray-600">No products found for the selected filter.</p>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="product in filteredProducts" :key="product.id" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div class="h-48 bg-cover bg-center" :style="{ backgroundImage: `url(${product.image})` }"></div>
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-2">{{ product.type }}</h3>
            <p class="text-gray-600 mb-4">{{ product.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-blue-600 font-bold">${{ product.basePrice.toFixed(2) }}</span>
              <button 
                @click="addToCart(product.id)" 
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
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductsStore } from '~/stores/products';

const route = useRoute();
const router = useRouter();
const productsStore = useProductsStore();

const products = ref([]);
const filteredProducts = ref([]);
const loading = ref(false);
const selectedArtworkId = ref(null);
const filterType = ref('All Products');
const productTypes = ref(['T-Shirt', 'Poster', 'Mug', 'Phone Case', 'Tote Bag', 'Hoodie', 'Sticker', 'Canvas Print']);

const selectedArtwork = computed(() => {
  return productsStore.selectedArtwork;
});

// Filter products based on selected type
const filterProducts = () => {
  if (filterType.value === 'All Products') {
    filteredProducts.value = products.value;
  } else {
    filteredProducts.value = products.value.filter(product => product.type === filterType.value);
  }
};

onMounted(async () => {
  loading.value = true;

  // Fetch products
  await productsStore.fetchProducts();
  products.value = productsStore.products;

  // Apply initial filtering
  filterProducts();

  // Get the selected artwork from the query parameter
  if (route.query.artwork) {
    selectedArtworkId.value = parseInt(route.query.artwork);
    const artwork = productsStore.getArtworkById(selectedArtworkId.value);
    if (artwork) {
      productsStore.selectArtwork(artwork);
    }
  }

  loading.value = false;
});

// Watch for filter changes
watch(filterType, () => {
  filterProducts();
});

const clearSelection = () => {
  productsStore.clearSelection();
  router.push('/gallery');
};

const addToCart = (productId) => {
  if (!selectedArtwork.value) return;

  const product = productsStore.getProductById(productId);
  if (!product) return;

  // This would normally add the product to the cart in a store
  alert(`Added ${product.type} with ${selectedArtwork.value.title} to cart!`);

  // Navigate to cart
  router.push('/cart');
};
</script>
