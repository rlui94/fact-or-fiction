<template>
  <b-container id="latest-articles" class="bg-dark text-light rounded">
    <b-row><b-col><h2>Latest Articles</h2><h4>Of the past {{hours}} hours:</h4></b-col></b-row>
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
                  <h6>Domain: <a :href="domainToUrl(art.domain)">{{ art.domain }}</a></h6>
                  <p v-if="art.site_tags === null">Site Tags: none</p>
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
const hours = 3;

export default {
  name: 'latest-articles',
  components: {
      ImageThumbnail,
  },

  data(){
    
    return{
      articles: [],
      hours: hours,
    }
  },

  created(){
    HoaxyAPI.getLatestArticles(this.hours)
      .then(result =>{
        this.articles = result.slice(0, maxArticles);
      });
  },

  methods:{
    domainToUrl(domain){
      return "https://"+domain;
    }
  },
}
</script>

<style scoped>
</style>