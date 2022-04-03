import {gql} from "apollo-server-express";

const typeDefs = gql`
    
    scalar Date
    type Todo{
        id:ID,
        title:String,
        description:String,
        date:Date
    }
    type Query {
        merhaba: String,
        getTodos:[Todo],
        getTodo(id:ID):Todo
    }
    type Mutation {
        addTodo(
            title:String
            description:String,
            date:Date
        ):Todo,
        deleteTodo(id:ID):String,
        updateTodo(
            id:ID
            title:String
            description:String,
            date:Date
        ):Todo,
    }
`

export default typeDefs