import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import mq from './plugins/MediaPlugin';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    mq,
    render: (h) => h(App),
}).$mount('#app');
