<template>
  <div id="latest-articles">
    <ul v-for="art in articles" :key="art.id">
        <li>
            <h5><a :href="art.canonical_url">{{ art.title }}</a></h5>
            <image-component :url="art.canonical_url"/>
            <h6>Domain: {{ art.domain }}</h6>
            <p v-if="art.site_tags === null">Site Tags: None</p>
            <p v-else>Site Tags: <span v-for="tag in art.site_tags" :key="tag.name">{{ tag.name }} </span></p>
        </li>
    </ul>
  </div>
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

<style scoped></style>