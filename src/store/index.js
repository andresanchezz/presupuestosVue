import { createStore } from "vuex";

const store = createStore({

    state:{
        darkTheme:false,
        total:[],
        ingresos:[],
        egresos:[]
    },

    mutations:{
        agregarRegistro(state, registro){   

            if(registro.operador === '+'){
                (registro.valor>0)
                ? ''
                : registro.valor *= -1  
                state.ingresos.push(registro)
            }else{
                (registro.valor>0)
                ? registro.valor *= -1
                : ''
                state.egresos.push(registro)
            }

            state.total.push(registro)
            console.log(state.total);
        },

        borrarRegistro(state, registro){

            if(registro.operador === '+'){
                let index = state.ingresos.indexOf(registro)
                state.ingresos.splice(index, 1)
            }else{
                let index = state.egresos.indexOf(registro)
                state.egresos.splice(index, 1)
            }
            
            let index = state.total.indexOf(registro)
            state.total.splice(index, 1)
        },

        cambiarColor(state){
            state.darkTheme = !state.darkTheme
        }

    },

    getters:{
        presupuestoTotal(state){
            return state.total.reduce((acc, item)=>acc + item.valor, 0)
        },
        totalIngresos(state){
           return state.ingresos.reduce((acc, item)=> acc + item.valor, 0).toLocaleString("es-CO", {style: "currency", currency: "COP"}) 
        },
        totalEgresos(state){
            return state.egresos.reduce((acc, item)=> acc + item.valor, 0).toLocaleString("es-CO", {style: "currency", currency: "COP"})
        }
    }

})

export default store