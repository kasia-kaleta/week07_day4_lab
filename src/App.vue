<template>
  <div id="app">
    <h1>Brewdog Beers</h1>
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/beers">Beers</router-link> -->

  <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'beer-list'}">Beers</router-link> 

  </nav>
  <router-view :beers="beers" />


    <!-- </nav>
    <router-view /> -->


  </div>
</template>

<script>
import { eventBus } from './main.js';


export default {
  name: 'app',
  data() {
    return{
      beers: [],
      favouriteBeer: null
    };
  },
  mounted(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(beerList => this.beers = beerList)
  }
}
</script>

<style>

</style>
