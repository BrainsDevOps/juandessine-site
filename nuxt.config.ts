// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon'
  ],

  runtimeConfig: {
    public: {
      stripePublicKey: process.env.STRIPE_PUBLIC_KEY || '',
      printifyApiKey: process.env.PRINTIFY_API_KEY || '',
      printifyShopId: process.env.PRINTIFY_SHOP_ID || ''
    },
    private: {
      stripeSecretKey: process.env.STRIPE_SECRET_KEY || ''
    }
  },
  app: {
    head: {
      title: 'Juan Dessine Art Shop',
      meta: [
        { name: 'description', content: 'Custom art prints and products by Juan Dessine' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'es',
        name: 'Español',
        file: 'es.json',
      },
    ],
    defaultLocale: 'en',
    strategy: 'prefix'
  }
})
