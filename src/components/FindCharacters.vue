<template>
  <div class="wrapper">
    <div>
      <input type="text" @input="getCharacters()" v-model="name">
    </div>
    <p v-if="isLoading">I am loading characters</p>
    <ul>
      <li v-for="item in characters" :key="item.id">
        <p><b>Name:</b> {{item.name}}</p>
        <p><b>Birth date:</b> {{item.birth_year}}</p>
        <button @click="addFavourite(item)" type="button">Add</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FindCharacters',
  data: function() {
    return {
      name: '',
      isLoading: false,
      characters: []
    }
  },
  methods: {
    getCharacters: function() {
      this.isLoading = true;
      fetch(`https://swapi.co/api/people/?search=${this.name}`)
        .then(res => res.json())
        .then(data => {
          this.isLoading = false
          this.characters = data.results
          
        })
    },
    addFavourite(character) {
     this.$store.dispatch('addFavouriteChar', character)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  padding-top: 30px;
  margin: 0 auto;
  max-width: 700px;
}
  li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
</style>
