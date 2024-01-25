<template>
      <aside class="flex flex-col gap-5 hide-scrollbar md:sticky relative w-full md:mt-[7.5rem] md:top-[7.5rem] self-start animate-fade-up animate-duration-600 animate-delay-600 md:col-span-1 col-span-2 md:overflow-y-scroll md:h-[calc(100vh-8.6rem)] rounded-xl">
        <component v-for="component in currentComponents" :key="component" :is="component" />
      </aside>
    </template>
    
    <script setup>
    import { useRoute } from 'vue-router';
    import CloudSkillsWidget from './CloudSkillsWidget.vue';
    import CreativeSkillsWidget from './CreativeSkillsWidget.vue';
    import LanguagesSkillsWidget from './LanguagesSkillsWidget.vue';
    import AdWidget from './AdWidget.vue';
    import SearchDeveloperWidget from './SearchDeveloperWidget.vue';
    import TechnicalSkillsWidget from './TechnicalSkillsWidget.vue';
    import OtherArticlesWidget from './OtherArticlesWidget.vue';
    import OtherProjectsWidget from './OtherProjectsWidget.vue';
    import RefereesWidget from './RefereesWidget.vue';
    import NewsletterWidget from './NewsletterWidget.vue';
    import ScrollspyWidget from './ScrollspyWidget.vue';
    
    const routeComponentMap = {
      '/blog': [NewsletterWidget, AdWidget],
      '/blog/posts/:id': [ScrollspyWidget, OtherArticlesWidget, NewsletterWidget, AdWidget],
      '/resume': [TechnicalSkillsWidget, CreativeSkillsWidget, CloudSkillsWidget, LanguagesSkillsWidget, RefereesWidget],
      '/projects': [NewsletterWidget, SearchDeveloperWidget],
      '/': [SearchDeveloperWidget, NewsletterWidget, AdWidget],
    };
    
    const currentComponents = computed(() => {
      const route = useRoute().path;
      const matchingRoute = Object.keys(routeComponentMap).find((routeKey) => {
        const regex = new RegExp(`^${routeKey.replace(/:\w+/g, '\\w+')}$`);
        return regex.test(route);
      });
      return matchingRoute ? routeComponentMap[matchingRoute] : [];
    });
    </script>
    
    <style>
    /* Your styles here */
    </style>
    