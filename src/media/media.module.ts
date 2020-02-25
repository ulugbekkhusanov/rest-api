import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaSchema } from './schemas';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Media', schema: MediaSchema
        }])
    ],
    providers: [MediaService],
    controllers: [MediaController]
})
export class MediaModule {}
