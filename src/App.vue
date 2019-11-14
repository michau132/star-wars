<template>
  <div id="app">
    <router-link to="/find" style="margin-right:20px;">Find characters</router-link>
    <router-link to="/favourite">Favourite characters</router-link>
    <router-view/>
    
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  border-bottom: 1px solid black;
}
</style>
