<template>
<fragment>
  
 <h1>Profile</h1>
        <div>
            <h3>Header</h3>
            <h3>{{ profile.username }}</h3>
             <h3>{{ profile.biografia}}</h3>
             <h3>{{ profile.contacto.tel}}</h3>
             <div>
              
             </div>          
    
    </div>
    <div class="">
       
        <hr>
         <h1>skills</h1>
          <div v-for="(service,ix) in services" :key="service.area.nombre + ix " class="">
             <p>skills</p>
            {{ service.area.nombre }}
            </div>
        <hr>
          
        <div v-for="service in services" :key="service.titulo" class="">
           
         
          <span>Servicios</span>
           <div class="shadow b-rounder--2 ml-2">
           <img width="50px" height="50px" :src="service.potho[0]" />
      
           
          <p class="bg-blue">{{ service.titulo }}</p>
           </div>
             
          
        </div>
    </div>

    <h1>
       
    </h1>

    

    </fragment>
</template>
<script>
import axios from 'axios'
export default {
    props:['id_user'],
    data(){
        return{
         profile:[],
         services:[]
        }
    },
    methods:{
        getService(){
         let vm = this
            axios.get(`https://gouapp.herokuapp.com/servicio/usuario/active/${this.$props.id_user}`)
                .then(resp => {
                   
                    const servicio = resp.data;
                    this.services = servicio;
                 

                    
                })
                .catch(err => {
                   
                    console.log(err)
                });
        },
          getUserProfile(){
            let vm = this
        
            axios.get(`https://gouapp.herokuapp.com/usuario/${vm.$props.id_user}`)
                .then(resp => {
                    const servicio = resp.data;
                    this.profile = servicio;
                     this.getService()
                })
                .catch(err => {
                   
                    console.log(err)
                });
        },
        
    },
    mounted(){
        this.getUserProfile()
    }
}
</script>