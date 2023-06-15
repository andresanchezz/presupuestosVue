<template>
    <main>
        <presupuestoTotal />
        <agregarValores />
        <div class="registro">

            <div class="ingresos">
                <h3>Ingresos</h3>
                <div>
                    <table>
                        <tr>
                            <th>item</th>
                            <th>Total</th>
                            <th>Fecha</th>
                            <th>x</th>
                        </tr>
                        <itemRegistro v-for="registro in registros" :key="registro.item"  
                    :registro="registro"
                    v-show="registro.valor > 0" />
                    </table>
                </div>
            </div>

            <div class="egresos">
                <h3>Egresos</h3>
                <table>
                    <tr>
                        <th>item</th>
                        <th>Total</th>
                        <th>Fecha</th>
                        <th>x</th>
                    </tr>
                    <itemRegistro v-for="registro in registros" :key="registro.item"  
                    :registro="registro"
                    v-show="registro.valor < 0" />
                </table>
            </div>

        </div>
    </main>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import presupuestoTotal from '../components/presupuestoTotal.vue';
import agregarValores from '../components/agregarValores.vue';
import itemRegistro from '../components/itemRegistro.vue';

const store = useStore()
const registros = computed(() => store.state.total)

onMounted(()=>{
    store.commit('recuperarDatos')
})


</script>

<style lang="scss" scoped>
main {
    text-transform: uppercase;
    padding: 2rem;
    overflow: auto;
    min-height: 100vh;
    flex-direction: column;
    text-align: center;

    .registro {
        justify-content: space-around;
        flex-wrap: wrap;
        display: flex;
        .ingresos,
        .egresos {
            margin: 1rem;
            flex: 1 1 0;
            padding: 1rem 0;
            align-items: center;
            border-bottom: 1px solid rgb(187, 187, 187);

            h3 {
                margin-bottom: 0.5rem;
            }

            table {
                width: 100%;

                th,
                td {
                    padding: 0.6rem 1.2rem;
                }
            }
        }
    }
}
</style>