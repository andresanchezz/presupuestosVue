<template>
    <div class="presupuesto">
        <h2>Total disponible:</h2>
        <h2 :style="presupuesto >= 0 ? 'color:#1e81b0' : 'color:#034077'">{{
            presupuesto.toLocaleString("es-CO", {style: "currency", currency: "COP"}) 
        }}</h2>
        <h3>Total ingresos: </h3>
        <span style="color:green">{{ ingreso }}</span>
        <h3>Total egresos: </h3>
        <span style="color:red">{{ egreso }}</span>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue'

const store = useStore();

const presupuesto = computed(() => store.getters.presupuestoTotal)
const ingreso = computed(() => store.getters.totalIngresos)
const egreso = computed(() => store.getters.totalEgresos)

</script>

<style lang="scss" scoped>
.presupuesto {
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    align-items: center;

}
</style>