import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDTO } from './dto/create_task.dto';
import { Task } from './interface/task';
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {
   
  constructor(private tasksService : TasksService){}

  @Get()
  getTasks(): Promise<Task[]>{
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string): Promise<Task>{
    return this.tasksService.getTask(id);
  }

  @Post()
  createTasks(@Body() task: CreateTaskDTO): string {
    console.log('task: ', task);
    return 'Create a new Task ';
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDTO, @Param('id') id): string {
    console.log('task: ', task);
    console.log('id: ', id);
    return 'Update a Task';
  }

  @Delete(':id')
  deleteTask(@Param('id') id): { message: string } {
    return { message: `Delete a Task number: ${id}` };
  }
}
