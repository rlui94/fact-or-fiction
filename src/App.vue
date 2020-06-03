<template>
  <div id="app">
    <h1>Latest Articles</h1>
    <latest-articles />
    
  </div>
</template>

<script>
import LatestArticles from '@/components/LatestArticles.vue'

export default {
  name: 'App',
  components: {
    LatestArticles,
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
