<template>
    <div class="inicio bg-green d-flex justify-content flex-column">
        
       

     
         <div class="info-search d-flex" :style="{
     'background-image': 'url('+ require('../assets/SVG/newester.svg') +')' ,
             'background-repeat':'no-repeat',
            'background-size':'cover',
           
   }">
         </div>

        <div class="">
            <p class="mb-4 text text-desc text--white text-title">Gou University</p>
             <button class="m-btn m-btn__white mt-2" @click="initApp" ><span class="text tex-title text--blue">Visualizar</span></button>
        </div>

        

    </div>
</template>
<script>
import notification from '../mixins/notificacion'
export default {
    mixins:[notification],
    methods:{
        initApp(){
            this.activeSubcribe()
          this.$router.push('home')
        }
    },
    created(){
 this.registersw()
}
}
</script>