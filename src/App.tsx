import Header from "./Components/Header";
import List from "./Components/List";

import { BooksProvider } from "./Stores/Books";

const App = () => {
	return (
		<BooksProvider>
			<Header />
			<List />
		</BooksProvider>
	)
}

export default App;
