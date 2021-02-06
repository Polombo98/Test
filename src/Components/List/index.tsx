import { useEffect } from "react";
import useFetch from "use-http";

import getBooksUrl from "../../Services/getBooksList";
import { useGetBooks, useSetBooks } from "../../Stores/Books";

import { IBook } from "../../Interfaces";

const List = () => {
	const {
		get,
		data,
		loading,
		error
	} = useFetch(getBooksUrl);
	
	const setBooks = useSetBooks();

	const booksList = useGetBooks(); 
	
	useEffect(() => {
		(async () => {
			await get();
		})();
	}, [get]);
	
	useEffect(() => {
		if(data) {
			setBooks(data.items as IBook[]);
		}
	}, [data, setBooks]);

	useEffect(() => {
		console.log(booksList);
	}, [booksList])

	return (
		<>
		</>
	);
}

export default List;
