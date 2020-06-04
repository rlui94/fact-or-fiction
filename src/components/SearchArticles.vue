<template>
    <b-container>
        <b-row><b-col><h2>Article Search</h2></b-col></b-row>
        <b-row><b-col><h4>Heard about something you're unsure of? Research it here!</h4></b-col></b-row>
        <b-row class="mb-5"><b-col>
            <b-form @submit="onSubmit">
                <label class="sr-only" for="search-input">Search Terms:</label>
                <b-form-group 
                    id="search-input-group"
                    
                >
                    <b-form-input
                        id="search-input"
                        v-model="form.query"
                        required
                        placeholder="pizzagate AND Clinton"
                    >
                    </b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Search</b-button>
            </b-form>
        </b-col></b-row>
        <b-container id="results" v-if="showResults" >
            <b-row v-for="art in shownArticles" :key="art.id">
                <b-col class="card pb-2 pt-2">
                    <a :href="art.canonical_url"><h5 class="card-title">{{ art.title }}</h5></a>
                    <h6 class="card-text">Site Score: {{ art.score }}</h6>
                    <h6 class="card-text">Site Type: {{ art.site_type }}</h6>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import HoaxyAPI from '@/api/Hoaxy'
const maxArticles = 5

export default {
    name: "search-articles",

    data() {
      return {
        showResults: false,
        form: {
          query:"",
        },
        articles: [],
        shownArticles: [],
        index:0,
      }
    },

    methods: {
        async onSubmit(evt) {
            evt.preventDefault();
            this.articles = await HoaxyAPI.searchArticles(this.form.query);
            this.shownArticles = this.articles.slice(0, maxArticles);
            this.showResults = true;
        },

        nextBatch(){
            let curr = this.index;
            this.index = this.index + maxArticles;
            this.shownArticles = this.articles.slice(curr, this.index);
        },

        prevBatch(){
            let curr = this.index;
            this.index = this.index - maxArticles;
            this.shownArticles = this.articles.slice(this.index, curr);
        },
    }
}
</script>

<style scoped>

</style>