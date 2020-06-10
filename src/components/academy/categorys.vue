<template>
     <div  id="category-services" class=" position-fixed position-move__top-0 position-move__left-0 d-flex flex-column bg-green">
            <!--Trabajos-->
            <div class="" v-if="active == 'Trabajos'">
                <h3>Trabajos</h3>
               <span @click="$emit('closet')" >closet</span>
               <div v-if="trabajos.length === 0 ">
                 <h1>no found works</h1>
               </div>
            <div v-else v-for="(trabajo,index) in trabajos" :key="index" @click="viewService(trabajo._id,trabajo.nombre)">
                <h2>{{ trabajo.nombre }}</h2>

            </div>
                </div>

                  <!--Areas--->  
               <div  class="" v-if="active == 'Areas'">
                   <h3>Areas</h3>
                   <span @click="$emit('closet')" >closet</span>
            <div v-for="(area,index) in areas" :key="index" @click="viewService(area._id,area.nombre)">
                <h2>{{ area.nombre }}</h2>

            </div>
                </div>

        </div>
</template>
<script>
 import { mapState } from'vuex'
export default {
    props:['active'],
    data(){
        return{
          id_area:'all'
        }
    },
    methods:{
         viewService(id,name){
             const { active } = this.$props
             this.id_area = id
             const category ={id,name}
          this.$emit('categoriaActive',category)
             
          
           if(active === 'Areas'){
               this.$store.dispatch('trabajosData',this.id_area)
           }
                
        
         
        
        },
      
       
       
    },
    mounted(){
       
               if(this.active === 'Areas'){
              
                   this.$store.dispatch('areasData')
                  
               }
    },
     computed:{
        ...mapState(['trabajos','areas'])
    },
  
    
}
</script>