// require('./bootstrap');

// window.Vue = require('vue').default;

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('header-component', require('./components/HeaderComponent.vue').default);


// import router from "./router";

// const app = new Vue({
//     el: '#app',
//     router
// });

import Vue from 'vue';
import router from './router';

import store from './store';

require('./bootstrap');
import Index from './components/Index';


import VueCodeHighlight from 'vue-code-highlight';

Vue.use(VueCodeHighlight) //registers the v-highlight directive

const app = new Vue({
    el: '#app',
    components:{
        Index
    },
    router,
    store
});



