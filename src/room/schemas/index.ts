import { Schema } from 'mongoose';
import * as normalize from 'normalize-mongoose';

export const RoomSchema = new Schema({
    name: String,
    seats: Number,
    status: String,
    images: [String]
});

RoomSchema.plugin(normalize);