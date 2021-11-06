import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskSchema } from './schema/task.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: 'TaskSchema1', schema: TaskSchema}])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
