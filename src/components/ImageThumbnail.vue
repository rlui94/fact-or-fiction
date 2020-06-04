<template>
<!-- https://stackoverflow.com/questions/50659676/how-to-load-image-src-url-in-vuejs-asyncronously -->
  <div id="image-thumbnail">
    <b-img :src="link" :alt="link" fluid></b-img>
  </div>
</template>

<script>
import UrlMeta from '@/api/UrlMeta'
const loading_img = 'https://www.publicdomainpictures.net/pictures/260000/velka/loading-symbol.jpg'
const img_not_found = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
const no_api_call = true;
const alt_string = "Image of ";

export default {
  name: 'image-thumbnail',
  props: {
      url: String,
  },

  data(){
      return{
      link: loading_img,
      alt_string: alt_string,
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
          this.alt_string = alt_string + this.link;
      }
  }
}
</script>

<style scoped></style>