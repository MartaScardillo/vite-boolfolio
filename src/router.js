import { createRouter, createWebHistory } from 'vue-router';

import Homepage from './pages/Homepage.vue';
import ProjectIndex from './pages/projects/Index.vue';
import ProjectShow from './pages/projects/Show.vue';
import Contact from './pages/Contact.vue';
import Portfolio from './pages/Portfolio.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage,
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectIndex,
        },
        {
            path: '/projects/:slug',
            name: 'projects.show',
            props: true,
            component: ProjectShow,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contact,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
        },
    ],
});

export { router };
