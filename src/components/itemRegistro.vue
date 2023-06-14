<template>
    <tr>
        <td><span>{{item}}</span></td>
        <td>{{valor.toLocaleString("es-CO", {style: "currency", currency: "COP"})}}</td>
        <td>{{fechaA}}</td>
        <td>
            <i class="fa-solid fa-trash"></i>
        </td>
    </tr>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const props = defineProps({
    item:String,
    valor:Number,
})



const fechaA = ref()

onMounted(()=>{
    const fecha = new Date()
    fechaA.value = fecha.toLocaleString()
})

</script>

<style lang="scss" scoped>
tr{
    line-height: 2;
    word-break: break-all;
    font-size: clamp(0.9rem, 1.1vw, 1.5rem);
}
</style>