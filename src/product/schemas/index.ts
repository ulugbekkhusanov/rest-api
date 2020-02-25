import { Schema } from 'mongoose';
import * as normalize from 'normalize-mongoose';

export const ProductSchema = new Schema({
    name: String,
    desc: String,
    menu: String,
    price: Number,
    amount: Number,
    status: String,
    images: [String]
});

ProductSchema.plugin(normalize);