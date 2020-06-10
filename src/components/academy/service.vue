<template>
<div class="">
<div v-if="!loader">
  <h1 class="text text-normal text--purple">{{ title }}</h1>
           <div v-if="services.lenght !== 0">
           
       
        <div v-for="(service,index) in services" :key="index" class="service-card translatex shadow b-rounder--2 mt-3" >
         <!-- <div class="service-card__user ">        
           <div class="service-card__user-header d-flex ">
             <div>
               <img class="circle mr-2" :src="service.usuario.photo" />
             </div>
            
             <div class="d-flex flex-column d-flex-1">
              <span class="text text-normal text--purple ">{{ service.titulo }}</span>
                  <div class="d-flex">
             <span class="text text-medium text--black-light">{{ service.usuario.username }}--</span> 
             <span class="text text-medium text--black-light">{{ service.usuario.contacto.tel }}</span>
            </div>
             </div>
             
            <div class="d-flex justify-content--end" >
                  <div class="user-icon-call bg-green d-flex justify-content ">
               
                      <font-awesome-icon class="text text-medium text--white "
              :icon="['fa','phone-alt']"  />
              
                </div>
            </div>
  
           </div>
             
          </div>-->
          <div class="service-card__user ">        
           <div class="service-card__user-header d-flex flex-column  align-items">
             <div class=" d-flex flex-column justify-content">
              
               <img class="circle mr-2" :src="service.usuario.photo" />
                <span class="text text-normal text--blue ">{{ service.titulo }}</span>
                      <div class="d-flex">
             <span class="text text-medium text--black-light">{{ service.usuario.username }}--</span> 
             <span class="text text-medium text--black-light mr-2">{{ service.usuario.contacto.tel }}</span>
             
      
            </div>
           
                 <div>
             <rate :length="5" :value="2" :disabled="true" />
          </div>
             </div>
               </div>
        
             
          </div>
          <div class="service-card__body d-flex justify-content" >

            <div  class="service-card-photos " >

          <carousel :nav="false" :dots="true" :responsive="{0:{items:4,touchDrag:true,mouseDrag:true}}">
               <div class="service-card-photos__item mr-2" v-for="(photo,i) in service.potho" :key="i"  @click="$emit('viewDetails',{params:{photo:photo,title:''}})" >
                 <img  :src="photo" class="b-rounder--3 service-card-photos__img" />
               
               </div>
          </carousel>  
          </div>
           
          </div>
         
           
          <div class="service-card__action d-flex justify-content--end">
           <span style="padding:.2em" class=" b-rounder--3 text text-medium bg-outline--blue text--blue mr-2" @click="perfil(service.usuario._id)"> Ver perfil</span>
          <span style="padding:.2em" class="b-rounder--3  text text-medium bg-outline--blue text--blue mr-2" @click="details(service)" >detalle servicio</span>
           <a style="padding:.1em .4em" class="b-rounder--4  text text-medium bg-green text--white d-flex " :href="'https://wa.me/'+service.usuario.contacto.tel" >
                mensage
                            <div class="user-icon-call bg-white d-flex justify-content ml-2" >
               
                      <font-awesome-icon class=" text text-medium text--green "
              :icon="['fa','phone-alt']"  />
              
                </div>
                 </a>
          </div>
         
        </div>
          
  </div> 
 
  
 </div>
<h1>No hay servicios</h1>
 
 </div>
</template>
<script>
import axios from 'axios'
import Spinner from 'vue-spinner-component/src/Spinner.vue'
import carousel from 'vue-owl-carousel'
import postDetails from '../PostDetalle'

export default {
    props:['title'],
    components:{
      Spinner,
      carousel,
      postDetails
    },
    data(){
        return{
          services:[],
          loader:true
        }
    },
    methods:{
          getServices(id_area,id_work){
             
             const vm = this
                axios.get(`https://gouapp.herokuapp.com/servicio/${id_area}/${id_work}`)
                .then(resp => {
                  
                    const service = resp.data;
                    console.log(resp)
                    vm.services = service
                    vm.loader = false
                    
                    
                })
                .catch(err => {
                    console.log(err)
                }); 
        },
        details(service){
             this.$router.push({name:'ServicioDetalle',params:{detalle:service}})
        },
        perfil(id){
           this.$router.push({name:'perfilDetalle',params:{id_user:id}})
        }
    }
}
</script>