import { makeRequest } from "./requestData";

// Make the HTTP API request once page is loaded
document.addEventListener('DOMContentLoaded', async () => {
    await makeRequest();
    }, false);