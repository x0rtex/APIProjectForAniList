import { API_ENDPOINT } from './consts.js';
import { QUERY_ANIME, QUERY_USER_ANIME } from './queries.js';
import { ANIME_IDS, USER_IDS } from './variables.js';

// Define config for API request
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({
        query: QUERY_ANIME,
        variables: ANIME_IDS
    })
};

async function makeRequest() {
    try {
        const response = await fetch(API_ENDPOINT, options);
        const data = await handleResponse(response);
        handleData(data);
    } catch (error) {
        handleError(error);
    }
}

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    console.log(data);
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}

// Make the HTTP API request once page is loaded
document.addEventListener('DOMContentLoaded', async () => {
    await makeRequest();
    }, false);