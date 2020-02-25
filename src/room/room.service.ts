import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './interfaces';
import { RoomDto } from './dto';

@Injectable()
export class RoomService {

    constructor(@InjectModel('Room') private readonly model: Model<Room>) { }

    async findAll(): Promise<Room[]> {
        return this.model.find().exec();
    }

    async create(dto: RoomDto): Promise<Room> {
        const doc = new this.model(dto);
        return doc.save();
    }

    async update(id: string, dto: RoomDto): Promise<Room> {
        return this.model.findByIdAndUpdate(id, dto, { new: true }).exec();
    }

    async delete(id: string): Promise<Room> {
        return this.model.findByIdAndDelete(id).exec();
    }

}
