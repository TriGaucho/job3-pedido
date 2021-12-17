import axios from 'axios';

// const url = process.env.VUE_APP_API_URL
const versaoAPI = 'Api/v2/';
const apiKey = '19990fa5b69f53dbe8b9f4e23ccf4afd4ed408b4dccc54e9bbebfd9c957c60f40ffcabc2';

export default {
    get: (modulo, callback) => {
        const urlBING = versaoAPI + modulo + '?apikey=' + apiKey
        axios.get(urlBING).then((response) => {
            if (callback) {
                callback(response);
            }
        })
    },

    post: (modulo, obj, callback) => {
        const urlBING =  versaoAPI + modulo;
        const data = new FormData()
        data.append('apikey', apiKey)
        data.append('xml', obj)
        axios.post(urlBING, data, { headers: {'Content-Type': 'multipart/form-data'}}).then((response) => {
            if (callback) {
                callback(response);
            }
        })
    }
}