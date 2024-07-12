import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@todos.ojq0pfr.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority&appName=todos`
      })
    }),
    TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
