import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu } from './interfaces';
import { MenuDto } from './dto';

@Injectable()
export class MenuService {

    constructor(@InjectModel('Menu') private readonly model: Model<Menu>) { }

    async findAll(): Promise<Menu[]> {
        return this.model.find().exec();
    }

    async create(dto: MenuDto): Promise<Menu> {
        const doc = new this.model(dto);
        return doc.save();
    }

    async update(id: string, dto: MenuDto): Promise<Menu> {
        return this.model.findByIdAndUpdate(id, dto, { new: true }).exec();
    }

    async delete(id: string): Promise<Menu> {
        return this.model.findByIdAndDelete(id).exec();
    }

}
