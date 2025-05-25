<template>
  <div>
    <section class="py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-8">{{ $t('aboutHeader') }} - Juan Dessine</h1>
        <div class="max-w-3xl mx-auto">
          <div class="mb-12">
            <img src="/images/placeholder.jpg" alt="Juan Dessine" class="w-64 h-64 object-cover rounded-full mx-auto mb-8">
            <p class="text-xl text-center text-gray-600 mb-4">Contemporary Artist & Illustrator</p>
          </div>
          
          <div class="prose prose-lg mx-auto">
            <h2 class="text-2xl font-bold mb-4">Biography</h2>
            <p class="mb-6">
              Juan Dessine is a contemporary artist whose work spans multiple mediums including digital art, 
              traditional paintings, and sketches. Born with a passion for visual storytelling, Juan has 
              developed a distinctive style that blends vibrant colors with intricate details, creating 
              pieces that invite viewers to explore deeper meanings and emotions.
            </p>
            
            <h2 class="text-2xl font-bold mb-4">Artistic Journey</h2>
            <p class="mb-6">
              Having studied fine arts at a prestigious art school, Juan began their professional career 
              as an illustrator before expanding into gallery exhibitions and commissioned artwork. 
              Over the past decade, their work has been featured in numerous galleries across the country 
              and has gained recognition for its unique perspective and emotional depth.
            </p>
            
            <h2 class="text-2xl font-bold mb-4">Inspiration & Style</h2>
            <p class="mb-6">
              Juan draws inspiration from nature, urban landscapes, and human connections. Their style 
              is characterized by a harmonious balance between realism and abstraction, often incorporating 
              symbolic elements that add layers of meaning to each piece. Whether working digitally or with 
              traditional media, Juan's commitment to craftsmanship and attention to detail remains constant.
            </p>
            
            <h2 class="text-2xl font-bold mb-4">Artist Statement</h2>
            <p class="mb-6">
              "My art is a conversation between myself and the viewer. I create pieces that not only 
              express my own perspective but also leave room for personal interpretation. I believe that 
              art should evoke emotion, spark curiosity, and sometimes challenge our understanding of the 
              world around us. Each piece I create is an invitation to see beyond the surface and connect 
              with something deeper."
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Exhibitions & Awards</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-2">Solo Exhibitions</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>2023 - "Chromatic Visions" - Modern Art Gallery</li>
              <li>2021 - "Beyond Boundaries" - Urban Space Gallery</li>
              <li>2019 - "Reflections" - Contemporary Arts Center</li>
            </ul>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-2">Awards & Recognition</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>2022 - Excellence in Digital Arts Award</li>
              <li>2020 - Emerging Artist of the Year</li>
              <li>2018 - Innovation in Mixed Media Recognition</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-12">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8">Connect With The Artist</h2>
        <p class="mb-8">Interested in commissioning a piece or have questions about my work?</p>
        <div class="flex justify-center space-x-4">
          <a href="#" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Contact Me
          </a>
          <NuxtLink :to="localePath('/gallery')" class="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300">
            View Gallery
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
</script>