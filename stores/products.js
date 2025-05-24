// Products store using Pinia
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    artwork: [
      {
        id: 1,
        title: 'Abstract Waves',
        description: 'Colorful abstract waves in blue and purple tones.',
        category: 'Digital',
        price: 25.00,
        image: '/images/placeholder.jpg'
      },
      {
        id: 2,
        title: 'Mountain Landscape',
        description: 'Serene mountain landscape at sunset.',
        category: 'Paintings',
        price: 35.00,
        image: '/images/placeholder.jpg'
      },
      {
        id: 3,
        title: 'Urban Sketch',
        description: 'Black and white sketch of an urban cityscape.',
        category: 'Sketches',
        price: 20.00,
        image: '/images/placeholder.jpg'
      },
      {
        id: 4,
        title: 'Floral Pattern',
        description: 'Colorful floral pattern with botanical elements.',
        category: 'Digital',
        price: 22.00,
        image: '/images/placeholder.jpg'
      },
      {
        id: 5,
        title: 'Ocean Waves',
        description: 'Peaceful ocean waves at dawn.',
        category: 'Paintings',
        price: 40.00,
        image: '/images/placeholder.jpg'
      },
      {
        id: 6,
        title: 'Geometric Shapes',
        description: 'Modern composition with geometric shapes.',
        category: 'Digital',
        price: 28.00,
        image: '/images/placeholder.jpg'
      },
      {
        id: 7,
        title: 'Portrait Study',
        description: 'Detailed portrait study in pencil.',
        category: 'Sketches',
        price: 30.00,
        image: '/images/placeholder.jpg'
      },
      {
        id: 8,
        title: 'Abstract Composition',
        description: 'Bold abstract composition with vibrant colors.',
        category: 'Paintings',
        price: 45.00,
        image: '/images/placeholder.jpg'
      }
    ],

    products: [
      {
        id: 1,
        type: 'T-Shirt',
        description: 'Premium cotton t-shirt with custom print.',
        basePrice: 25.00,
        image: '/images/placeholder.jpg',
        printifyId: 'tshirt-001'
      },
      {
        id: 2,
        type: 'Poster',
        description: 'High-quality art print on premium paper.',
        basePrice: 15.00,
        image: '/images/placeholder.jpg',
        printifyId: 'poster-001'
      },
      {
        id: 3,
        type: 'Mug',
        description: 'Ceramic mug with custom artwork.',
        basePrice: 12.00,
        image: '/images/placeholder.jpg',
        printifyId: 'mug-001'
      },
      {
        id: 4,
        type: 'Phone Case',
        description: 'Durable phone case with custom print.',
        basePrice: 20.00,
        image: '/images/placeholder.jpg',
        printifyId: 'phonecase-001'
      },
      {
        id: 5,
        type: 'Tote Bag',
        description: 'Canvas tote bag with custom artwork.',
        basePrice: 18.00,
        image: '/images/placeholder.jpg',
        printifyId: 'totebag-001'
      },
      {
        id: 6,
        type: 'Hoodie',
        description: 'Comfortable hoodie with custom print.',
        basePrice: 40.00,
        image: '/images/placeholder.jpg',
        printifyId: 'hoodie-001'
      },
      {
        id: 7,
        type: 'Sticker',
        description: 'Vinyl sticker with custom artwork.',
        basePrice: 3.50,
        image: '/images/placeholder.jpg',
        printifyId: 'sticker-001'
      },
      {
        id: 8,
        type: 'Canvas Print',
        description: 'Gallery-quality canvas print.',
        basePrice: 50.00,
        image: '/images/placeholder.jpg',
        printifyId: 'canvas-001'
      }
    ],

    selectedArtwork: null,
    selectedProduct: null,
    loading: false,
    error: null
  }),

  getters: {
    getArtworkById: (state) => (id) => {
      return state.artwork.find(item => item.id === id);
    },

    getProductById: (state) => (id) => {
      return state.products.find(item => item.id === id);
    },

    artworkByCategory: (state) => (category) => {
      if (!category || category === 'All') {
        return state.artwork;
      }
      return state.artwork.filter(item => item.category === category);
    },

    productsByType: (state) => (type) => {
      if (!type || type === 'All Products') {
        return state.products;
      }
      return state.products.filter(item => item.type === type);
    },

    featuredArtwork: (state) => {
      // Return 4 random artwork items for the featured section
      return [...state.artwork].sort(() => 0.5 - Math.random()).slice(0, 4);
    }
  },

  actions: {
    selectArtwork(artwork) {
      this.selectedArtwork = artwork;
    },

    selectProduct(product) {
      this.selectedProduct = product;
    },

    clearSelection() {
      this.selectedArtwork = null;
      this.selectedProduct = null;
    },

    // In a real application, these would fetch data from an API
    async fetchArtwork() {
      this.loading = true;
      this.error = null;

      try {
        // This would be an API call in a real application
        // For now, we're using the hardcoded data
        // const response = await fetch('/api/artwork');
        // this.artwork = await response.json();

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        this.error = 'Failed to fetch artwork. Please try again.';
        console.error('Error fetching artwork:', error);
      } finally {
        this.loading = false;
      }
    },

    async fetchProducts() {
      this.loading = true;
      this.error = null;

      try {
        // This would be an API call in a real application
        // For now, we're using the hardcoded data
        // const response = await fetch('/api/products');
        // this.products = await response.json();

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        this.error = 'Failed to fetch products. Please try again.';
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },

    // This would be used to fetch printify product details
    async fetchPrintifyProduct(printifyId) {
      // In a real application, this would call the Printify API
      console.log(`Fetching Printify product with ID: ${printifyId}`);
    }
  }
});
