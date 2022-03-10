import Vue from 'vue';
// import Fragment from 'vue-fragment'
// Vue.use(Fragment.Plugin);

// import { Fragment } from 'vue-frag'
import Frag, {Fragment} from 'vue-frag'
Vue.directive('frag', Frag);
Vue.component('fragment', Fragment)

// Лучше не пользовать, так как с этой бадйой не работают транзишны. Дивы рулят
