import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Room', schema: RoomSchema
    }])
  ],
  providers: [RoomService],
  controllers: [RoomController]
})
export class RoomModule { }
