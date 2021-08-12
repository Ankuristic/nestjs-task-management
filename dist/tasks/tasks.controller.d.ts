import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './dto/task.entity';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    getTaskById(id: string): Promise<Task>;
}
