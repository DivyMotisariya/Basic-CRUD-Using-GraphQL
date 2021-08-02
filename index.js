const express = require("express");
const app = express();

const graphqlHTTP = require("express-graphql").graphqlHTTP;

const schema = require("./schema");
// console.log(schema);

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.listen(3000, () => console.log("Server started"));