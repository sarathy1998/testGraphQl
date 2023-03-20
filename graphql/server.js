const express = require('express');
const expressGraphQl = require('express-graphql').graphqlHTTP;
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');
const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name:'helloworld',
        fields:()=>({
            message:{
                type:GraphQLString,
                resolve:()=>'Hello world'
            }
        })
    })
})

app.use('/graphql', expressGraphQl({
    schema:schema,
    graphiql:true
}))
app.listen(8080,()=>{console.log("server is running ")});