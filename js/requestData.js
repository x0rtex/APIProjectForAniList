import { API_ENDPOINT, OPTIONS } from './consts.js';

// Make the HTTP API request
export async function makeRequest() {
    try {
        const response = await fetch(API_ENDPOINT, OPTIONS);
        const data = await handleResponse(response);
        handleData(data);
    } catch (error) {
        handleError(error);
    }
}

// Return response as JSON
function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

// Log the response to console
function handleData(data) {
    console.log(data);
}

// Log the error to console
function handleError(error) {
    alert('Error, check console');
    console.error(error);
}