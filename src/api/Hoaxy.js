import axios from 'axios';
const url = 'https://api-hoaxy.p.rapidapi.com/';
const x_rapidapi_host = "api-hoaxy.p.rapidapi.com";
const proxyurl="https://cors-anywhere.herokuapp.com/";
const useProxy = true;

export default {
    /* returns
    {articles:{}
    num_of_entries:num
    status: str}
    */
    getLatestArticles(past_hours){
        let api_url = "";
        if(useProxy){ api_url = proxyurl + url + "latest-articles?past_hours=" + past_hours}
        else{api_url = url + "latest-articles?past_hours=" + past_hours}
        return axios.get(
            api_url,
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
        let api_url = "";
        if(useProxy){ api_url = proxyurl + url + "top-articles"}
        else{api_url = url + "top-articles"}
        return axios.get(
            api_url,
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
        let api_url = "";
        if(useProxy){ api_url = proxyurl + url + "articles"}
        else{api_url = url + "articles"}
        return axios.get(
            api_url,
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