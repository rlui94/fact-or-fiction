<template>
  <div id="latest-articles">
    <ul v-for="art in articles" :key="art.id">
        <li>
            <h5>{{ art.title }}</h5>
            <h6>Domain: {{ art.domain }}</h6>
            <p>Site Tags: <span v-for="tag in art.site_tags" :key="tag.name">{{ tag.name }} </span></p>
        </li>
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