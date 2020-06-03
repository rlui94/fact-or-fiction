<template>
<!-- https://stackoverflow.com/questions/50659676/how-to-load-image-src-url-in-vuejs-asyncronously -->
  <div id="image-component">
    <img :src="link">
  </div>
</template>

<script>
import UrlMeta from '@/api/UrlMeta'

export default {
  name: 'image-component',
  props: {
      url: String,
  },

  data(){
      return{
      link: "",
    }
  },

  created(){
    this.getLink();
  },

  methods:{
      async getLink(){
          let data = await UrlMeta.getUrlMeta(this.url);
          this.link = data.meta.image;
      }
  }
}
</script>

<style scoped></style>