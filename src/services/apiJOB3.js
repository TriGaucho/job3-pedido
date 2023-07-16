import axios from 'axios';

const url = process.env.VUE_APP_API_URL
const tenatId = process.env.VUE_APP_TENANT_ID

export default {
    get: (modulo, filtro, callback) => {
        const endpoint = url+modulo+tenatId
        const params = !filtro ? '' : filtro

        axios.get(endpoint, {params}).then((response) => {
            if (callback) {
                callback(response);
            }
        })
    },

    post: (modulo, obj, callback) => {
        const endpoint = url+modulo+tenatId
        axios.post(endpoint, obj).then((response) => {
            if (callback) {
                callback(response);
            }
        })
    },

    put: (modulo, obj, callback) => {
        axios.put(url+tenatId+modulo, obj).then((response) => {
            if (callback) {
                callback(response);
            }
        })
    }
    
}