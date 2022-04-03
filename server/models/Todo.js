import mongoose from "mongoose";
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    date:Date
},{timestamp:true});
const Todo = mongoose.model('todo',TodoSchema);

export default Todo