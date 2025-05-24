<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-800">Juan Dessine Art</NuxtLink>
        <nav class="hidden md:flex space-x-6">
          <NuxtLink to="/" class="text-gray-600 hover:text-gray-900">Home</NuxtLink>
          <NuxtLink to="/gallery" class="text-gray-600 hover:text-gray-900">Gallery</NuxtLink>
          <NuxtLink to="/products" class="text-gray-600 hover:text-gray-900">Products</NuxtLink>
          <NuxtLink to="/about" class="text-gray-600 hover:text-gray-900">About</NuxtLink>
        </nav>
        <div class="flex items-center space-x-4">
          <NuxtLink to="/cart" class="text-gray-600 hover:text-gray-900 relative">
            Cart
          </NuxtLink>
        </div>
      </div>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>

    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Juan Dessine Art. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
