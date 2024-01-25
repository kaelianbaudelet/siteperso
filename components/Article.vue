<template>
<div class="relative flex flex-col justify-between p-6 bg-white border shadow-sm dark:bg-steel-200 dark:border-steel-50/10 text-start rounded-xl shadow-black/5">
                        <div class="absolute h-8 overflow-hidden -top-px left-16">
                           <div class="flex -mb-px h-[2px] w-64">
                              <div class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                              <div class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                           </div>
                        </div>
                        <div class="space-y-4 lg:space-y-6">
                           <div class="flex justify-between">
                              <NuxtLink class="my-auto inline-flex items-center gap-x-1.5 text-sm text-steel-300 dark:text-steel-50 decoration-2 hover:underline " to="/blog">
                                 <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m15 18-6-6 6-6"></path>
                                 </svg>
                                 Retour au Blog
                              </NuxtLink>
                              <div class="my-auto inline-flex items-center gap-1.5 py-1 px-3 rounded-lg text-xs sm:text-sm text-steel-300 dark:text-white bg-white dark:bg-steel-200 border border-steel-50/20 dark:border-steel-100 font-medium" href="#">
                                 Tutoriel
                              </div>
                           </div>
                           <h2 class="text-2xl font-bold tracking-tight text-steel-300 lg:text-3xl dark:text-white">Découverte et introduction à Portainer : Vos conteneurs Docker plus accessibles, plus faciles à gérer.</h2>
                           <div class="flex flex-wrap items-center gap-3 text-sm">
                    
                              <span class="dark:text-white text-steel-300">31 Décembre 2023</span>
                              <svg class="fill-steel-50 " xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none"><circle cx="2" cy="2.66669" r="2"></circle></svg>
                              <span class="dark:text-white text-steel-300">5 min de lecture</span>
                            </div>
                           <div class="flex flex-wrap items-center gap-4">
                              <NuxtLink class="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm hover:bg-steel-50/10 text-steel-300 dark:hover:bg-steel-100 dark:focus:bg-steel-100 dark:text-white bg-white dark:bg-steel-200 border border-steel-50/20 dark:border-steel-100" to="/blog?tag=portainer">
                              Portainer
                              </NuxtLink>
                              <NuxtLink class="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm hover:bg-steel-50/10 text-steel-300 dark:hover:bg-steel-100 dark:focus:bg-steel-100 dark:text-white bg-white dark:bg-steel-200 border border-steel-50/20 dark:border-steel-100" to="/blog?tag=docker">
                              Docker
                              </NuxtLink>
                           </div>
                           <div class="text-center">
                              <div class="grid gap-3 lg:grid-cols-2">
                                 <div class="grid grid-cols-2 gap-3 lg:grid-cols-1">
                                    <figure class="relative w-full overflow-hidden h-60 rounded-xl">
                                      <NuxtImg provider="cloudinary" src="gLiRhQ4ogRD4kGiRNY5NSs6zYtP8gXk6bnM" class="absolute top-0 object-cover w-full h-full transition duration-500 transform start-0 rounded-xl hover:scale-110" loading="lazy" alt="Prévisualisation 1" crossorigin decoding="async" />
                                    </figure>
                                    <figure class="relative w-full overflow-hidden h-60 rounded-xl">
                                      <NuxtImg provider="cloudinary" src="hQp6PcAhgxEejCKbkQYP5FgcmjaJLHYAEd9" class="absolute top-0 object-cover w-full h-full transition duration-500 transform start-0 rounded-xl hover:scale-110" loading="lazy" alt="Prévisualisation 2" crossorigin decoding="async" />

                                    </figure>
                                 </div>
                                 <figure class="relative w-full overflow-hidden h-72 sm:h-96 lg:h-full rounded-xl">
                                  <NuxtImg provider="cloudinary" src="jpCtjJPPHLyXxQRgqFE5Th3DrQktf5eRHht" class="absolute top-0 object-cover w-full h-full transition duration-500 transform start-0 rounded-xl hover:scale-110" loading="lazy" alt="Prévisualisation 1" crossorigin decoding="async" />
                                    
                                 </figure>
                              </div>
                              <span class="block mt-3 text-sm text-center text-steel-50">
                              Images de <NuxtLink class="hover:underline dark:text-white text-steel-300" href="https://www.portainer.io">Portainer.io</NuxtLink>, <NuxtLink class="hover:underline dark:text-white text-steel-300" href="https://www.docker.com">Docker.com</NuxtLink>, <NuxtLink class="hover:underline dark:text-white text-steel-300" href="https://theselfhostingblog.com/posts/setting-up-portainer-container-management-made-easy">Theselfhostingblog.com </NuxtLink>
                              </span>
                           </div>
                           <div id="scrollspy" class="[--scrollspy-offset:130] mt-6 prose max-w-none prose-p:text-steel-50 prose-a:text-sky-500 prose-blockquote:border-steel-50/20 prose-blockquote:dark:border-steel-100 prose-li:dark:text-white prose-li:text-steel-100 prose-a:dark:text-white prose-strong:dark:text-white prose-strong:text-steel-50 prose-headings:text-steel-100 prose-headings:dark:text-white prose-img:rounded-xl prose-headings:mb-2 prose-headings:mt-8  prose-thead:border-steel-30/50 prose-hr:border-steel-50/50 prose-hr:dark:border-steel-100  prose-tr:border-steel-50/30 prose-tr:dark:border-steel-100 prose-thead:dark:border-steel-100 prose-th:dark:text-white prose-th:text-steel-300 prose-table:text-steel-50">
    
        <h1>Mais Portainer c'est quoi ?</h1>
        <p>Portainer est une interface utilisateur open-source qui facilite la gestion de vos conteneurs Docker. Que vous soyez un débutant cherchant à explorer le monde des conteneurs ou un professionnel expérimenté, Portainer offre une solution conviviale pour déployer, gérer et surveiller vos applications.</p>
    



    <div id="installation" class="scroll-mt-16">
      
    <h2 data-clipboard-target="hs-55484548" data-clipboard-action="copy" data-clipboard-success-text="Copié" class="relative flex items-center justify-start cursor-pointer js-clipboard group">
                                    <span id="hs-55484548" class="hidden"></span>
                                    <a href="#installation" class="absolute flex items-center justify-center flex-shrink-0 h-full transition-all opacity-0 cursor-pointer top-1 -start-4 group-hover:opacity-100 group-focus:-start-6 group-hover:-start-6 before:absolute before:top-0 before:start-0 before:w-8 before:h-full">
                                       <svg class="flex-shrink-0 h-full my-auto -mt-1 transition w-max dark:stroke-white stroke-steel-300 js-clipboard-default" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                       <svg class="flex-shrink-0 hidden h-full my-auto -mt-1 w-max stroke-sky-500 js-clipboard-success" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                    </a>
                                    Installation de Portainer
                                 </h2>

                                 <div id="prerequis" class="scroll-mt-16">
        <h3 data-clipboard-target="hs-55484548" data-clipboard-action="copy" data-clipboard-success-text="Copié" class="relative flex items-center justify-start cursor-pointer js-clipboard group">
                                    <span id="hs-55484548" class="hidden"></span>
                                    <a href="#prerequis" class="absolute flex items-center justify-center flex-shrink-0 h-full transition-all opacity-0 cursor-pointer top-1 -start-4 group-hover:opacity-100 group-focus:-start-6 group-hover:-start-6 before:absolute before:top-0 before:start-0 before:w-8 before:h-full">
                                       <svg class="flex-shrink-0 h-full my-auto -mt-1 transition w-max dark:stroke-white stroke-steel-300 js-clipboard-default" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                       <svg class="flex-shrink-0 hidden h-full my-auto -mt-1 w-max stroke-sky-500 js-clipboard-success" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                    </a>
                                    Prérequis
                                 </h3>
                                 


        <p>Pour commencer, assurez-vous d'avoir Docker installé sur votre machine. Si ce n'est pas le cas, suivez les instructions sur le site officiel de Docker pour votre système d'exploitation.</p>
