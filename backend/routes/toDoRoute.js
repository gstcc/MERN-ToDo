import express from "express";
import { Task } from "../models/toDoModel.js";

const router = express.Router()

//Add a new task to database
router.post('', async (request, response) => {
    try {
        if (!request.body.title || !request.body.completed){
            return response.status(400).send({message : 'Send all required fields'});
        }

        const newTask = {
            title: request.body.title,
            description : (request.body.description ?  request.body.description : '' ),
            dueDate : (request.body.dueDate ? request.body.dueDate : ''),
            completed: request.body.completed
        };

        const task = await Task.create(newTask);
        return response.status(201).send(task);
        
    } catch (error) {
        console.log(error.message)
        response.status(500).send({error : error.message});
    }

});

//Route for get one task from database by id
router.get('/:id', async (request, response) => {
    try {

        const {id} = request.params;
        const task = await Task.findById(id);

        return response.status(200).json(task)
    } catch (error) {
        console.log(error)
        response.status(500).send({message : error.message})
        
    }
});

//Route for update a task
router.put('/:id', async (request, response) =>{
    try {
        if (!request.body.title || request.body.completed == null){
            return response.status(400).send({message : 'Send all required fields'});
        }

        const {id} = request.params;

        const result = await Task.findByIdAndUpdate(id, request.body);
        if (!result){
            return response.status(404).send({message:"task not found"})
        } 
        return response.status(200).send({message : 'Task was updated succesfully'})
        
    } catch (error) {
        console.log(error)
        response.status(500).send({message: error.message})
        
    }
})

//Route for get all tasks from database
router.get('', async (request, response) => {
    try {
        const tasks = await Task.find({});

        return response.status(200).json({
            count : tasks.length,
            data : tasks
        });
    } catch (error) {
        console.log(error)
        response.status(500).send({message : error.message})
        
    }
});

//Route for delete a task
router.delete('/:id', async (request, response) => {
    try {

        const { id } = request.params;
        const result = await Task.findByIdAndDelete(id);

        if (!result){
            return response.status(404).send({message:"task not found"});
        } 
        return response.status(200).send({message : 'Task was deleted succesfully'});
        

    } catch (error) {
        console.log(error)
        response.status(500).send({message : error.message})
    }
})

export default router