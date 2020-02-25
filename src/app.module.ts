import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaModule } from './media/media.module';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TableModule } from './table/table.module';
import { RoomModule } from './room/room.module';
import { MenuModule } from './menu/menu.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_HOST')
      }),
      inject: [ConfigService]
    }),

    MulterModule.register({
      dest: './public'
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    MediaModule,
    TableModule,
    RoomModule,
    MenuModule,
    ProductModule,
    UserModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
