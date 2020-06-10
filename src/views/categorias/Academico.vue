<template>
<div id="academy">

      
     <router-view />
 
</div>
</template>
<script>
 
  
 import axios from 'axios'
 import notificacion from '../../mixins/notificacion'


export default {
    mixins:[notificacion],  
    data(){
        return{
         
          
        }
    },

    methods:{
     
    },
    created(){
        //this.registersw()
    }
    
}
</script>