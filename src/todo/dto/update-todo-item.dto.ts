import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateTodoItemDto {
  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;
}
