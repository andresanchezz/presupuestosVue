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