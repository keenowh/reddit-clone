import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql'

const main = async () => {
  
  // Connect to database
  const orm = await MikroORM.init(mikroOrmConfig);

  // run the migration automatically before anything else
  await orm.getMigrator().up()
  
  // Create express app
  const app = express();

  //initialize graphql endpoint
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [],
      validate: false
    })
  })

  apolloServer.applyMiddleware({ app })

  app.listen(4000, () => {
    console.log('Server started at localhost:4000 ')
  })
};

main().catch((err) => {
  console.error(err);
});
