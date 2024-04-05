import { SearchBox } from "react-instantsearch";
import Test from "./Test";

function SearchArea() {
  return (
    <div className="flex flex-1  h-full justify-center items-center relative">
      <div className="flex max-w-5xl  w-full">
        {" "}
        <SearchBox
          className={{
            root: "",
            form: "",
            input: "",
            submitIcon: "",
          }}
          placeholder="Search fon any topic"
        />
        {/* <Test /> */}
      </div>
    </div>
  );
}

export default SearchArea;
