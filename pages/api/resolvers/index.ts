import moviesData from "../data/movies.json";

export const resolvers = {
  Query: {
    getMovies: (_: unknown, pagination: { offset: number; limit: number }) => {
      return {
        total: moviesData.total,
        entries: moviesData.entries.slice(
          pagination.offset,
          pagination.limit + pagination.offset
        ),
      };
    },
    filterMovies: (
      _: unknown,
      pagination: { offset: number; limit: number; term: string }
    ) => {
      const filtered = moviesData.entries.filter((item) =>
        item.title.includes(pagination.term)
      );
      return {
        total: filtered.length,
        entries: filtered.slice(
          pagination.offset,
          pagination.limit + pagination.offset
        ),
      };
    },
  },
};
