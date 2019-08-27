import Vue from 'vue';

// plugins
import router from './router/router';
import App from './app.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
export default new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
