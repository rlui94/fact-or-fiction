import axios from 'axios'
const url = 'https://restcountries.eu/rest/v2/all';

export default {
    getCountries(){
        return axios.get(url).then(response=>{
            return response.data;
        })
        .catch(error =>{
            console.log('Request failed', error);
        })
    }
}