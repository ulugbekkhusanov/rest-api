import { Document } from 'mongoose';

export interface Menu extends Document {
  readonly id: string;
  readonly name: string;
  readonly status: boolean;
  readonly images: string[];
}