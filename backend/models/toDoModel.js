import mongoose from "mongoose";

const toDoScheme = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        dueDate: {
            type: Number,
            required: false,
        },
        completed: {
            type: Boolean,
            required: true,
        }
    }, 
    {
        timestamps: true
    }
);

export const Task = mongoose.model('toDo', toDoScheme)