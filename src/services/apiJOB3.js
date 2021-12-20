import axios from 'axios';

const url = process.env.VUE_APP_API_URL

export default {
    get: (modulo, callback) => {
        axios.get(url+modulo).then((response) => {
            if (callback) {
                callback(response);
            }
        })
        console.log(url)
        console.log(modulo)
    },

    post: (modulo, obj, callback) => {
        axios.post(url+modulo, obj).then((response) => {
            if (callback) {
                callback(response);
            }
        })
    }
}