import { Schema } from 'mongoose';
import * as normalize from 'normalize-mongoose';

export const UserSchema = new Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    phone: String,
    status: Boolean,
    images: [String]
});

UserSchema.plugin(normalize);