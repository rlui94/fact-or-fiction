<template>
    <b-container class="bg-dark text-light rounded p-3">
        <b-row><b-col><h4>Is that Twitter user a bot?</h4></b-col></b-row>
        <b-row class="mb-5"><b-col>
            <b-form @submit="onSubmit">
                <label class="sr-only" for="search-input">Twitter User Search:</label>
                <b-form-group 
                    id="search-input-group"
                    
                >
                    <b-form-input
                        id="search-input"
                        v-model="form.query"
                        required
                        placeholder="@definitelynotabot"
                    >
                    </b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Search</b-button>
            </b-form>
        </b-col></b-row>
        <b-container id="results-loading" v-if="loading"><p>Loading...</p></b-container>
        <b-container id="results" v-if="showResults" >
        </b-container>
    </b-container>
</template>

<script>
//import HoaxyAPI from '@/api/Hoaxy'

export default {
    name: "bot-checker",

    data() {
      return {
        showResults: false,
        loading: false,
        form: {
          query:"",
        },
      }
    },

    methods: {
        //temporary
        onSubmit(evt) {
            evt.preventDefault();
            this.loading = true;
            this.loading = false;
            this.showResults = true;
        },
    }
}
</script>

<style scoped>

</style>