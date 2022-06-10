import Koa = require('koa');
import mount from 'koa-mount';
import { graphqlHTTP } from 'koa-graphql';
import { schema } from './graphql/schema';

const app = new Koa();
const PORT = 4000;

app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  ),
);

app.use((ctx, next) => {
  ctx.body = 'Hello world ';
  return next();
});

app.listen(PORT, () => console.log('Server running on port', PORT))