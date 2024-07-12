import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from 'src/schemas/Todo.schema';


@Injectable()
export class TodosService {

  constructor(
    @InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const newTodo = new this.todoModel(createTodoDto)
    return newTodo.save()
  }

  findAll(): Promise<Todo[]> {
    return this.todoModel.find();
  }

  async findOne(id: string) {
    return this.todoModel.findById(id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.findByIdAndUpdate(id, updateTodoDto, {new: true});
  }

  remove(id: string) {
    return this.todoModel.findByIdAndDelete(id);
  }
}
