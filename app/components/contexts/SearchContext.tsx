import { createContext } from "react";

interface SearchContextType {
    translate: any;
}

const SearchContext = createContext<SearchContextType | null>(null);
export default SearchContext;