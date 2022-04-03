import Todo from './models/Todo.js'

const resolvers = {
    Query: {
        merhaba: () =>{
            return "Merhaba Dünya Akmanladın"
        },
        getTodos: async () =>{
            return Todo.find();
        },
        getTodo: async (root, args) => {
            return Todo.findById(args.id);
        }
    },
    Mutation: {
        addTodo: async (root, args) => {
            const newTodo = new Todo({title:args.title, description:args.description, date:args.date})
            await newTodo.save();
            return newTodo;
        },
        deleteTodo: async (root, args) => {
            await Todo.findByIdAndDelete(args.id);
            return "Todo is Deleted";
        },
        updateTodo: async (root, args) => {
            const {id, title, description, date} = args;
            const updatedData = {};

            if (id !== undefined) {
                if (title !== undefined) {
                    updatedData.title = title;
                }
                if (description !== undefined) {
                    updatedData.description = description;
                }
                if (date !== undefined) {
                    updatedData.date = date;
                }
            }

            return Todo.findByIdAndUpdate(id, updatedData, {new: true});
        }
    }
}

export default resolvers