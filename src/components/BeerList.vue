<template lang="html">

    <div class="">
      <ul>
        <li v-for="(beer, index) in beers">{{beer.name}}</li>
      </ul>
    </div>




</template>

<script>
export default {
  name: 'beer-list',
  props: ['beers']
}
</script>

<style lang="css" scoped>
</style>
