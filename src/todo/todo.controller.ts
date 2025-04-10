import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  ParseUUIDPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { CreateTodoItemDto } from './dto/create-todo-item.dto';
import { UpdateTodoItemDto } from './dto/update-todo-item.dto';
import { TodoList } from './interfaces/todo-list.interface';
import { TodoItem } from './interfaces/todo-item.interface';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // List Operations

  @Post()
  createList(@Body() createTodoListDto: CreateTodoListDto): TodoList {
    return this.todoService.createList(createTodoListDto);
  }

  @Get()
  findAllLists(): TodoList[] {
    return this.todoService.findAllLists();
  }

  // Item Operations

  @Post(':listId/items')
  addItemToList(
    @Param('listId', ParseUUIDPipe) listId: string,
    @Body() createTodoItemDto: CreateTodoItemDto,
  ): TodoItem {
    return this.todoService.addItemToList(listId, createTodoItemDto);
  }

  @Patch(':listId/items/:itemId')
  updateItemStatus(
    @Param('listId', ParseUUIDPipe) listId: string,
    @Param('itemId', ParseUUIDPipe) itemId: string,
    @Body() updateTodoItemDto: UpdateTodoItemDto,
  ): TodoItem {
    return this.todoService.updateItemStatus(listId, itemId, updateTodoItemDto);
  }
}
