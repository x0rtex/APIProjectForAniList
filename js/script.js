const query = `
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
      native
    }
  }
}
`;

// Define query variables and values that will be used in the query request
const variables = {
    id: 11061
};

// Define config for API request
const url = 'https://graphql.anilist.co';
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({
        query: query,
        variables: variables
    })
};

async function makeRequest() {
    try {
        const response = await fetch(url, options);
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