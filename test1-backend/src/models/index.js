"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sentence = void 0;
const mongoose_1 = require("mongoose");
const SentenceSchema = new mongoose_1.Schema({
    text: { type: String, required: true },
});
exports.Sentence = (0, mongoose_1.model)("Sentence", SentenceSchema);
