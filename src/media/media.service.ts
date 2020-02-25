import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Media } from './interfaces';
import { MediaDto } from './dto';
import { unlinkSync } from 'fs';

@Injectable()
export class MediaService {

    constructor(@InjectModel('Media') private readonly mediaModel: Model<Media>) { }

    async findAll(): Promise<any[]> {
        return this.mediaModel.find().exec();
    }

    async insertMany(mediaDtos: MediaDto[]): Promise<Media[]> {
        return this.mediaModel.insertMany(mediaDtos);
    }

    async delete(id: string): Promise<Media> {
        const doc = await this.mediaModel.findByIdAndDelete(id).exec();

        let filePath = './public/' + doc.fileName
        unlinkSync(filePath);

        return new Promise((res, rej) => res(doc));
    }


}
