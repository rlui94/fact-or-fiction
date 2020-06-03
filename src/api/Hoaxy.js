import axios from 'axios'
const url = 'https://api-hoaxy.p.rapidapi.com/';
const x_rapidapi_host = "api-hoaxy.p.rapidapi.com";
const proxyurl="https://cors-anywhere.herokuapp.com/"

export default {
    /* returns
    {articles:{}
    num_of_entries:num
    status: str}
    */
    getLatestArticles(past_hours){
        return axios.get(
            proxyurl + url +  "latest-articles?past_hours=" + past_hours,
            {
                headers: {
                    "x-rapidapi-host": x_rapidapi_host,
                    "x-rapidapi-key": process.env.VUE_APP_RAPIDAPI_KEY,
                }
            })
            .then(response=>{
                console.log('Hoaxy request successful', response);
                console.log('Data', response.data);
                return response.data.articles;
            })
            .catch(error =>{
                console.log('Request failed', error);
            })
    }
}