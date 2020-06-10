import Vue from 'vue'
import Vuex from 'vuex'


import actionset from './actions'
import getterset from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    news:[],
    programas:[],
    categorias:[],
    registros:[],
    registrosCategoria:[],
    etiquetas:[],
    trabajos:[],
    areas:[]
},

actions:actionset,
mutations:{
    SET_NEWS (state,posts){
          state.news = posts
    },
    SET_PROGRAMA (state,posts){
          state.programas = posts
    },

    SET_CATEGORIA (state,categorias){
         state.categorias =  categorias
    },
    SET_REGITERS (state,registros){
      state.registros =  registros
 },
 SET_REGITERCATEGORY (state,registros){
  state.registrosCategoria =  registros
},

 
    SET_ETIQUETAS (state,etiquetas){
      state.etiquetas =  etiquetas
   },

   SET_TRABAJOS(state,trabajos){
     state.trabajos = trabajos
   },
   SET_AREAS(state,areas){
     state.areas = areas

   }

},
getters:getterset

})