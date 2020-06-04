<template>
    <b-container id="app" class="mb-5 p-3 bg-primary w-100 h-100 rounded">
      <b-row class="bg-dark text-light rounded mb-5"><b-col><h1>Fact or Fiction?</h1></b-col></b-row>
      <b-row>
        <b-col><top-articles class="mb-5" /></b-col>
      </b-row>
      <b-row>
        <b-col><latest-articles class="mb-5"/></b-col>
      </b-row>
      <b-row>
        <b-col v-if="searchSelected" class="mx-auto"><b-button class="bg-info">Article Search</b-button><b-button @click.stop.prevent="formSwitch" >Bot Checker</b-button></b-col>
        <b-col v-else class="mx-auto"><b-button @click.stop.prevent="formSwitch">Article Search</b-button><b-button  class="bg-info">Bot Checker</b-button></b-col>
      </b-row>
      <b-row>
        <b-col v-if="searchSelected"><search-articles class="mb-5"/></b-col>
        <b-col v-else><bot-checker class="mb-5"/></b-col>
      </b-row>
    </b-container>
</template>

<script>
import LatestArticles from '@/components/LatestArticles.vue'
import TopArticles from '@/components/TopArticles.vue'
import SearchArticles from '@/components/SearchArticles.vue'
import BotChecker from '@/components/BotChecker.vue'

export default {
  name: 'App',
  components: {
    LatestArticles,
    TopArticles,
    SearchArticles,
    BotChecker,
  },
  data() {
    return {
      searchSelected: true,
    }
  },

  methods:{
    formSwitch(){
      if(this.searchSelected){
        this.searchSelected = false;
      }
      else{this.searchSelected = true;}
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
}
</style>
