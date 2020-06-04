<template>
  <b-container id="app" class="mb-5">
    <b-row><b-col><h1>Fact or Fiction?</h1></b-col></b-row>
    <b-row>
      <b-col><top-articles class="mb-5" /></b-col>
    </b-row>
    <b-row>
      <b-col><latest-articles class="mb-5"/></b-col>
    </b-row>
    <b-row>
      <b-col><search-articles class="mb-5"/></b-col>
    </b-row>
    
  </b-container>
</template>

<script>
import LatestArticles from '@/components/LatestArticles.vue'
import TopArticles from '@/components/TopArticles.vue'
import SearchArticles from '@/components/SearchArticles.vue'

export default {
  name: 'App',
  components: {
    LatestArticles,
    TopArticles,
    SearchArticles,
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
