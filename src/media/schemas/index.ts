import { Schema } from 'mongoose';
import * as normalize from 'normalize-mongoose';

export const MediaSchema = new Schema({
    group: String,
    fileName: String,
    fileUrl: String
});

MediaSchema.plugin(normalize);