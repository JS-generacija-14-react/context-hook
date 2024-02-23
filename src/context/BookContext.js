import { createContext, useState } from "react";

// pravimo React context koristeci createContext() funkciju koju smo uvezli iz react biblioteke
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "ubiti pticu rugalicu", id: 1 },
    { title: "nepodnosljiva lakoca React-a", id: 2 },
    { title: "ko je maznuo moj sir", id: 3 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {/* props.children nam omogucava da bilo koja ugnjezdena komponenta u okviru BookContextProvidera
        da moze da pristupi context-u koji je provajdovan od strane BookContext-a
    */}
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
