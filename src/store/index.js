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

            this.commit('storage')

        },

        borrarRegistro(state, registro){

            if(registro.operador === '+'){
                let index = state.ingresos.indexOf(registro)
                state.ingresos.splice(index, 1);
            }else{
                let index = state.egresos.indexOf(registro)
                state.egresos.splice(index, 1);
            }
            let index = state.total.indexOf(registro)
            state.total.splice(index, 1);

            this.commit('storage')

        },

        cambiarColor(state){
            state.darkTheme = !state.darkTheme
        },

        storage(state){
            (localStorage.setItem("data", JSON.stringify(state.total)));
            (localStorage.setItem("dataI", JSON.stringify(state.ingresos)));
            (localStorage.setItem("dataE", JSON.stringify(state.egresos)));
        },

        recuperarDatos(state){

            let dataInStorage = JSON.parse(localStorage.getItem("data"));
            (dataInStorage) ? state.total = dataInStorage : state.total = state.total

            let dataInStorageI = JSON.parse(localStorage.getItem("dataI"));
            (dataInStorageI) ? state.ingresos = dataInStorageI : state.ingresos = state.ingresos

            let dataInStorageE = JSON.parse(localStorage.getItem("dataE"));
            (dataInStorageE) ? state.egresos = dataInStorageE : state.egresos = state.egresos
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