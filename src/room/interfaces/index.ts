import { Document } from 'mongoose';

export interface Room extends Document {
  readonly id: string;
  readonly name: string;
  readonly seats: number;
  readonly status: boolean;
  readonly images: string[];
}