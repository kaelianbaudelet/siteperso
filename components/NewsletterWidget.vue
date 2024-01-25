<template>
<div class="flex flex-col bg-white border shadow-sm dark:bg-steel-200 dark:border-steel-50/10 rounded-xl shadow-black/5">
                     <div class="relative p-4 overflow-hidden md:p-5">
                        <h1 class="flex mb-2 text-[0.9rem] font-medium text-steel-300 dark:text-white line-clamp-1 z-5">
                           Inscrivez vous à la newsletter
                        </h1>
                        <p class="text-sm text-steel-50 z-5">
                           Recevez les derniers articles de mon blog et restez informé de mes derniers projets.
                        </p>
                        <div class="absolute z-0 right-4 md:-top-2 top-2">
                           <svg class="w-28 h-28 md:w-44 md:h-44 dark:fill-steel-50/10 fill-steel-300/10 rotate-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.5 20V22C9.5 22.4142 9.83579 22.75 10.25 22.75C10.6642 22.75 11 22.4142 11 22V20H9.5Z"/>
                              <path d="M15 20H13.5V22C13.5 22.4142 13.8358 22.75 14.25 22.75C14.6642 22.75 15 22.4142 15 22V20Z"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3846 6.58471L17.6407 6.53344C18.0564 6.45022 18.4863 6.48995 18.8814 6.64813C19.5717 6.92453 20.3266 6.97616 21.0458 6.79618L21.1073 6.7808C21.6309 6.64975 22 6.16299 22 5.60336V3.47284C22 2.73503 21.3358 2.19145 20.6454 2.36421C20.249 2.46342 19.8329 2.43496 19.4523 2.28261L19.3793 2.25335C18.7422 1.99828 18.0491 1.93421 17.3787 2.06841L16.93 2.15824C16.3901 2.26632 16 2.75722 16 3.32846V10.2807C16 10.678 16.31 11 16.6923 11C17.0747 11 17.3846 10.678 17.3846 10.2807V6.58471Z"/>
                              <path d="M14.5 6V10.2807C14.5 11.4518 15.428 12.5 16.6923 12.5C17.9566 12.5 18.8846 11.4518 18.8846 10.2807V8.22795C19.6455 8.43335 20.4446 8.45735 21.22 8.29496C21.7122 9.13671 22 10.1541 22 11.25V17.4253C22 18.8473 21.0119 20 19.7931 20H12.5V11.25C12.5 9.22014 11.6679 7.27604 10.2826 6H14.5Z"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.25C2 8.35051 4.01472 6 6.5 6C8.98528 6 11 8.35051 11 11.25V20H4.23256C2.99955 20 2 18.8339 2 17.3953V11.25ZM4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H8C8.41421 15.25 8.75 15.5858 8.75 16C8.75 16.4142 8.41421 16.75 8 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"/>
                           </svg>

                           
                        </div>
                        <div class="relative mt-6 mb-1">
                           <input type="email" id="hs-floating-input-email-value" class="peer p-4 block w-full rounded-xl text-sm placeholder:text-transparent border-steel-50/20 focus:border-steel-50/30 focus:ring-0 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-steel-200 dark:border-steel-100 dark:text-white
                              focus:pt-6
                              focus:pb-2
                              [&:not(:placeholder-shown)]:pt-6
                              [&:not(:placeholder-shown)]:pb-2
                              autofill:pt-6
                              autofill:pb-2" placeholder="email@exemple.com">
                           <label for="hs-floating-input-email-value" class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                              peer-focus:text-xs
                              peer-focus:-translate-y-1.5
                              peer-focus:text-gray-500
                              peer-[:not(:placeholder-shown)]:text-xs
                              peer-[:not(:placeholder-shown)]:-translate-y-1.5
                              peer-[:not(:placeholder-shown)]:text-steel-50">Email</label>
                              <button @click="showToast()" type="button" class="mt-4 flex items-center justify-center w-full px-4 py-3.5 text-sm font-medium text-white transition duration-400 ease-in-out bg-steel-300 hover:bg-sky-500 focus:bg-sky-500 border border-transparent rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-sky-500 dark:ring-offset-transparent">
                                 S'inscrire
                              </button>
                        </div>
                     </div>
                  </div>

                     <teleport to="body">
                        <Toast ref="toast" />    
                     </teleport>
                          
                     
</template>

<style>

</style>

 
 <script>
 import { Toast } from '#components'
 
 export default {
   components: {
     Toast
   },
   methods: {
     showToast() {
       this.$refs.toast.show('success',  2500, true, 'Vous venez de vous inscrire à la newsletter 🤩 !')
     },
     hideAll() {
       this.$refs.toast.hideall()
     }
   }
 };
 </script>