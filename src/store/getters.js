import axios from 'axios'

const getters = {
  getFalcultades:(state)=> (facultad)=>{
    if(facultad === null){
      return state.programas.filter(programa => programa)
    }else{
      return state.programas.filter(programa => programa.facultad === facultad)
    }
  
  }

}

export default getters