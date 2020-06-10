import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import Inicio from '../views/inicio'
import Post from '../views/posts.vue'

//categorias
import Registro from '../views/Registro'
//import Noticias from '../views/categorias/Noticias'
import Eventos from '../views/categorias/Eventos'
import Acreditacion from '../views/categorias/Acreditacion'
import Academico from '../views/categorias/Academico'
import All from '../views/categorias/inicio'
//import Search from '../views/search'

//Academico
import AcademiServicioDetalle from '../views/categorias/academico/servicio_detalle'
import AcademicoServicios from '../views/categorias/academico/services'
import PublicacionesPreguntas from '../views/categorias/academico/posts'
import AddPreguntas from '../views/categorias/academico/question'
import AddServicio from '../views/categorias/academico/addServicio'
import PerfilDetalle from '../views/categorias/academico/perfilDetalle' 




Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'inicio',
            component: Inicio
    
            },
             
        {
        path:'/home',
        component: Home,
        props:true,
        children:[
            {
                path:'/',
                name:'all',
                component:All,
                props:true
        
                },

              
          
            /* {
               
               path:'/noticias',
                name:'noticias',
                component:Noticias,
                props:true
            
            },*/
           
            {
                path:'/eventos',
                name:'eventos',
                component:Eventos,
                props:true
                
            },
            {
                path:'/acreditaciòn',
                name:'acreditaciòn',
                component:Acreditacion,
                props:true
                    
            }
        ]},
                {
                path:'/academico',
                component:Academico,
                props:true,
                children:[
                    {
                        path:'/',
                        name:'Servicios',
                        component:AcademicoServicios
                        
                    },
                    {
                        path:'/servicio/detalle',
                        name:'ServicioDetalle',
                        component:AcademiServicioDetalle,
                        props:true
                    },
                    {
                        path:'/preguntas',
                        name:'preguntas',
                        component:PublicacionesPreguntas,
                        props:true
                    },
                    {
                        path:'/preguntas/add',
                        name:'preguntas_add',
                        component:AddPreguntas,
                        props:true
                    },
                    {
                        path:'/servicio/add',
                        name:'addService',
                        component:AddServicio,
                     
                    },
                    {
                        path:'/servicio/perfil/detalle',
                        name:'perfilDetalle',
                        component:PerfilDetalle,
                        props:true
                     
                    }
                ]

            },

        {
        path: '/post/',
        name:'post',
        component:Post
        
        },
        {
            path:'/registro@contenido',
            name:'Registro',
            component:Registro
    
        },

     
       
      
       


         
    ]
})