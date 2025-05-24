<template>
  <div>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">Art Gallery</h1>

      <div class="mb-8">
        <div class="flex flex-wrap gap-4">
          <button class="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">All</button>
          <button class="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">Digital</button>
          <button class="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">Paintings</button>
          <button class="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">Sketches</button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- This would normally be a v-for loop over artwork data -->
        <div v-for="i in 8" :key="i" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div class="h-64 bg-gray-200"></div>
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-2">Artwork Title {{ i }}</h3>
            <p class="text-gray-600 mb-4">Digital Art</p>
            <div class="flex justify-between items-center">
              <span class="text-blue-600 font-bold">${{ 20 + i * 5 }}.00</span>
              <button @click="selectArtwork(i)" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
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
const selectArtwork = (id) => {
  // This would navigate to the product selection page with the selected artwork
  navigateTo(`/products?artwork=${id}`);
};
</script>
