<template>
  <div>
    <div :class="darkTheme ? 'app-dark' : 'app' ">
      <i class="fa-solid fa-droplet drop" @click="cambiarColor"></i>
      <HomeView/>
    </div>
  </div>
</template>

<script setup>  
import { computed } from 'vue';
import { useStore } from 'vuex';
import HomeView from './views/HomeView.vue';

const store = useStore()

const darkTheme = computed(()=>store.state.darkTheme)

const cambiarColor =()=>{
  store.commit('cambiarColor')
}

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

.app{

  background: rgb(231, 231, 231);
  h2, h3, td, th, span{
    color: rgb(66, 66, 66);
    font-weight: bold;
  }
  .drop{
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.4rem;
  }
  input[type="submit"]{
    background: rgb(58, 58, 58);
    font-weight: bold;
    color: white;
  }
}

.app-dark{

  background: rgb(22, 22, 22);
  h2, h3, td, th, span{
    color: rgb(204, 204, 204);
  }
  .drop{
    color: white;
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.4rem;
  }
  input[type="submit"]{
    background: rgb(255, 255, 255);
    font-weight: bold;
  }
}




</style>