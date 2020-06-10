<template>
  <div id="app" class="">
    
    
    

    <router-view />
 

       <button @click="$router.push('/home')">Home</button> 
      

  </div>
</template>

<script>

 
import axios from 'axios'


  

export default {
  name: 'app',

  components: {
     
  },
 

 
}
</script>

<style lang="scss" src="./assets/scss/main.scss">

</style>
