import { Route, Routes } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";

import { InstantSearch } from "react-instantsearch";

import Homepage from "./pages/Homepage";
import { Header } from "./components";
import { useState } from "react";
import Login from "./pages/Login";

// const SEARCH_APPLICATION_ID = import.meta.VITE_SEARCH_APPLICATION_ID;

// const searchApiKey = import.meta.VITE_SEARCH_API_KEY;

const searchClient = algoliasearch(
  "FXPW42EWHV",
  "70aafeceacc7354be9197aa332d4c419"
);

function App() {
  const [searchStart, setSearchStart] = useState(false);
  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        indexName="project1"
        initialUiState={{
          project1: {
            query: "",
          },
        }}
      >
        <Header searchStart={searchStart} />
      </InstantSearch>
      <Routes>
        <Route index={true} element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
