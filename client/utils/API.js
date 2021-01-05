import axios from 'axios';

export default {
    getBooks: function(q){
        return axios.get('api/google', {
            params: { q: 'title:' + q}}),
    }
}