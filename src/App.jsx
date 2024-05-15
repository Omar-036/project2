import { Route, Routes } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";

import { InstantSearch } from "react-instantsearch";

import Homepage from "./pages/Homepage";
import { Header } from "./components";
import { useState } from "react";
import Login from "./pages/Login";
import { ContentProvider } from "./contexts/ContentContext";
import { UsersProvider } from "./contexts/UsersContext";
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./pages/Signup";
import Stack from "./components/stack/Stack";
import Linkedlist from "./components/linkedlist/Linkedlist";
import Footer from "./components/Footer";
import Queue from "./components/queue/Queue";

// const SEARCH_APPLICATION_ID = import.meta.VITE_SEARCH_APPLICATION_ID;

// const searchApiKey = import.meta.VITE_SEARCH_API_KEY;

const searchClient = algoliasearch(
  "FXPW42EWHV",
  "70aafeceacc7354be9197aa332d4c419"
);

function App() {
  const [searchStart, setSearchStart] = useState(false);
  return (
    <AuthProvider>
      <UsersProvider>
        <ContentProvider>
          <Header searchStart={searchStart} />

          <Routes>
            <Route index={true} element={<Homepage />} />
            <Route path="/:id" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/data-structure/stack" element={<Stack />} />
            <Route path="/data-structure/queue" element={<Queue />} />
            <Route
              path="/data-structure/linked-list"
              element={<Linkedlist />}
            />
          </Routes>
          <Footer />
        </ContentProvider>
      </UsersProvider>
    </AuthProvider>
  );
}

export default App;
