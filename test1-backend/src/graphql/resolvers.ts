import { Sentence } from "../models";

export const resolvers = {
  Query: {
    wordCloud: async (_: any, args: { length: number }) => {
      const sentences = await Sentence.find({});
      const wordCounts: { [key: string]: number } = {};

      sentences.forEach((sentence) => {
        sentence.text.split(/\s+/).forEach((word) => {
          // Removing any non-alphanumeric characters
          const cleanedWord = word.replace(/\W/g, "").toLowerCase();
          wordCounts[cleanedWord] = (wordCounts[cleanedWord] || 0) + 1;
        });
      });

      // Filter words that appear at least 'length' times
      return Object.entries(wordCounts)
        .filter(([_, count]) => count >= args.length)
        .map(([word, count]) => ({ word, count }));
    },
  },
};
