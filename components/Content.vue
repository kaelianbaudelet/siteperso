<template>

<article class="col-span-2 mt-[6.3rem] animate-fade-up animate-duration-1000 animate-delay-1000">
    <div class="space-y-5 relative gap-5 mt-5">
        
            
                <component :is="currentComponent" />
           
        
    </div>
</article>
    
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import Blog from './Blog.vue';
import PersonalDescription from './PersonalDescription.vue';
import Resume from './Resume.vue';
import Projects from './Projects.vue';
import Article from './Article.vue';

const routeComponentMap = {
    '/blog/posts/:id': Article,
    '/blog': Blog,
    '/resume': Resume,
    '/projects': Projects,
    '/': PersonalDescription,
};

const currentComponent = computed(() => {
    const route = useRoute().path;
    const matchingRoute = Object.keys(routeComponentMap).find((routeKey) => {
        const regex = new RegExp(`^${routeKey.replace(/:\w+/g, '\\w+')}$`);
        return regex.test(route);
    });
    return matchingRoute ? routeComponentMap[matchingRoute] : PersonalDescription;
});
</script>

<style>
/* Your styles here */
</style>