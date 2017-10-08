import Vue from '../node_modules/vue/dist/vue.esm';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

// Require static files to be bundled.
require('../node_modules/vuetify/dist/vuetify.min.css');

Vue.use(Vuetify);

const router = new VueRouter({
	routes: require('./routes')
});

const app = new Vue({
	el: '#app',
	router
});
