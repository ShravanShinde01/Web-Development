import mongoose from 'mongoose'

const TodoScheme = new mongoose.Schema({
    name: String,
    desc : String,
    isDone : Boolean,
    days:Number

})

 export const Todo = mongoose.model('Todo',TodoScheme)