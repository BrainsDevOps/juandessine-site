<template>
  <div>
    <section class="py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-8">Welcome to Juan Dessine Art Shop</h1>
        <p class="text-xl text-center text-gray-600 mb-12">Discover unique artwork and custom printed products</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-100 p-8 rounded-lg">
            <h2 class="text-2xl font-bold mb-4">Browse Artwork</h2>
            <p class="mb-6">Explore our collection of original artwork by Juan Dessine.</p>
            <NuxtLink to="/gallery" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              View Gallery
            </NuxtLink>
          </div>

          <div class="bg-gray-100 p-8 rounded-lg">
            <h2 class="text-2xl font-bold mb-4">Custom Products</h2>
            <p class="mb-6">Get your favorite artwork printed on various products.</p>
            <NuxtLink to="/products" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Shop Products
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Featured Artwork</h2>
        <p class="text-center mb-8">Loading featured artwork...</p>
      </div>
    </section>

    <section class="py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-blue-600 text-xl font-bold">1</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Choose Artwork</h3>
            <p>Browse our gallery and select your favorite artwork.</p>
          </div>

          <div class="text-center">
            <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-blue-600 text-xl font-bold">2</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Select Product</h3>
            <p>Choose from various products to print your selected artwork.</p>
          </div>

          <div class="text-center">
            <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-blue-600 text-xl font-bold">3</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Receive Your Order</h3>
            <p>We'll print and ship your custom product directly to you.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
