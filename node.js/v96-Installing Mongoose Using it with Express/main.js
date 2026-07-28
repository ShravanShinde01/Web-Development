import express from "express";
import mongoose from "mongoose";
import { Todo } from "./models/Todo.js";

let a = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({name:1,desc:"i am currently prepared", isDone:false,days:13})
    todo.save()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})