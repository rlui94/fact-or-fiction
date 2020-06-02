import axios from 'axios'
const url = 'https://api-hoaxy.p.rapidapi.com/';
const x_rapidapi_host = "api-hoaxy.p.rapidapi.com";
const proxyurl="https://cors-anywhere.herokuapp.com/"

export default {
    getLatestArticles(past_hours){
    //     fetch("https://api-hoaxy.p.rapidapi.com/latest-articles?past_hours=2", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "api-hoaxy.p.rapidapi.com",
    //             "x-rapidapi-key": process.env.VUE_APP_RAPIDAPI_KEY,
    //         }
    // })
    // .then(response => {
    //     console.log(response);
    //     console.log(response.data);
    //     return response.data;
    // })
    // .catch(err => {
    //     console.log(err);
    // });
        return axios.get(
            proxyurl + url +  "latest-articles?past_hours=" + past_hours,
            {
                headers: {
                    "x-rapidapi-host": x_rapidapi_host,
                    "x-rapidapi-key": process.env.VUE_APP_RAPIDAPI_KEY,
                }
            })
            .then(response=>{
                console.log('Request successful', response);
                console.log('Data', response.data);
                return response.data;
            })
            .catch(error =>{
                console.log('Request failed', error);
            })
    }
}