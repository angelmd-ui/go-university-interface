<template>
    <div>
        <h1>Preguntas</h1>
        <div class="d-flex"><span class="mr-2">Todas</span> / <span>Tus post</span></div>
               <!--Posts--->  
               <div class="translatex p-1" >
                   <h3>Posts</h3>
            <div v-for="(post,index) in posts" :key="index" class="p-1 shadow b-radius--2 mt-1" >
                <h2 class="text text--blue">{{ post.titulo }}</h2>
                <hr>
                <div>
                    <span class="bg-blue  text--white" @click="openModal(post._id)">Comentar</span>
                    <h4>Respuestas</h4>
                    <div class="mt-2">
                        <div v-if="post.responses.length <= 0">
                           <p>No hay comentarios</p>
                        </div>
                      <div v-else v-for="(response,res) in post.responses" :key="res" class="mt-2">
                          <span>
                             {{ response.author.username }}
                          </span>
                          <p >
                            {{ response.comentario }}
                          </p>
                      </div>
                    </div>
                </div>

            </div>
                </div>

                <Modal v-if="modal"  @closet="modal = false">
                    <div slot="message">
                        <h1 class="text--white">Comentar</h1>
                        <h4>Quieres comentar</h4>
                        <textarea rows="9" placeholder="Comentar....." v-model="comentario.mensaje" ></textarea>
                        <button @click="comment">Comentar</button>
                    </div>
                </Modal>
    </div>
</template>
<script>
//Library
import axios from 'axios'
import Modal from '../../../components/messages'
export default {
    components:{
     Modal
    },
    data(){  
      return{
          posts:[],
          comentario:{
           mensaje:'',
           author:'5e8e6925839d5e122f814bf1'
          },
          modal:false,
          id_post:''
      }
    },
    
    //Caundo se comenta un posts el usuario que se cargue solamente  los comentario del pots comentado
    methods:{
         getPosts(){
            axios.get('https://gouapp.herokuapp.com/service/posts')
                .then(resp => {
                   
                    const posts= resp.data;
                    this.posts = posts
                    
                })
                .catch(err => {
                   
                    console.log(err)
                });
        },
       
       openModal(id_post){
         this.modal = true
         this.id_post = id_post
       },
        comment(){
            this.modal = false
            const comentario = {
                comentario:this.comentario.mensaje,
                author:this.comentario.author
            }
          axios.post(`https://gouapp.herokuapp.com/service/post/${this.id_post}/comentario`,comentario)
           .then(resp => {
                   
                    const posts= resp.data;
                    this.getPosts()
                    console.log(posts)
                    
                })
                .catch(err => {
                   
                    console.log(err)
                });
        }
    },
    mounted(){
        this.getPosts()
    }
}
</script>