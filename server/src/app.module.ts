import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dkolontsov:bvNPJDxcqZDDWtnL@todos.ojq0pfr.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=todos'),
    TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
