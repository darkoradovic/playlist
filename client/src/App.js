import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Books List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
