import Vue from '../node_modules/vue/dist/vue.esm';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

import routes from './routes';

import AppNavComponent from './components/app-nav.vue';

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
	routes
});

const app = new Vue({
	el: '#app',
	components: {
		'app-nav': AppNavComponent
	},
	router
});
