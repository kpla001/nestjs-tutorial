import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://kyle:shyHope88@nestjs-cluster0.71rnd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
