import gql from "graphql-tag";

export const typeDefs = gql`
  #graphql
  type MoviesResponse {
    total: Int
    entries: [Movie]
  }
  type Movie {
    title: String
    description: String
    images: Image
    releaseYear: Int
  }
  type Image {
    posterArt: PosterArt
  }
  type PosterArt {
    url: String
    width: Int
    height: Int
  }
  type Query {
    getMovies(offset: Int, limit: Int): MoviesResponse
    filterMovies(offset: Int, limit: Int, term: String): MoviesResponse
  }
`;