</div>
<div id="telechargement" class="scroll-mt-16">
        <h3 data-clipboard-target="hs-55484548" data-clipboard-action="copy" data-clipboard-success-text="Copié" class="relative flex items-center justify-start cursor-pointer js-clipboard group">
                                    <span id="hs-55484548" class="hidden"></span>
                                    <NuxtLink to="#telechargement" class="absolute flex items-center justify-center flex-shrink-0 h-full transition-all opacity-0 cursor-pointer top-1 -start-4 group-hover:opacity-100 group-focus:-start-6 group-hover:-start-6 before:absolute before:top-0 before:start-0 before:w-8 before:h-full">
                                       <svg class="flex-shrink-0 h-full my-auto -mt-1 transition w-max dark:stroke-white stroke-steel-300 js-clipboard-default" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                       <svg class="flex-shrink-0 hidden h-full my-auto -mt-1 w-max stroke-sky-500 js-clipboard-success" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                    </NuxtLink>
                                    Téléchargement de Portainer
                                 </h3>
        <p>Utilisez la commande suivante pour télécharger l'image Portainer depuis Docker Hub :</p>
        <pre><code>docker pull portainer/portainer</code></pre>

        </div>
        <div id="demarrage" class="scroll-mt-16">
        <h3 data-clipboard-target="hs-55484548" data-clipboard-action="copy" data-clipboard-success-text="Copié" class="relative flex items-center justify-start cursor-pointer js-clipboard group">
                                    <span id="hs-55484548" class="hidden"></span>
                                    <NuxtLink to="#demarrage" class="absolute flex items-center justify-center flex-shrink-0 h-full transition-all opacity-0 cursor-pointer top-1 -start-4 group-hover:opacity-100 group-focus:-start-6 group-hover:-start-6 before:absolute before:top-0 before:start-0 before:w-8 before:h-full">
                                       <svg class="flex-shrink-0 h-full my-auto -mt-1 transition w-max dark:stroke-white stroke-steel-300 js-clipboard-default" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                       <svg class="flex-shrink-0 hidden h-full my-auto -mt-1 w-max stroke-sky-500 js-clipboard-success" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                    </NuxtLink>
                                    Démarrage de Portainer
                                 </h3>
        <p>Démarrez Portainer en utilisant la commande Docker :</p>
        <pre><code>docker run -d -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer</code></pre>
        <p>Portainer est maintenant accessible à l'adresse <strong>http://[VOTRE_IP]:9000</strong>.</p>
        </div>
    </div>

    <div id="utilisation" class="scroll-mt-16">

      <h2 data-clipboard-target="hs-55484548" data-clipboard-action="copy" data-clipboard-success-text="Copié" class="relative flex items-center justify-start cursor-pointer js-clipboard group">
                                    <span id="hs-55484548" class="hidden"></span>
                                    <NuxtLink to="#utilisation" class="absolute flex items-center justify-center flex-shrink-0 h-full transition-all opacity-0 cursor-pointer top-1 -start-4 group-hover:opacity-100 group-focus:-start-6 group-hover:-start-6 before:absolute before:top-0 before:start-0 before:w-8 before:h-full">
                                       <svg class="flex-shrink-0 h-full my-auto -mt-1 transition w-max dark:stroke-white stroke-steel-300 js-clipboard-default" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                       <svg class="flex-shrink-0 hidden h-full my-auto -mt-1 w-max stroke-sky-500 js-clipboard-success" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                    </NuxtLink>
                                    Utilisation de Portainer
                                 </h2>

               <div id="connexion" class="scroll-mt-16">
                                 <h3 data-clipboard-target="hs-55484548" data-clipboard-action="copy" data-clipboard-success-text="Copié" class="relative flex items-center justify-start cursor-pointer js-clipboard group">
                                    <span id="hs-55484548" class="hidden"></span>
                                    <NuxtLink href="#connexion" class="absolute flex items-center justify-center flex-shrink-0 h-full transition-all opacity-0 cursor-pointer top-1 -start-4 group-hover:opacity-100 group-focus:-start-6 group-hover:-start-6 before:absolute before:top-0 before:start-0 before:w-8 before:h-full">
                                       <svg class="flex-shrink-0 h-full my-auto -mt-1 transition w-max dark:stroke-white stroke-steel-300 js-clipboard-default" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                       <svg class="flex-shrink-0 hidden h-full my-auto -mt-1 w-max stroke-sky-500 js-clipboard-success" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                    </NuxtLink>
                                    Connexion à l'Interface
                                 </h3>



        <p>Ouvrez votre navigateur et accédez à l'interface Portainer. La première fois, créez un compte administrateur avec un mot de passe sécurisé.</p>

        </div>

        <div id="configuration" class="scroll-mt-16">
        <h3 data-clipboard-target="hs-55484548" data-clipboard-action="copy" data-clipboard-success-text="Copié" class="relative flex items-center justify-start cursor-pointer js-clipboard group">
                                    <span id="hs-55484548" class="hidden"></span>
                                    <NuxtLink href="#configuration" class="absolute flex items-center justify-center flex-shrink-0 h-full transition-all opacity-0 cursor-pointer top-1 -start-4 group-hover:opacity-100 group-focus:-start-6 group-hover:-start-6 before:absolute before:top-0 before:start-0 before:w-8 before:h-full">
                                       <svg class="flex-shrink-0 h-full my-auto -mt-1 transition w-max dark:stroke-white stroke-steel-300 js-clipboard-default" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                       <svg class="flex-shrink-0 hidden h-full my-auto -mt-1 w-max stroke-sky-500 js-clipboard-success" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                    </NuxtLink>
                                    Configuration des Environnements
                                 </h3>
        <p>Connectez Portainer à votre instance Docker en spécifiant les paramètres de l'environnement. Vous pouvez gérer plusieurs instances Docker depuis une seule interface.</p>

        </div>

        <div id="gestion" class="scroll-mt-16">
        <h3 data-clipboard-target="hs-55484548" data-clipboard-action="copy" data-clipboard-success-text="Copié" class="relative flex items-center justify-start cursor-pointer js-clipboard group">
                                    <span id="hs-55484548" class="hidden"></span>
                                    <NuxtLink href="#gestion" class="absolute flex items-center justify-center flex-shrink-0 h-full transition-all opacity-0 cursor-pointer top-1 -start-4 group-hover:opacity-100 group-focus:-start-6 group-hover:-start-6 before:absolute before:top-0 before:start-0 before:w-8 before:h-full">
                                       <svg class="flex-shrink-0 h-full my-auto -mt-1 transition w-max dark:stroke-white stroke-steel-300 js-clipboard-default" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                       <svg class="flex-shrink-0 hidden h-full my-auto -mt-1 w-max stroke-sky-500 js-clipboard-success" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                    </NuxtLink>
                                    Gestion des Applications
                                 </h3>
        <p>Explorez les fonctionnalités de Portainer pour déployer, mettre à jour et surveiller vos applications. L'interface graphique intuitive simplifie la gestion des conteneurs.</p>


        </div>


        <div id="surveillance" class="scroll-mt-16">
        <h3 data-clipboard-target="hs-55484548" data-clipboard-action="copy" data-clipboard-success-text="Copié" class="relative flex items-center justify-start cursor-pointer js-clipboard group">
                                    <span id="hs-55484548" class="hidden"></span>
                                    <NuxtLink href="#surveillance" class="absolute flex items-center justify-center flex-shrink-0 h-full transition-all opacity-0 cursor-pointer top-1 -start-4 group-hover:opacity-100 group-focus:-start-6 group-hover:-start-6 before:absolute before:top-0 before:start-0 before:w-8 before:h-full">
                                       <svg class="flex-shrink-0 h-full my-auto -mt-1 transition w-max dark:stroke-white stroke-steel-300 js-clipboard-default" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                       <svg class="flex-shrink-0 hidden h-full my-auto -mt-1 w-max stroke-sky-500 js-clipboard-success" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                    </NuxtLink>
                                    Surveillance des Ressources
                                 </h3>
        <p>Utilisez les tableaux de bord de Portainer pour surveiller les ressources, les journaux et les statistiques de performance de vos conteneurs.</p>
        </div>
    </div>


    <div id="conclusion" class="scroll-mt-16">

        <h2 data-clipboard-target="hs-55484548" data-clipboard-action="copy" data-clipboard-success-text="Copié" class="relative flex items-center justify-start cursor-pointer js-clipboard group">
                                    <span id="hs-55484548" class="hidden"></span>
                                    <NuxtLink href="#conclusion" class="absolute flex items-center justify-center flex-shrink-0 h-full transition-all opacity-0 cursor-pointer top-1 -start-4 group-hover:opacity-100 group-focus:-start-6 group-hover:-start-6 before:absolute before:top-0 before:start-0 before:w-8 before:h-full">
                                       <svg class="flex-shrink-0 h-full my-auto -mt-1 transition w-max dark:stroke-white stroke-steel-300 js-clipboard-default" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                       <svg class="flex-shrink-0 hidden h-full my-auto -mt-1 w-max stroke-sky-500 js-clipboard-success" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                          <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke-width="2" stroke-linecap="round"></path>
                                       </svg>
                                    </NuxtLink>
                                    Conclusion
                                 </h2>
                                  <p>Portainer offre une solution accessible et puissante pour la gestion des conteneurs Docker. Que vous soyez novice ou expert, cette interface simplifie les opérations tout en offrant un contrôle complet sur votre environnement. Commencez votre voyage avec Portainer dès aujourd'hui pour une expérience Docker optimisée.</p>
                              </div>
                            </div>
                           
                           <div class="flex flex-wrap items-start justify-between gap-4">
                              <button data-clipboard-target="#link_blog" data-clipboard-action="copy" data-clipboard-success-text="Copied" class="js-clipboard [--trigger:focus] hs-tooltip  flex items-center justify-center h-10 gap-2 px-4 py-2 transition duration-200 bg-white border rounded-full hover:bg-steel-50/10 text-steel-300 dark:hover:bg-steel-100 dark:focus:bg-steel-100 dark:text-white dark:bg-steel-200 border-steel-50/20 dark:border-steel-100" href="#">
                                 <span class="z-10 invisible hidden px-2 py-1 text-xs font-medium transition-opacity rounded-lg shadow-sm opacity-0 dark:text-white text-steel-300 bg-steel-50/10 dark:bg-steel-300 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible " role="tooltip" style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate(101px, -70px);" data-popper-placement="top" data-popper-reference-hidden="" data-popper-escaped="">
                                    Lien copié
                                  </span>
                                 <svg class="flex-shrink-0 w-5 h-5 fill-steel-100 dark:fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M2.75458 14.716L3.27222 16.6479C3.87647 18.9029 4.17859 20.0305 4.86351 20.7618C5.40432 21.3392 6.10421 21.7433 6.87466 21.9229C7.85044 22.1504 8.97798 21.8483 11.2331 21.244C13.4881 20.6398 14.6157 20.3377 15.347 19.6528C15.4077 19.5959 15.4664 19.5373 15.5233 19.477C15.1891 19.449 14.852 19.3952 14.5094 19.3271C13.8133 19.1887 12.9862 18.967 12.008 18.7049L11.9012 18.6763L11.8764 18.6697C10.8121 18.3845 9.92281 18.1457 9.21277 17.8892C8.46607 17.6195 7.7876 17.287 7.21148 16.7474C6.41753 16.0038 5.86193 15.0414 5.61491 13.982C5.43567 13.2133 5.48691 12.4594 5.62666 11.6779C5.76058 10.929 6.00109 10.0315 6.28926 8.95613L6.28926 8.95611L6.82365 6.96174L6.84245 6.8916C4.9219 7.40896 3.91101 7.71505 3.23687 8.34646C2.65945 8.88726 2.25537 9.58715 2.07573 10.3576C1.84821 11.3334 2.15033 12.4609 2.75458 14.716Z"></path>
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8293 10.7154L20.3116 12.6473C19.7074 14.9024 19.4052 16.0299 18.7203 16.7612C18.1795 17.3386 17.4796 17.7427 16.7092 17.9223C16.6129 17.9448 16.5152 17.9621 16.415 17.9744C15.4999 18.0873 14.3834 17.7881 12.3508 17.2435C10.0957 16.6392 8.96815 16.3371 8.23687 15.6522C7.65945 15.1114 7.25537 14.4115 7.07573 13.641C6.84821 12.6652 7.15033 11.5377 7.75458 9.28263L8.27222 7.35077C8.3591 7.02654 8.43979 6.7254 8.51621 6.44561C8.97128 4.77957 9.27709 3.86298 9.86351 3.23687C10.4043 2.65945 11.1042 2.25537 11.8747 2.07573C12.8504 1.84821 13.978 2.15033 16.2331 2.75458C18.4881 3.35883 19.6157 3.66095 20.347 4.34587C20.9244 4.88668 21.3285 5.58657 21.5081 6.35703C21.7356 7.3328 21.4335 8.46034 20.8293 10.7154ZM11.0524 9.80589C11.1596 9.40579 11.5709 9.16835 11.971 9.27556L16.8006 10.5697C17.2007 10.6769 17.4381 11.0881 17.3309 11.4882C17.2237 11.8883 16.8125 12.1257 16.4124 12.0185L11.5827 10.7244C11.1826 10.6172 10.9452 10.206 11.0524 9.80589ZM10.2756 12.7033C10.3828 12.3032 10.794 12.0658 11.1941 12.173L14.0919 12.9495C14.492 13.0567 14.7294 13.4679 14.6222 13.868C14.515 14.2681 14.1038 14.5056 13.7037 14.3984L10.8059 13.6219C10.4058 13.5147 10.1683 13.1034 10.2756 12.7033Z"></path>
                                   </svg>
                                 <span class="text-sm font-medium">Copier le lien</span>
                                 </button>

                               <input type="hidden" id="link_blog" :value="`${domain}${$route.path}`" />


                              
                              <div class="flex flex-wrap items-center gap-4">

                                <NuxtLink target="_blank" rel="noopener" class="flex items-center justify-center w-10 h-10 p-2 transition duration-200 bg-white border border-gray-200 rounded-full hover:bg-steel-50/10 text-steel-300 dark:hover:bg-steel-100 dark:focus:bg-steel-100 dark:text-white dark:bg-steel-200 border-steel-50/20 dark:border-steel-100" to="https://twitter.com/intent/tweet?url=https://kaelian.dev/blog/hjqxsgzw1C2yoaM&text=Portainer%20:%20Vos%20conteneurs%20Docker%20plus%20accessibles,%20plus%20faciles%20à%20gérer.">

                                  
                                    <svg class="flex-shrink-0 w-4 h-4 fill-steel-100 dark:fill-white" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg">
                                       <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"></path>
                                    </svg>
                                 
                                </NuxtLink>
                                
                                <NuxtLink target="_blank" rel="noopener" class="flex items-center justify-center w-10 h-10 p-2 transition duration-200 bg-white border border-gray-200 rounded-full hover:bg-steel-50/10 text-steel-300 dark:hover:bg-steel-100 dark:focus:bg-steel-100 dark:text-white dark:bg-steel-200 border-steel-50/20 dark:border-steel-100" to="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fkaelian.dev/blog/hjqxsgzw1C2yoaM">
                                  


                                 <svg class="flex-shrink-0 w-4 h-4 fill-steel-100 dark:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z"></path>
                                 </svg>
                             </NuxtLink>

                              </div>
                            </div>
                        </div>
                     </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Prism from "prismjs";

import ClipboardJS from 'clipboard';
import "assets/css/prism.onedark.css";

onMounted(() => {
  Prism.highlightAll();

  const clipboard = new ClipboardJS('.js-clipboard');

  clipboard.on('success', function(e) {
    e.trigger.querySelector('.hs-tooltip').classList.add('hs-tooltip-shown');
    setTimeout(() => {
      e.trigger.querySelector('.hs-tooltip').classList.remove('hs-tooltip-shown');
    }, 1000);
  });

  clipboard.on('error', function(e) {
    e.trigger.querySelector('.hs-tooltip').classList.add('hs-tooltip-shown');
    setTimeout(() => {
      e.trigger.querySelector('.hs-tooltip').classList.remove('hs-tooltip-shown');
    }, 1000);
  });
});

const domain = process.client ? window.location.origin : '';
  

</script>

<style>

</style>