<template>
<div class="flex flex-col bg-white border shadow-sm dark:bg-steel-200 dark:border-steel-50/10 rounded-xl shadow-black/5">
                        <div class="p-4 md:p-5">
                            <h1 class="flex mb-4 text-[0.9rem] font-medium text-steel-300 dark:text-white">
                                Références
                            </h1>
                            <ul class="flex flex-col gap-4">
                                <li>
                                    <NuxtLink target="_blank" rel="noopener" to="https://aktech.fr" class="flex items-center justify-between cursor-pointer group">
                                        <div class="flex min-w-0 gap-x-4">
                                            <NuxtImg provider="cloudinary" src="J3uu6Ahq4oYbcS7XRzZCfeOzAmeVHdsWLKGJsqscTIczxX83L" alt="Théo Lagache" loading="lazy" decoding="async" crossorigin class="flex-none w-8 h-8 my-auto rounded-full" />
                                            <div class="flex-auto min-w-0 -space-y-1.5">
                                                <p class="text-xs font-semibold leading-6 text-steel-300 dark:text-white">Théo Lagache</p>
                                                <p class="text-xs leading-5 truncate text-steel-50">theo@lagache.dev</p>
                                            </div>
                                        </div>
                                        <svg class="my-auto transition duration-200 -rotate-45 fill-sky-500 group-hover:rotate-0" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                                            <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
                                        </svg>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>