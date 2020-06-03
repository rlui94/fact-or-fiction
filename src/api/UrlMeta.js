import axios from 'axios'

const api_url = 'https://api.urlmeta.org/';
const proxyurl="https://cors-anywhere.herokuapp.com/"

export default{
    getUrlMeta(address){
        let b64Cred = btoa(process.env.VUE_APP_URLMETA_EMAIL + ':' + process.env.VUE_APP_URLMETA_KEY)
        return axios.get(
            proxyurl + api_url + "?url=" + address,
            {
                headers:{
                    'Authorization': 'Basic ' + b64Cred,
                }
            }
        )
        .then(response=>{
            console.log('URL Meta request successful', response);
            return response.data;
        })
        .catch(error =>{
            console.log('Request failed', error);
        })
    }
}