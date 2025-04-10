import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from './interfaces/todo-list.interface';
import { TodoItem } from './interfaces/todo-item.interface';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { CreateTodoItemDto } from './dto/create-todo-item.dto';
import { UpdateTodoItemDto } from './dto/update-todo-item.dto';

@Injectable()
export class TodoService {
  // in-memory storage which can be replaced with a DB later
  private readonly todoLists: TodoList[] = [];

  createList(createTodoListDto: CreateTodoListDto): TodoList {
    const newList: TodoList = {
      id: uuidv4(),
      title: createTodoListDto.title,
      items: [],
    };
    this.todoLists.push(newList);
    return newList;
  }

  findAllLists(): TodoList[] {
    return this.todoLists;
  }

  findListById(listId: string): TodoList {
    const list = this.todoLists.find((l) => l.id === listId);
    if (!list) {
      throw new NotFoundException(`Todo list with ID ${listId} not found`);
    }
    return list;
  }

  addItemToList(
    listId: string,
    createTodoItemDto: CreateTodoItemDto,
  ): TodoItem {
    const list = this.findListById(listId);
    const newItem: TodoItem = {
      id: uuidv4(),
      title: createTodoItemDto.title,
      description: createTodoItemDto.description,
      completed: false,
    };
    list.items.push(newItem);
    return newItem;
  }

  updateItemStatus(
    listId: string,
    itemId: string,
    updateTodoItemDto: UpdateTodoItemDto,
  ): TodoItem {
    const list = this.findListById(listId);
    const item = list.items.find((i) => i.id === itemId);
    if (!item) {
      throw new NotFoundException(
        `Todo item with ID ${itemId} not found in list ${listId}`,
      );
    }
    item.completed = updateTodoItemDto.completed;
    return item;
  }
}
