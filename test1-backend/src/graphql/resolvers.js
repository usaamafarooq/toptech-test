"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const models_1 = require("../models");
exports.resolvers = {
    Query: {
        wordCloud: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const sentences = yield models_1.Sentence.find({});
            const wordCounts = {};
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
        }),
    },
};
