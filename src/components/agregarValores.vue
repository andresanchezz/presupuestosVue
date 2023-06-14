<template>
    <div class="valores">
        <input v-model="item" type="text" placeholder="Razón del ingreso/egreso">
        <input v-model="valor" type="number" placeholder="cuánto">
        <select  v-model="operador" id="">
            <option value="+">Ingreso</option>
            <option value="-">Gasto</option>
        </select>
        <input type="submit" value="agregar" @click="agregarRegistros">
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useStore} from 'vuex';

const store = useStore();

const item = ref('')
const valor = ref()
const operador = ref('+')


const agregarRegistros =()=>{

    const datos = {
        item: item.value,
        valor: valor.value,
        operador: operador.value
    }

    store.commit('agregarRegistro', datos)

    item.value = '',
    valor.value = ''

}

</script>

<style lang="scss" scoped>
.valores {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem;
    input,
    select {
        text-transform: uppercase;
        outline: none;
        margin: 1rem;
        padding: 0.4rem;
        width: 15rem;
        &::placeholder{
            text-transform: uppercase;
        }
    }
    select,
    input[type="submit"] {
        width: 6rem;
        text-align: center;
    }
    input[type="submit"]{
        padding: 0.6rem;
        border: none;
        text-transform: uppercase;
        &:hover{
            background: gray;
            color: white;
        }
    }
}
</style>