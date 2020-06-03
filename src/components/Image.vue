<template>
<!-- https://stackoverflow.com/questions/50659676/how-to-load-image-src-url-in-vuejs-asyncronously -->
  <div id="image-component">
    <img :src="link">
  </div>
</template>

<script>
import UrlMeta from '@/api/UrlMeta'
const img_not_found = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'

export default {
  name: 'image-component',
  props: {
      url: String,
  },

  data(){
      return{
      link: img_not_found,
    }
  },

  created(){
    this.getLink();
  },

  methods:{
      async getLink(){
          let data = await UrlMeta.getUrlMeta(this.url);
          if(data.result.status === "OK"){
              this.link = data.meta.image;
          }
      }
  }
}
</script>

<style scoped></style>