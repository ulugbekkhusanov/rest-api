import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { RoomService } from './room.service';
import { Room } from './interfaces';
import { RoomDto } from './dto';

@Controller('rooms')
export class RoomController {

    constructor(private readonly service: RoomService) { }

    @Get()
    async findAll(): Promise<Room[]> {
        return this.service.findAll();
    }

    @Post()
    async create(@Body() dto: RoomDto): Promise<Room> {
        return this.service.create(dto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: RoomDto): Promise<Room> {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.service.delete(id);
    }
}
