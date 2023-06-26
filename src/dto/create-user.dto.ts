import { IsArray, IsEmail, IsString, MinLength } from 'class-validator';
import { Task } from 'src/entities/task-entity';
import { UserRole } from 'src/entities/user.entity';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  @IsString()
  password: string;

  @IsString()
  role: UserRole;

  @IsArray()
  tasks: Task[];
}
