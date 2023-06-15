<template>
    <tr>
        <td><span>{{registro.item}}</span></td>
        <td>{{registro.valor.toLocaleString("es-CO", {style: "currency", currency: "COP"})}}</td>
        <td>{{fechaA}}</td>
        <td>
            <i class="fa-solid fa-trash" @click="borrarRegistros(registro)"></i>
        </td>
    </tr>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

defineProps({
    registro:{
        type:Object,
        required:true
    }
})

const borrarRegistros =(registro)=>{
    store.commit('borrarRegistro', registro)
}

let fechaA = ref()

onMounted(()=>{
    
    let fecha = new Date()
    let fechaActual = fecha.toLocaleString()

    if(!fechaA){
        fechaA = fechaActual
    }else{
        fechaA = fechaA
    }

})


</script>

<style lang="scss" scoped>
tr{
    line-height: 2;
    word-break: break-all;
    font-size: clamp(0.9rem, 1.1vw, 1.5rem);
}
</style>