import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './interfaces';
import { MenuDto } from './dto';

@Controller('menu')
export class MenuController {

    constructor(private readonly service: MenuService) { }

    @Get()
    async findAll(): Promise<Menu[]> {
        return this.service.findAll();
    }

    @Post()
    async create(@Body() dto: MenuDto): Promise<Menu> {
        return this.service.create(dto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: MenuDto): Promise<Menu> {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.service.delete(id);
    }
}
