<template>
  <b-container id="app">
    <b-row>
      <h1>Latest Articles of the Past 2 Hours</h1>
      <latest-articles />
    </b-row>
    <b-row>
      <h1>Top Articles of the Last 30 Days</h1>
      <top-articles />
    </b-row>
    
  </b-container>
</template>

<script>
import LatestArticles from '@/components/LatestArticles.vue'
import TopArticles from '@/components/TopArticles.vue'

export default {
  name: 'App',
  components: {
    LatestArticles,
    TopArticles,
  },
  data() {
    return {
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
