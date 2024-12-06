// Define API endpoint URL
export const API_ENDPOINT = 'https://graphql.anilist.co';

// Define user IDs to query
const USER_IDS = {
    userId: 7056318
};

// Define GraphQL query
const QUERY_USER = `
query ($userId: Int!) {
  MediaListCollection(type: ANIME, userId: $userId) {
    lists {
      name
      entries {
        id
        media {
          id
          title {
            romaji
          }
          description
          coverImage {
            extraLarge
          }
          season
          seasonYear
          genres
        }
      }
    }
  }
}
`;

// Define config for API request
export const OPTIONS = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({
        // Define query and variables
        query: QUERY_USER,
        variables: USER_IDS
    })
};