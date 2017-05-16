import express from 'express';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import { schema } from './src/schema';

const app = express();
const PORT = process.env.PORT || 3005;

// async function graphQLHandler(req, res) {
//   const { query, variables = {} } = req.payload;
//   const result = await graphql(Schema, query, { db: request.db }, variables);
//   return res(result);
// }

app.use('*', cors({ origin: 'http://localhost:3000' }));

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
  })
);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
);

app.listen(PORT, () => {
  console.log(`Its going on!! at port ${PORT}`);
});
