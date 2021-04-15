import { ApolloServer } from "apollo-server-micro"
import {typeDefs} from './schemas'
import {resolvers} from './resolvers'

const apolloserver = new ApolloServer({
    typeDefs, resolvers
})

export const config = {
    api: {
        bodyparser: false
    }
}

export default apolloserver.createHandler({
    path: "/api/graphql"
})