import { Controller, Get, Body, Post, UseInterceptors, UploadedFiles, Delete, Param, Res } from '@nestjs/common';
import { MediaService } from './media.service';
import { Media } from './interfaces';
import { MediaDto } from './dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './util/file-upload';
import { ConfigService } from '@nestjs/config';

@Controller('media')
export class MediaController {

    constructor(
        private readonly configService: ConfigService,
        private readonly mediaService: MediaService
    ) { }

    // 
    @Get()
    async findAll(): Promise<Media[]> {
        return this.mediaService.findAll();
    }

    // 
    @Post('upload')
    @UseInterceptors(FilesInterceptor('files', 20, {
        storage: diskStorage({
            destination: './public',
            filename: editFileName
        }),
        fileFilter: imageFileFilter
    }))
    async upload(@UploadedFiles() files, @Body('group') group: string): Promise<Media[]> {
        const response = [];
        files.forEach(file => {
            const fileReponse = {
                id: file.filename,
                group,
                fileName: file.filename,
                fileUrl: this.configService.get<string>('API_HOST') + file.filename
            };
            response.push(fileReponse);
        });

        return this.mediaService.insertMany(response);
    }

    // 
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Media> {
        return this.mediaService.delete(id);
    } 

}
