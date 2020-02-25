import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Product', schema: ProductSchema
    }])
  ],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule { }
