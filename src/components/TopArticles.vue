<template>
  <b-container id="top-articles">
    <b-row><h1>Top Articles of the Past Month</h1></b-row>
    <b-row>
      <b-col sm="auto" v-for="art in articles" :key="art.id">
          <b-card no-body
              style="max-width: 20rem;"
              class="mb-2 b-col"
          >    
              <b-card-body>
                  <b-link :to="art.canonical_url">
                      <h4>{{art.title}}</h4>
                      <image-thumbnail :url="art.canonical_url"/>
                  </b-link>
              </b-card-body>
              
              <b-card-text>
                  <h6>Domain: {{ art.domain }}</h6>
                  <p v-if="art.site_tags === null">Site Tags: None</p>
                  <p v-else>Site Tags: <span v-for="tag in art.site_tags" :key="tag.name">{{ tag.name }} </span></p>
              </b-card-text>
          </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import HoaxyAPI from '@/api/Hoaxy'
import ImageThumbnail from '@/components/ImageThumbnail'

const maxArticles = 3;

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

  methods:{},
}
</script>

<style scoped>
</style>