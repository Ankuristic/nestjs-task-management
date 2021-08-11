import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
// import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
// import { title } from 'process';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksRepository } from './dto/tasks.repository';
import { Task } from './dto/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}
  // private tasks: Task[] = [];
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTaskById(id: string): Task {
  //try to get task
  // if not found , throw an errror (404 not found)
  // otherwise return the found task
  //   const found = this.tasks.find((task) => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Task with Id "$(id)" not found`);
  //   }
  //   return found;
  // }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task with ID"${id}" not found`);
    }

    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    // const { title, description } = createTaskDto;

    // const task = this.tasksRepository.create({
    //   title,
    //   description,
    //   status: TaskStatus.OPEN,
    // });
    // await this.tasksRepository.save(task);
    return this.tasksRepository.createTask(createTaskDto);
  }
  // getTasksWithFilters(filterDto: GetTaskFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   // define a temporary array to hold the result
  //   let tasks = this.getAllTasks();
  //   // do something with status
  //   if (status) {
  //     //...
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   // do something with search
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   // return final result
  // }
  // createTask(title: string, description: string): Task {
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  //   createTask(createTaskDto: CreateTaskDto): Task {
  //     const { title, description } = createTaskDto;
  //     const task: Task = {
  //       id: uuid(),
  //       title,
  //       description,
  //       status: TaskStatus.OPEN,
  //     };
  //     this.tasks.push(task);
  //     return task;
  //   }
  //   deleteTask(id: string): <void> {
  //     const found = this.getTaskById(id);
  //     this.tasks = this.tasks.filter((task) => task.id !== found.id);
  //   }

  // aync deleteTask(id:string): Promise<void> {
  //   const result = await this. tasksRepository.delete(id);
  //   return (result);
  // }
  //   updateTaskStatus(id: string, status: TaskStatus) {
  //     const task = this.getTaskById(id);
  //     task.status = status;
  //     return task;
  //   }

  // async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
  //   const task = await this.getTaskById(id);

  //   task.status = status;
  //   await this.tasksRepository.save(task);
  //   return task;
  // }
}
