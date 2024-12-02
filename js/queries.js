export const QUERY_ANIME = `
query ($id: Int) {
  Media (id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
    description
    coverImage {
      extraLarge
    }
    season
    seasonYear
    genres
    averageScore
  }
}
`;

export const QUERY_USER_ANIME = `
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
        }
      }
    }
  }
}
`;