import Vue from 'vue';
import Vuex from 'vuex';
import ModalModule from './modal.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        modal: ModalModule(),
    },
});
