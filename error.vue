<template>
    <div class="h-screen overflow-hidden">
           <div class="relative flex h-full my-auto via-transparent z-30">
              <div class="flex-col my-auto max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                 <div class="max-w-4xl mx-auto text-center">
                    <h1 class="block text-3xl font-semibold dark:text-white text-steel-300 sm:text-4xl md:text-5xl lg:text-6xl">
                      Erreur {{ error.statusCode }} 😭
                    </h1>
                    <div v-if="error.statusCode === 404 || '404'" class="block mt-8">
                      <p class=" text-xl font-medium text-steel-50">La page que vous cherchez n'existe pas ou a été déplacée.</p>
                      <p class="text-white text-sm mt-4">🙃 Mais, ceci pourrait peut etre vous réconfortez</p>
                      <video muted controls autoplay class="w-full md:h-64 h-40 mt-8">
                        <source src="/404.mp4" type="video/mp4">
                      </video>
                    </div>
                    <p v-else-if="error.statusCode === 500 || '500'" class="block mt-8 text-xl font-medium text-steel-50">
                      Une erreur est survenue.
                    </p>
                    <p v-else-if="error.statusCode === 401 || '401'" class="block mt-8 text-xl font-medium text-steel-50">
                      Vous n'êtes pas autorisé à accéder à cette page.
                    </p>
                    <p v-else-if="error.statusCode === 403 || '403'" class="block mt-8 text-xl font-medium text-steel-50">
                      Vous n'êtes pas autorisé à accéder à cette page.
                    </p>
                    <p v-else-if="error.statusCode === 429 || '429'" class="block mt-8 text-xl font-medium text-steel-50">
                      Vous avez effectué trop de requêtes sur le site, veuillez réessayer plus tard.
                    </p>
                    <p v-else class="block mt-8 text-xl font-medium text-steel-50">
                      Une erreur inconnue est survenue.
                    </p>
                    <div class="mt-8">
                       <nuxt-link to="/" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-xl dark:text-white text-steel-300 dark:bg-steel-200 bg-steel-50/20">
                          Retour à l'accueil
                       </nuxt-link>
                    </div>
                 </div>
              </div>
           </div>
        </div>
  </template>
  
<script setup>
  const error = useError();
</script>  