import "./App.css";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContext";
import BookContextProvider from "./context/BookContext";
import ThemeContextProvider from "./context/ThemeContext";
// const Component1 = ({ children }) => {
//   return <div>component 1{children}</div>;
// };
// const Component2 = () => {
//   return <div>component 2</div>;
// };

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>

      {/* <Component1>
        <Component2 />
      </Component1> */}
    </div>
  );
}

export default App;
