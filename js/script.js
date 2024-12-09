import { makeRequest } from "./requestData.js";
import { API_ENDPOINT, OPTIONS, QUERY_USER, USER_IDS } from './consts.js';

// Get user ID from search input and make API request
async function searchUser() {
    const searchInput = document.getElementById("search-input").value;

    USER_IDS.userId = parseInt(searchInput);

    OPTIONS.body = JSON.stringify({
        query: QUERY_USER,
        variables: USER_IDS
    });

    await makeRequest(API_ENDPOINT, OPTIONS);
}

window.handleSearch = async function() {
    try {
        await searchUser();
    } catch (error) {
        console.error(error);
    }
}