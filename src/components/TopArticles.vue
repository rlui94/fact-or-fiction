<template>
  <b-container id="top-articles" class="bg-dark text-light rounded">
    <b-row><b-col><h2>Top Articles</h2><h4>Of the past month:</h4></b-col></b-row>
    <b-row class="mx-auto">
      <b-col sm="auto" v-for="art in articles" :key="art.id">
          <b-card no-body
              style="max-width: 20rem;"
              class="mb-2"
          >    
              <b-card-body>
                  <b-link :to="art.canonical_url">
                      <h5>{{art.title}}</h5>
                      <image-thumbnail :url="art.canonical_url"/>
                  </b-link>
              </b-card-body>
              
              <b-card-text class="text-dark">
                  <h6>Date Captured: {{ truncateDate(art.date_captured) }}</h6>
                  <h6># of Tweets: {{ formatNum(art.number_of_tweets) }}</h6>
                  <p v-if="art.site_type === null">Site Type: none</p>
                  <p v-else>Site Type: {{ art.site_type }} </p>
              </b-card-text>
          </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import HoaxyAPI from '@/api/Hoaxy'
import ImageThumbnail from '@/components/ImageThumbnail'

const maxArticles = 6;

export default {
  name: 'top-articles',
  components: {
      ImageThumbnail,
  },

  data(){
    return{
        articles: [],
    }
  },

  created(){
    HoaxyAPI.getTopArticles()
      .then(result =>{
        this.articles = result.slice(0, maxArticles);
      });
  },

  methods:{
    truncateDate(date_string){
      return date_string.slice(0,10);
    },

    formatNum(num){
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
  },
}
</script>

<style scoped>
</style>