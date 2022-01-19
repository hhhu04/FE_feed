<template>
  <div id="app" >
        <Header />
        <div id="content" class="content">

            <router-view></router-view>

        </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'


export default {

  name: 'App',
  components: {
    Header,
  },
  watch: {
    $route (to, from) {
      if(to.path != from.path) {
          this.$router.go()
      }
    }
  }
  
  
}
</script>

<style>

</style>
