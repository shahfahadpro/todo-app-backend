import { TodoItem } from './todo-item.interface';

export interface TodoList {
  id: string;
  title: string;
  items: TodoItem[];
}
