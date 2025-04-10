import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateTodoItemDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}
