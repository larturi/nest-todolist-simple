import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {

  private todos: Todo[] = [
    { id: 1, description: 'Piedra del alma', done: false },
    { id: 2, description: 'Piedra del tiempo', done: false },
    { id: 1, description: 'Piedra del espacio', done: true },
  ];

  create(createTodoDto: CreateTodoDto) {
    const todo = new Todo();
    todo.id = Math.max(...this.todos.map( todo => todo.id ), 0) + 1;
    todo.description = createTodoDto.description;
    this.todos.push(todo);

    return todo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find(todo => todo.id === Number(id))
    if(!todo) throw new NotFoundException(`Todo whith id ${id} not exists`)
    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
