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
import { Task, TaskStatus } from './task.model';
// import { title } from 'process';
import { CreateTaskDto } from './dto/create-task.dto';
import { stringify } from 'querystring';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GetTaskFilterDto): Task[] {
    // if we have any filters defined , call tasksService.getTaskWillFilters
    // otherwise, just get all tasks
    if (Object.keys(filterDto).length) {
      //...
    } else {
      return this.tasksService.getAllTasks();
    }
  }
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
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
