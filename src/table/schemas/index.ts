import { Schema } from 'mongoose';
import * as normalize from 'normalize-mongoose';

export const TableSchema = new Schema({
    name: String,
    seats: Number,
    status: String,
    images: [String]
});

TableSchema.plugin(normalize);