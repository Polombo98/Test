import {
	createContext,
	useState,
	useContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	ReactElement
} from "react";

import { IBook } from "../../Interfaces";

const GetBooksContext = createContext<IBook[]>([]);
const SetBooksContext = createContext<Dispatch<SetStateAction<IBook[]>>>(() => {})

interface BooksProviderProps {
	children: ReactNode
}

const BooksProvider = ({children}: BooksProviderProps): ReactElement => {
	const [list, setList] = useState([] as IBook[]);
	return (
		<GetBooksContext.Provider value={list}>
			<SetBooksContext.Provider value={setList}>
				{children}
			</SetBooksContext.Provider>
		</GetBooksContext.Provider>
	)

}

const useGetBooks = () => {
	const context = useContext(GetBooksContext)
	if (context === undefined) {
		throw new Error('useGetBooks must be used within a BooksProvider')
	  }
	return context;
}

const useSetBooks = () => {
	const context = useContext(SetBooksContext)
	if (context === undefined) {
		throw new Error('useSetBooks must be used within a BooksProvider')
	  }
	return context;
}

export { BooksProvider, useGetBooks, useSetBooks };
