import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './create-task.dto';
export declare class TasksRepository extends Repository<Task> {
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
