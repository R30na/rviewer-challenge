import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  #graphQL Query
  query GetMovies($offset: Int, $limit: Int) {
    getMovies(offset: $offset, limit: $limit) {
      total
      entries {
        title
        description
        images {
          posterArt {
            url
            width
            height
          }
        }
        releaseYear
      }
    }
  }
`;
