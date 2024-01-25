<template>
<div class="flex flex-col bg-white border shadow-sm dark:bg-steel-200 dark:border-steel-50/10 rounded-xl shadow-black/5">
                     <div class="p-4 md:p-5">
                        <h1 class="flex mb-2 text-[0.9rem] font-medium text-steel-300 dark:text-white line-clamp-1">
                           Point clef de l'article
                        </h1>
                        <div class="space-y-6">
                           <ul data-hs-scrollspy="#scrollspy" class="text-sm leading-6 text-steel-50">
                              <li>
                                 <NuxtLink to="#installation" class="block py-1 font-medium hover:text-steel-300 dark:text-steel-50 dark:hover:text-white hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500 active">Installation de Portainer </NuxtLink>
                              </li>
                              <li class="ml-4">
                                 <NuxtLink to="#prerequis" class="flex items-start py-1 group hover:text-slate-900 dark:text-steel-50 dark:hover:text-white hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500">
                                    <svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 overflow-visible hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500 ">
                                       <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>
                                    Prérequis
                                 </NuxtLink>
                              </li>
                              <li class="ml-4">
                                 <NuxtLink to="#telechargement" class="flex items-start py-1 group hover:text-slate-900 dark:text-steel-50 dark:hover:text-white hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500">
                                    <svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 overflow-visible hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500 ">
                                       <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>
                                    Téléchargement de Portainer
                                 </NuxtLink>
                              </li>
                              <li class="ml-4">
                                 <NuxtLink to="#demarrage" class="flex items-start py-1 group hover:text-slate-900 dark:text-steel-50 dark:hover:text-white hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500">
                                    <svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 overflow-visible hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500 ">
                                       <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>
                                    Démarrage de Portainer
                                 </NuxtLink>
                              </li>
                              <li>
                                 <NuxtLink to="#utilisation" class="block py-1 font-medium hover:text-steel-300 dark:text-steel-50 dark:hover:text-white hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500">Utilisation de Portainer </NuxtLink>
                              </li>
                              <li class="ml-4">
                                 <NuxtLink to="#connexion" class="flex items-start py-1 group hover:text-slate-900 dark:text-steel-50 dark:hover:text-white hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500">
                                    <svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 overflow-visible hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500 ">
                                       <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>
                                    Connexion à l'Interface
                                 </NuxtLink>
                              </li>
                              <li class="ml-4">
                                 <NuxtLink to="#configuration" class="flex items-start py-1 group hover:text-slate-900 dark:text-steel-50 dark:hover:text-white hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500">
                                    <svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 overflow-visible hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500 ">
                                       <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>
                                    Configuration des Environnements
                                 </NuxtLink>
                              </li>
                              <li class="ml-4">
                                 <NuxtLink to="#gestion" class="flex items-start py-1 group hover:text-slate-900 dark:text-steel-50 dark:hover:text-white hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500">
                                    <svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 overflow-visible hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500 ">
                                       <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>
                                    Gestion des Applications
                                 </NuxtLink>
                              </li>
                              <li class="ml-4">
                                 <NuxtLink to="#surveillance" class="flex items-start py-1 group hover:text-slate-900 dark:text-steel-50 dark:hover:text-white hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500">
                                    <svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 overflow-visible hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500 ">
                                       <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>
                                    Surveillance des Ressources
                                 </NuxtLink>
                              </li>
                              <li>
                                 <NuxtLink to="#conclusion" class="block py-1 font-medium hover:text-steel-300 dark:text-steel-50 dark:hover:text-white hs-scrollspy-active:text-sky-500 dark:hs-scrollspy-active:text-sky-500">
                                    Conclusion
                                 </NuxtLink>
                              </li>
                              
                           </ul>
                        </div>
                     </div>
                  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>