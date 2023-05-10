<template>
  <TheMenu />
  <HomePage/>
</template>

<script>
import HomePage from './pages/HomePage';
import TheMenu from './components/TheMenu.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    TheMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
