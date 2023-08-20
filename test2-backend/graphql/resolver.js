const Movie = require("../models/listing");

const resolvers = {
  Query: {
    movies: async (_, { limit, offset }) => {
      try {
        const query = Movie.find();
        if (limit) query.limit(limit);
        if (offset) query.skip(offset);
        return await query.exec();
      } catch (error) {
        console.error("Error executing query:", error);
        throw error;
      }
    },
  },
};

module.exports = resolvers;
