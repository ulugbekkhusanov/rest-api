import { Module } from '@nestjs/common';
import { TableService } from './table.service';
import { TableController } from './table.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TableSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Table', schema: TableSchema
    }])
  ],
  providers: [TableService],
  controllers: [TableController]
})
export class TableModule { }
