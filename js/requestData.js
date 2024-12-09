import { displayData } from "./displayData.js";

// Make the HTTP API request and display data
export async function makeRequest(api, options) {
    const response = await fetch(api, options);
    const data = await handleResponse(response);
    displayData(data);
}

// Display error message to user and log error to console
export function handleError(error) {
    const errorMessage = document.createElement("p");

    if (error.errors && error.errors.length > 0) {
        errorMessage.textContent = "Error: " + error.errors[0].message;
    } else {
        errorMessage.textContent = "An unknown error occurred";
    }

    errorMessage.setAttribute("class", "errorMessage");
    document.body.appendChild(errorMessage);
    console.error(error);
}

// Return response as JSON
function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response);
    }
    return response.json();
}