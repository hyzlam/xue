import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import * as getters from "./getters"
import state from  './state'
import mutations from './mutations'
import * as actions from "./actions"
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions

});
