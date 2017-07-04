/**
 * Created by radu.milici on 04/07/2017.
 */
import VueRouter from 'vue-router';
import home from './views/home.vue';
import contact from './views/contact.vue';
import about from './views/about.vue';

const routes = [
    { path: '/', component: home },
    { path: '/contact', component: contact },
    { path: '/about', component: about }
];

export default new VueRouter({ routes });