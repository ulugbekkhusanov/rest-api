import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './interfaces';
import { ProductDto } from './dto';

@Controller('products')
export class ProductController {

    constructor(private readonly service: ProductService) { }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.service.findAll();
    }

    @Post()
    async create(@Body() dto: ProductDto): Promise<Product> {
        return this.service.create(dto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: ProductDto): Promise<Product> {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.service.delete(id);
    }
}
