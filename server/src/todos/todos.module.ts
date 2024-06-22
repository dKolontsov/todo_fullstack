import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { Todo, TodoSchema } from 'src/schemas/Todo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
