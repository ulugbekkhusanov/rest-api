import { Document } from 'mongoose';

export interface Media extends Document {
  readonly id: string;
  readonly group: string;
  readonly fileName: string;
  readonly fileUrl: string;
}