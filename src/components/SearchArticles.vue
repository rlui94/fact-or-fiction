<template>
    <b-container>
        <b-row><b-col><h2>Article Search</h2></b-col></b-row>
        <b-row><b-col><h4>Heard about something weird? Research it here!</h4></b-col></b-row>
        <b-row><b-col>
            <b-form>
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
                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
        </b-col></b-row>
    </b-container>
</template>

<script>
export default {
    name: "search-articles",

    data() {
      return {
        form: {
          query:"",
        },
      }
    },
}
</script>

<style scoped>

</style>