import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces';
import { UserDto } from './dto';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly model: Model<User>) { }

    async findAll(): Promise<User[]> {
        return this.model.find().exec();
    }

    async create(dto: UserDto): Promise<User> {
        const doc = new this.model(dto);
        return doc.save();
    }

    async update(id: string, dto: UserDto): Promise<User> {
        return this.model.findByIdAndUpdate(id, dto, { new: true }).exec();
    }

    async delete(id: string): Promise<User> {
        return this.model.findByIdAndDelete(id).exec();
    }

}
