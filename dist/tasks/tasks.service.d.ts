import { CreateTaskDto } from './dto/create-task.dto';
import { TasksRepository } from './dto/tasks.repository';
import { Task } from './dto/task.entity';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: TasksRepository);
    getTaskById(id: string): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
