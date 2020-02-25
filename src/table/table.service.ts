import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Table } from './interfaces';
import { TableDto } from './dto';

@Injectable()
export class TableService {

    constructor(@InjectModel('Table') private readonly model: Model<Table>) { }

    async findAll(): Promise<Table[]> {
        return this.model.find().exec();
    }

    async create(dto: TableDto): Promise<Table> {
        const doc = new this.model(dto);
        return doc.save();
    }

    async update(id: string, dto: TableDto): Promise<Table> {
        return this.model.findByIdAndUpdate(id, dto, { new: true }).exec();
    }

    async delete(id: string): Promise<Table> {
        return this.model.findByIdAndDelete(id).exec();
    }

}
