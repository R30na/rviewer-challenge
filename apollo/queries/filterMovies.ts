import { gql } from "@apollo/client";

export const FILTER_MOVIES = gql`
  #graphQL Query
  query FilterMovies($offset: Int, $limit: Int, $term: String) {
    filterMovies(offset: $offset, limit: $limit, term: $term) {
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
