import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
// import { title } from 'process';
import { CreateTaskDto } from './dto/create-task.dto';
import { stringify } from 'querystring';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './dto/task.entity';
// import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDto: GetTaskFilterDto): Task[] {
  //   // if we have any filters defined , call tasksService.getTaskWillFilters
  //   // otherwise, just get all tasks
  //   if (Object.keys(filterDto).length) {
  //     //...
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }
  // @Post()
  // createTask(
  //   @Body()
  //   createTaskDto: // @Body('title') title: string,
  //   // @Body('description') description: string,
  //   CreateTaskDto,
  // ): Task {
  //   // console.log('title', title);
  //   // console.log('description', description);
  //   return this.tasksService.createTask(createTaskDto);
  // }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }
  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): Promise<void> {
  //   return this.tasksService.deleteTask(id);
  // }

  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }
  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   return this.tasksService.deleteTask(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body( `updateTaskStatusDto`:UpdateTaskStatusDto,
  // ): Task {
  //   const {status} = updateTaskStatusDto;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  // ): Promise<Task> {
  //   const { status } = updateTaskStatusDto;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
