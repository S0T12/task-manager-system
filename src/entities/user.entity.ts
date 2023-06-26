import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task-entity';

export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  REGULAR = 'regular',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.REGULAR,
  })
  role: UserRole;

  @OneToMany(() => Task, (task) => task.assignee)
  @Column()
  tasks: Task[];
}
