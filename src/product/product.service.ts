import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './interfaces';
import { ProductDto } from './dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly model: Model<Product>) { }

    async findAll(): Promise<Product[]> {
        return this.model.find().exec();
    }

    async create(dto: ProductDto): Promise<Product> {
        const doc = new this.model(dto);
        return doc.save();
    }

    async update(id: string, dto: ProductDto): Promise<Product> {
        return this.model.findByIdAndUpdate(id, dto, { new: true }).exec();
    }

    async delete(id: string): Promise<Product> {
        return this.model.findByIdAndDelete(id).exec();
    }

}
