import mongoose from "mongoose";
import { Document, Schema, model } from "mongoose";

interface ISentence extends Document {
  text: string;
}

const SentenceSchema = new Schema({
  text: { type: String, required: true },
});

export const Sentence = model<ISentence>("Sentence", SentenceSchema);
