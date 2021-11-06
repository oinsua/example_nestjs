import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TaskDocument = TaskCH & Document;

@Schema()
export class TaskCH{

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(TaskCH);