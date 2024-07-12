import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import mongoose from 'mongoose';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';


@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if(!isValid) throw new HttpException('Invalid ID', 400)
    const findTodo = await this.todosService.findOne(id);
    if(!findTodo) throw new HttpException('Data not found', 404)
    return findTodo
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if(!isValid) throw new HttpException('Invalid ID', 400)
    const updatedTodo = await this.todosService.update(id, updateTodoDto)
    if(!updatedTodo) throw new HttpException('Data not found', 404)
    return updatedTodo;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if(!isValid) throw new HttpException('Invalid ID', 400)
    const deletedTodo = await this.todosService.remove(id)
    if(!deletedTodo) throw new HttpException('Data not found', 404)
    return deletedTodo;
  }
}
