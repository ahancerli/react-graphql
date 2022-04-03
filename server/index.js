import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import resolvers from "./resolvers.js";
import typeDefs from "./typeDefs.js";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv'


async function initServer() {
    const app = express()
    app.use(cors());
    dotenv.config();
    const apolloServer = new ApolloServer({ typeDefs, resolvers })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app })
    app.use((req, res) => {
        res.send('Server Başladı!')
    })
    const PORT = process.env.PORT || 5000

    try {
        await mongoose.connect(process.env.mongoDb)
        console.log('🚀 Mongo Connect is Success');
    } catch (e) {
        console.log(e);
    }

    app.listen(PORT, () =>
        console.log(
            `🚀 Express Server ${PORT} portunda ${apolloServer.graphqlPath} linkinde çalışıyor`
        )
    )
}

initServer()