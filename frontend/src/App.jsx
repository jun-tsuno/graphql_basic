import "./App.css";
import { gql, useQuery } from "@apollo/client";

const BOOKS = gql`
	query {
		test {
			title
			author
		}
	}
`;

function Books() {
	const { loading, error, data } = useQuery(BOOKS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!!</p>;

	return data.test.map(({ title, author }) => {
		return (
			<div key={title}>
				<p>
					{author}: {title}
				</p>
			</div>
		);
	});
}

function App() {
	return (
		<div className="App">
			<h2>GraphQL Client</h2>
			<Books />
		</div>
	);
}

export default App;
