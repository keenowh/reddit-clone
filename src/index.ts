import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import { __prod__ } from "./constants";

const main = async () => {
  // Connect to database
  const orm = await MikroORM.init(mikroOrmConfig);

  // run the migration automatically before anything else
  await orm.getMigrator().up();

  // Create express app
  const app = express();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years TTL
        httpOnly: true,
        secure: __prod__, // cookie only works in https
        sameSite: "lax",
      },
      secret: "alsdjalksjdaljdlaskjdlajd",
      resave: false,
    })
  );
  //initialize graphql endpoint
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, UserResolver],
      validate: false,
    }),
    context: ({req, res}) => ({ em: orm.em, req, res}),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server started at localhost:4000 ");
  });
};

main().catch((err) => {
  console.error(err);
});
