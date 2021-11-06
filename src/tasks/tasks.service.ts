import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from "./interface/task";
import { TaskDocument } from "./schema/task.schema";

@Injectable()
export class TasksService {

    constructor(@InjectModel("TaskSchema1") private TaskModel: Model<TaskDocument>) {}

   async  getTasks(): Promise<Task[]>{
        return await this.TaskModel.find()
    }

    async getTask(id): Promise<Task>{
        return await this.TaskModel.findById(id);
    }
}
