<template>
<header>
        <div class="fixed inset-0 z-50 h-8 max-w-screen-xl mx-auto">
         <div class="w-full h-full bg-white backdrop-blur dark:bg-steel-300/90"></div>
        </div>
        <div class="fixed inset-0 z-50 flex px-4 top-5 h-max">
         <div class="flex w-full max-w-screen-xl px-5 py-5 mx-auto bg-white border shadow-sm dark:bg-steel-200 rounded-xl shadow-black/5 dark:border-steel-50/10">
            <div class="relative flex items-center w-full">
               <a class="flex-none text-slate-900 dark:text-white" href="/">
               <span class="sr-only">Kaelian</span>
               <NuxtImg class="w-10 h-10 rounded-full shadow-xl bg-steel-50/20 dark:bg-steel-300" src="WBfbdMq4P8RlyMvhkelLaqWBfbdMq4P8RlyMvhkelLaqot5i712HRcQZsWBfbdMq4P8RlyMvhkelLaqot5i712HRcQZsot5i712HRcQZs" alt="Kaelian"/>
               </a>
               <div class="hidden ml-auto text-sm md:flex md:items-center dark:text-white">
                  <NuxtLink :class="{'font-medium text-sky-500': $route.path === '/', 'font-medium hover:text-sky-500 ': $route.fullPath !== '/'}" to="/">Acceuil</NuxtLink>
                  <NuxtLink :class="{'ml-8 font-medium text-sky-500': $route.path === '/resume', 'ml-8 font-medium hover:text-sky-500 ': $route.fullPath !== '/resume'}" to="/resume">Mon CV</NuxtLink>
                  <NuxtLink :class="{'ml-8 font-medium text-sky-500': $route.path === '/projects', 'ml-8 font-medium hover:text-sky-500 ': $route.fullPath !== '/projects'}" to="/projects">Mes projets</NuxtLink>
                  <NuxtLink :class="{'ml-8 font-medium text-sky-500': $route.path === '/blog', 'ml-8 font-medium hover:text-sky-500 ': $route.fullPath !== '/blog'}" to="/blog">Blog</NuxtLink>
               </div>
              <button @click="toggleColorMode" type="button" class="items-center justify-center block w-8 h-8 my-auto ml-auto rounded-full md:ml-8">
                <span class="sr-only">Toggle Theme</span>
                <svg v-if="colorMode.preference === 'light'" class="w-5 h-5 stroke-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
                <svg v-else-if="colorMode.preference === 'dark'" class="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,18a6,6,0,1,0-6-6A6.006,6.006,0,0,0,12,18ZM12,8a4,4,0,1,1-4,4A4,4,0,0,1,12,8ZM11,3V2a1,1,0,0,1,2,0V3a1,1,0,0,1-2,0Zm1,17a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0V21A1,1,0,0,1,12,20ZM17.657,6.343a1,1,0,0,1,0-1.414l.707-.707a1,1,0,0,1,1.414,1.414l-.707.707a1,1,0,0,1-1.414,0ZM6.343,17.657a1,1,0,0,1,0,1.414l-.707.707a1,1,0,0,1-1.414-1.414l.707-.707A1,1,0,0,1,6.343,17.657ZM23,12a1,1,0,0,1-1,1H21a1,1,0,0,1,0-2h1A1,1,0,0,1,23,12ZM1,12a1,1,0,0,1,1-1H3a1,1,0,0,1,0,2H2A1,1,0,0,1,1,12Zm18.071,5.657.707.707a1,1,0,1,1-1.414,1.414l-.707-.707a1,1,0,0,1,1.414-1.414ZM4.222,5.636A1,1,0,0,1,5.636,4.222l.707.707A1,1,0,1,1,4.929,6.343Z"></path>
                </svg>
                <svg v-else-if="colorMode.preference === 'system' && colorMode.value === 'light'" class="w-5 h-5 stroke-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
                <svg v-else-if="colorMode.preference === 'system' && colorMode.value === 'dark'" class="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,18a6,6,0,1,0-6-6A6.006,6.006,0,0,0,12,18ZM12,8a4,4,0,1,1-4,4A4,4,0,0,1,12,8ZM11,3V2a1,1,0,0,1,2,0V3a1,1,0,0,1-2,0Zm1,17a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0V21A1,1,0,0,1,12,20ZM17.657,6.343a1,1,0,0,1,0-1.414l.707-.707a1,1,0,0,1,1.414,1.414l-.707.707a1,1,0,0,1-1.414,0ZM6.343,17.657a1,1,0,0,1,0,1.414l-.707.707a1,1,0,0,1-1.414-1.414l.707-.707A1,1,0,0,1,6.343,17.657ZM23,12a1,1,0,0,1-1,1H21a1,1,0,0,1,0-2h1A1,1,0,0,1,23,12ZM1,12a1,1,0,0,1,1-1H3a1,1,0,0,1,0,2H2A1,1,0,0,1,1,12Zm18.071,5.657.707.707a1,1,0,1,1-1.414,1.414l-.707-.707a1,1,0,0,1,1.414-1.414ZM4.222,5.636A1,1,0,0,1,5.636,4.222l.707.707A1,1,0,1,1,4.929,6.343Z"></path>
                </svg>

              </button>
            
               <button type="button" class="flex items-center justify-center w-8 h-8 my-auto ml-2 rounded-full">
                  <span class="sr-only">Recherche</span>
                  <svg class="w-5 h-5 stroke-gray-900 dark:stroke-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                     <circle cx="11" cy="11" r="8"></circle>
                     <path d="m21 21-4.3-4.3"></path>
                  </svg>
               </button>
               <button type="button" class="flex items-center justify-center w-8 h-8 ml-4 -my-1 -mr-1 md:hidden">
                  <span class="sr-only">Menu de Navigation</span>
                  <svg viewBox="0 0 24 24" class="w-6 h-6 stroke-slate-900 dark:stroke-white">
                     <path d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5" fill="none" stroke-width="1.8" stroke-linecap="round"></path>
                  </svg>
               </button>
            </div>
         </div>
        </div>
      </header>
</template>

<script lang="ts" setup>



const colorMode = useColorMode()

const toggleColorMode = () => {


  if (colorMode.preference === 'system') {
    if (colorMode.value === 'dark') {
      colorMode.preference = 'light'
    } else {
      colorMode.preference = 'dark'
    }
  } else if (colorMode.preference === 'light') {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'light'
  }

}
</script>



<style>

</style>