const { SchemaComposer } = require("graphql-compose");
const composer = new SchemaComposer();

const { BookSchema } = require("./books.schema");
const { AuthorSchema } = require("./authors.schema");

composer.merge(BookSchema);
composer.merge(AuthorSchema);

module.exports = composer.buildSchema();
