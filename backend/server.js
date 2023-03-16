const { ApolloServer, gql } = require("apollo-server");

const books = [
	{
		title: "Harry Potter",
		author: "J.K Rowling",
	},
	{
		title: "The Alchemist",
		author: "Paulo Coelho",
	},
];

const typeDefs = gql`
	type Book {
		title: String
		author: String
	}

	type Query {
		test: [Book]
	}
`;

const resolvers = {
	Query: {
		test: () => books,
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
