import SearchBox from "./SearchBox";
import style from "../style";

import { Logo, Categories, SearchArea, Navbar } from "./index";
import MyDropdown from "./Dropdown";

function Header() {
  return (
    <header
      className={`${style.paddingX} flex gap-x-4 w-full items-center h-20 bo-shadow-bottom`}
    >
      <Logo />
      <MyDropdown />
      <SearchBox />
      <Navbar />
    </header>
  );
}

export default Header;
