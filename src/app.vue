<template>
  <div id="app">
    <v-header></v-header>
    <router-view keep-alive></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vHeader from './components/v-header.vue'
  import vFooter from './components/v-footer.vue'
  export default {
    name: 'app',
    watch: {
      '$route'(to, from){
        if(to.path === '/'){
          console.log('s');
        }
      }
    },
    components: {vHeader, vFooter}
  };
</script>
