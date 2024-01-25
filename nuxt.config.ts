// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/image', 'nuxt-security', '@nuxtjs/i18n', 'nuxt-link-checker', '@nuxtjs/robots', 'nuxt-meilisearch', '@zadigetvoltaire/nuxt-gtm', 'nuxt-gtag', 'nuxt-simple-sitemap'],
  gtag: {
    id: 'G-C5S8Z84M8Q',
    initialConsent: true,
  },
  gtm: {
    id: 'GTM-5PD8DKNM', // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
    defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
    compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: true, // Whether or not display console logs debugs (optional)
    loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
    enableRouterSync: true, // Pass the router instance of your app to automatically sync with router (optional)
    trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
  },
  site: {
    url: 'localhost:3000',
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
    storageKey: 'theme'
  },
  i18n: {
    locales: [
      { code: 'fr', iso: 'fr-FR', file: 'fr.ts' },
      { code: 'en', iso: 'en-US', file: 'en.ts' },
    ],
    defaultLocale: 'fr',
    lazy: true,
    langDir: 'locales/',
  },
  security: {
    nonce: true,
    hidePoweredBy: true,
    allowedMethodsRestricter: {
      methods: ['GET']
    },
    ssg: { 
      hashScripts: true,
      hashStyles: false,
    },
    csrf: true,
    sri: true,
    headers: {
      crossOriginResourcePolicy: 'cross-origin',
      crossOriginEmbedderPolicy: 'unsafe-none',
      crossOriginOpenerPolicy: 'same-origin-allow-popups',
      permissionsPolicy: false,
      strictTransportSecurity: {
        maxAge: 15552000,
        includeSubdomains: true,
        preload: true
      },
      xFrameOptions: 'SAMEORIGIN',
      xXSSProtection: '1; mode=block',
      xDownloadOptions: 'noopen',
      contentSecurityPolicy: {
        'script-src': [
          "'self'",
          "https:",
          "'unsafe-inline'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'",
        ],
        
        'style-src': [
          "'self'",
          "https:",
          "'unsafe-inline'",
        ],
        'img-src': ["'self'", "data:","res.cloudinary.com",],
        'font-src': ["'self'", "https:", "data:"],
        'object-src': ["'none'"],
        'base-uri': ["'none'"],
        'script-src-attr': ["'none'"],
        'form-action': ["'self'"],
        'upgrade-insecure-requests': true,

      },
      
    },
    rateLimiter: {
      tokensPerInterval: 10,
      interval: 2000,
      headers: true,
      throwError: true,
      driver: {
        name: 'memory',
        options: { }
      },
    },
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dmv6znzkv/image/upload/'
    }
  },
  app: {
    head: {
      title: 'Kaelian — Développeur Web & Graphiste UI/UX',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { hid: 'description', name: 'description', content: "Kaelian Baudelet" },
        { name: 'title', content: "Kaelian Baudelet" },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'flaredev.com' },
        { property: 'og:title', content: 'Kaelian Baudelet' },
        { property: 'og:description', content: "Kaelian Baudelet" },
        { property: 'og:image', content: 'banner.png' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'flaredev.com' },
        { property: 'twitter:title', content: 'Kaelian Baudelet' },
        { property: 'twitter:description', content: "Kaelian Baudelet" },
        { property: 'twitter:image', content: 'banner.png' },
        { name: 'msapplication-TileColor', content: '#2d89ef' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
        { rel: 'manifest', href: 'site.webmanifest' },
        { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#0192f6' },
      ],
      bodyAttrs: {
        class: "font-sans antialiased bg-steel-50/5 dark:bg-steel-300"
      },
    },
  },

  plugins: [
    '~/plugins/preline.client.ts',
  ],
})