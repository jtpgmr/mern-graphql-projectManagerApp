import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import { NavBar } from "./components";
import { Home, NotFound, Project } from "./pages/";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache
});

const App = () => {
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
    <NavBar />
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/projects/:id" element={<Project />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
    </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
