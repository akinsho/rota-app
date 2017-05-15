import express from 'express';

const app = express();
const PORT = process.ENV.PORT || 3005;

async function graphQLHandler(req, res) {
  const { query, variables = {} } = req.payload;
  const result = await graphql(Schema, query, { db: request.db }, variables);
  return res(result);
}

app.post('/graphql', graphQLHandler);

app.listen(PORT, () => {
  console.log('Its going on!! at port:', PORT);
});
