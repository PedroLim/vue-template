import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

// Components
// import components here
import HelloWorld from '@components/hello-world/HelloWorld';

Vue.use(Meta);
Vue.use(Router);

const router = new Router({
    linkExactActiveClass: 'is-active',
    routes: [
        {
            name: 'HelloWorld',
            path: '/',
            component: HelloWorld
        }
    ],
});

export default router;
