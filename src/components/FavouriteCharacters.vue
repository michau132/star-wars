<template>
  <ul>
    <p v-if="this.$store.getters.getFavouriteChars.length === 0">You need to add your favourite characters</p>
    <li v-for="item in this.$store.getters.getFavouriteChars" :key="item.url">
      <p><b>Name:</b> {{item.name}}</p>
      <p><b>Birth date:</b> {{item.birth_year}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FavouriteCharacters',
}
</script>

<style scoped>

</style>
