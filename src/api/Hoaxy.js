import axios from 'axios';
const url = 'https://api-hoaxy.p.rapidapi.com/';
const x_rapidapi_host = "api-hoaxy.p.rapidapi.com";
const proxyurl="https://cors-anywhere.herokuapp.com/";

export default {
    /* returns
    {articles:{}
    num_of_entries:num
    status: str}
    */
    getLatestArticles(past_hours){
        return axios.get(
            proxyurl + url + "latest-articles?past_hours=" + past_hours,
            {
                headers: {
                    "x-rapidapi-host": x_rapidapi_host,
                    "x-rapidapi-key": process.env.VUE_APP_RAPIDAPI_KEY,
                }
            })
            .then(response=>{
                console.log('Hoaxy latest request successful', response);
                console.log('Data', response.data);
                return response.data.articles;
            })
            .catch(error =>{
                console.log('Request failed', error);
            })
    },

    getTopArticles(){
        return axios.get(
            proxyurl + url + "top-articles",
            {
                headers: {
                    "x-rapidapi-host": x_rapidapi_host,
                    "x-rapidapi-key": process.env.VUE_APP_RAPIDAPI_KEY,
                },
                query:{
                    "most_recent":"true",
                }
            })
            .then(response=>{
                console.log('Hoaxy top request successful', response);
                console.log('Data', response.data);
                return response.data.articles;
            })
            .catch(error =>{
                console.log('Request failed', error);
            })
    },

    searchArticles(query_str){
        return axios.get(
            proxyurl + url + "articles",
            {
                headers: {
                    "x-rapidapi-host": x_rapidapi_host,
                    "x-rapidapi-key": process.env.VUE_APP_RAPIDAPI_KEY,
                    "useQueryString": true,
                },
                params:{
                    "sort_by":"relevant",
                    "use_lucene_syntax":"true",
                    "query": query_str,
                },
            })
            .then(response=>{
                console.log('Hoaxy article request successful', response);
                console.log('Data', response.data);
                return response.data.articles;
            })
            .catch(error =>{
                console.log('Request failed', error);
            })
    },
}