import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Todo {
    @Prop({unique: true, required: true})
    id: number;

    @Prop({required: true})
    title: string;

    @Prop({required: true})
    completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo)