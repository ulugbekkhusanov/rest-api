import { Schema } from 'mongoose';
import * as normalize from 'normalize-mongoose';

export const MenuSchema = new Schema({
    name: String,
    status: Boolean,
    images: [String]
});

MenuSchema.plugin(normalize);