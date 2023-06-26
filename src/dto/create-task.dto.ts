import { IsArray, IsDate, IsString } from 'class-validator';
import { Priority } from 'src/entities/task-entity';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  assigneeId: string;

  @IsDate()
  dueDate: Date;

  @IsString()
  priority: Priority;

  @IsArray()
  tags: [string];
}
