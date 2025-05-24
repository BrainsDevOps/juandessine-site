<template>
  <div>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">Art Gallery</h1>

      <div class="mb-8">
        <div class="flex flex-wrap gap-4">
          <button 
            @click="filterCategory = 'All'" 
            :class="[
              'px-4 py-2 rounded-full hover:bg-gray-300',
              filterCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            ]"
          >
            All
          </button>
          <button 
            v-for="category in categories" 
            :key="category" 
            @click="filterCategory = category" 
            :class="[
              'px-4 py-2 rounded-full hover:bg-gray-300',
              filterCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div v-if="loading" class="flex justify-center items-center py-12">
        <p class="text-gray-600">Loading artwork...</p>
      </div>

      <div v-else-if="artwork.length === 0" class="flex justify-center items-center py-12">
        <p class="text-gray-600">No artwork found for the selected category.</p>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="item in artwork" :key="item.id" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div class="h-64 bg-cover bg-center" :style="{ backgroundImage: `url(${item.image})` }"></div>
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 mb-4">{{ item.category }}</p>
            <div class="flex justify-between items-center">
              <span class="text-blue-600 font-bold">${{ item.price.toFixed(2) }}</span>
              <button @click="selectArtwork(item.id)" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products';
import { ref, onMounted, watch } from 'vue';

const productsStore = useProductsStore();
const allArtwork = ref([]);
const artwork = ref([]);
const loading = ref(false);
const filterCategory = ref('All');
const categories = ref(['Digital', 'Paintings', 'Sketches']);

// Filter artwork based on selected category
const filterArtwork = () => {
  if (filterCategory.value === 'All') {
    artwork.value = allArtwork.value;
  } else {
    artwork.value = allArtwork.value.filter(item => item.category === filterCategory.value);
  }
};

onMounted(async () => {
  loading.value = true;
  await productsStore.fetchArtwork();
  allArtwork.value = productsStore.artwork;
  filterArtwork();
  loading.value = false;
});

// Watch for filter changes
watch(filterCategory, () => {
  filterArtwork();
});

const selectArtwork = (id) => {
  const selectedArtwork = productsStore.getArtworkById(id);
  if (selectedArtwork) {
    productsStore.selectArtwork(selectedArtwork);
  }
  // Navigate to the product selection page with the selected artwork
  navigateTo(`/products?artwork=${id}`);
};
</script>
