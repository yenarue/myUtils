<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    navbar: NavBar,
  },
}
</script>

<style src="./assets/styles/common.css"></style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* { margin: 0 !important; }

p {
  padding: 10px;
  font-size: 20px;
}
</style>
