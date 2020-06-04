<template>
    <b-container class="bg-dark text-light rounded p-3">
        <b-row><b-col><h2>Article Search</h2><h4>Heard about something you're unsure of? Found out more!</h4></b-col></b-row>
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
        <b-container id="results-loading" v-if="loading"><p>Loading...</p></b-container>
        <b-container id="results" v-if="showResults" >
            <b-row v-for="art in shownArticles" :key="art.id" class="w-75 mx-auto">
                <b-col class="card pb-2 pt-2 text-dark">
                    <a :href="art.canonical_url"><h6 class="card-title">{{ art.title }}</h6></a>
                    <span class="card-text">Site Score: {{ art.score }} </span>
                    <p class="card-text">Site Type: {{ art.site_type }}</p>
                </b-col>
            </b-row>
            <b-row class="pt-2">
                <b-col>
                <b-button @click.stop.prevent="prevBatch" variant="secondary">Previous</b-button>
                <b-button @click.stop.prevent="nextBatch" variant="secondary">Next</b-button>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import HoaxyAPI from '@/api/Hoaxy'
const maxArticles = 8

export default {
    name: "search-articles",

    data() {
      return {
        showResults: false,
        loading: false,
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
            this.loading = true;
            this.articles = await HoaxyAPI.searchArticles(this.form.query);
            this.shownArticles = this.articles.slice(0, maxArticles);
            this.loading = false;
            this.showResults = true;
        },

        nextBatch(){
            if(this.index < this.articles.length && this.index + maxArticles <= this.articles.length){
                let curr = this.index;
                this.index = this.index + maxArticles;
                this.shownArticles = this.articles.slice(curr, this.index);
            }
        },

        prevBatch(){
            if(this.index > 0 && this.index - maxArticles >= 0){
                let curr = this.index;
                this.index = this.index - maxArticles;
                this.shownArticles = this.articles.slice(this.index, curr);
            }
        },
    }
}
</script>

<style scoped>

</style>