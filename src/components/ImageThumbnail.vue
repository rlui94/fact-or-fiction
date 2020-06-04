<template>
<!-- https://stackoverflow.com/questions/50659676/how-to-load-image-src-url-in-vuejs-asyncronously -->
  <div id="image-thumbnail">
    <b-img :src="link" fluid></b-img>
  </div>
</template>

<script>
import UrlMeta from '@/api/UrlMeta'
const img_not_found = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
const no_api_call = true;

export default {
  name: 'image-thumbnail',
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
          if(no_api_call){
            this.link = img_not_found;
          }
          else{
            let data = await UrlMeta.getUrlMeta(this.url);
            if(data.result.status === "OK" && typeof data.meta.image != "undefined"){
                this.link = data.meta.image;
            }
          }
      }
  }
}
</script>

<style scoped></style>