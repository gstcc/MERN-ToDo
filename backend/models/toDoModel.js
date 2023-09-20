import mongoose from "mongoose";

const toDoScheme = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        course: {
            type: String,
            required: true
        },
        dueDate: {
            type: Date,
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