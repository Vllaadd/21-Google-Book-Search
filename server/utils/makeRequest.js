const axios = require('axios');

const makeRequest = (url, params) => 
axios.get(url, {
    params
});

module.exports = makeRequest;