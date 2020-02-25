import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces';
import { UserDto } from './dto';

@Controller('users')
export class UserController {

    constructor(private readonly service: UserService) { }

    @Get()
    async findAll(): Promise<User[]> {
        return this.service.findAll();
    }

    @Post()
    async create(@Body() dto: UserDto): Promise<User> {
        return this.service.create(dto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: UserDto): Promise<User> {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.service.delete(id);
    }
}
