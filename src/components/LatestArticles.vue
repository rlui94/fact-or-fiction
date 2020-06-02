<template>
  <div id="latest-articles">
    <ul v-for="art in articles" :key="art.id">
      <li>{{ art }}</li>
    </ul>
  </div>
</template>

<script>
import HoaxyAPI from '@/api/Hoaxy'
export default {
  name: 'latest-articles',

  data(){
    return{
      articles: [],
    }
  },

  created(){
    HoaxyAPI.getLatestArticles(2)
      .then(articles =>{
        this.articles = articles
      })
  }
}
</script>

<style scoped></style>