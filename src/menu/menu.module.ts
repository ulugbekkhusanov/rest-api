import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Menu', schema: MenuSchema
    }])
  ],
  providers: [MenuService],
  controllers: [MenuController]
})
export class MenuModule { }
