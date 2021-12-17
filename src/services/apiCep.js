import axios from 'axios';

const urlCEP = 'https://viacep.com.br/ws/'

export default {
    get: (cep, callback) => {
        const url = urlCEP + cep + '/json/'
        axios.get(url).then((res) => {
            if (callback) {
                callback(res);
            }
        })
    }
}