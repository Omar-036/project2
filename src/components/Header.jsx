import SearchBox from "./SearchBox";
import style from "../style";

import { Logo, Categories, SearchArea, Navbar } from "./index";
import MyDropdown from "./MyDropdown";

function Header() {
  return (
    <header
      className={`${style.paddingX} flex gap-x-4 w-full items-center h-20 shadow-[0_0px_10px_-4px_rgba(0,0,0,0.3)]`}
    >
      <Logo />
      <MyDropdown />
      <SearchBox />
      <Navbar />
    </header>
  );
}

export default Header;
