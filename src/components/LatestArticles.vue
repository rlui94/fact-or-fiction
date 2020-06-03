<template>
  <b-container id="latest-articles">
    <b-row v-for="art in articles" :key="art.id">
        <b-card no-body
            style="max-width: 20rem;"
            class="mb-2 b-col"
        >    
            <b-card-body>
                <b-link :to="art.canonical_url">
                    <h4>{{art.title}}</h4>
                    <image-component :url="art.canonical_url"/>
                </b-link>
            </b-card-body>
            
            <b-card-text>
                <h6>Domain: {{ art.domain }}</h6>
                <p v-if="art.site_tags === null">Site Tags: None</p>
                <p v-else>Site Tags: <span v-for="tag in art.site_tags" :key="tag.name">{{ tag.name }} </span></p>
            </b-card-text>
        </b-card>
    </b-row>
  </b-container>
</template>

<script>
import HoaxyAPI from '@/api/Hoaxy'
import ImageComponent from '@/components/Image'

const maxArticles = 2;

export default {
  name: 'latest-articles',
  components: {
      ImageComponent,
  },

  data(){
    return{
        articles: [],
    }
  },

  created(){
    HoaxyAPI.getLatestArticles(2)
      .then(result =>{
        this.articles = result.slice(0, maxArticles);
      });
  },

  methods:{},
}
</script>

<style scoped>
image-component{
    width:100px;
    margin:auto;
}
</style>