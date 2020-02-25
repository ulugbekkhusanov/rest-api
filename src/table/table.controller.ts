import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TableService } from './table.service';
import { Table } from './interfaces';
import { TableDto } from './dto';

@Controller('tables')
export class TableController {

    constructor(private readonly service: TableService) { }

    @Get()
    async findAll(): Promise<Table[]> {
        return this.service.findAll();
    }

    @Post()
    async create(@Body() dto: TableDto): Promise<Table> {
        return this.service.create(dto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: TableDto): Promise<Table> {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.service.delete(id);
    }
}
