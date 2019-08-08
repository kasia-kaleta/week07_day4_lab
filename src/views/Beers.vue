<template lang="html">
  <div id="">
    <main-header title='Beers' />

  <div class="main-container">
     <beer-list :beers='beers'></beer-list>
   </div>
 </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import BeerList from '@/components/BeerList';

export default {
  components: {
    'main-header': MainHeader,
    'beer-list': BeerList
  }
}
</script>

<style lang="css" scoped>
</style>
