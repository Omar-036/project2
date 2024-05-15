function Test2() {
  return (
    <>
      <button
        id="multiLevelDropdownButton"
        data-dropdown-toggle="multi-dropdown"
        data-dropdown-offset-distance="0px"
        data-dropdown-delay="0"
        data-dropdown-trigger="hover"
        className="h-full text-primary focus:outline-none font-medium text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Categories
        <svg
          className="group-hover/main:rotate-90 duration-100 w-2.5 h-2.5 ms-3 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}

      <div
        id="multi-dropdown"
        className=" z-10 hidden bg-white border min-w-44 w-max"
      >
        <ul className="py-2 text-sm" aria-labelledby="multiLevelDropdownButton">
          <li className="group">
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="doubleDropdown1"
              data-dropdown-offset-distance="0px"
              data-dropdown-delay="0"
              data-dropdown-trigger="hover"
              data-dropdown-placement="right-start"
              type="button"
              className="group-hover:bg-gray-100 group-hover:pl-6 duration-200 flex items-center justify-between w-full px-4 py-2 "
            >
              Data Structure
              <svg
                className="group-hover:rotate-90 duration-200 w-2.5 h-2.5 ms-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
            <div
              id="doubleDropdown1"
              className="z-10 hidden bg-white border  min-w-44 w-max"
            >
              <ul
                className="py-2 text-sm"
                aria-labelledby="doubleDropdownButton"
              >
                <li>
                  <a
                    href="#"
                    className="block hover:pl-5 duration-200 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Linked List
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Double Linked List
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="doubleDropdown2"
              data-dropdown-offset-distance="0px"
              data-dropdown-delay="0"
              data-dropdown-trigger="hover"
              data-dropdown-placement="right-start"
              type="button"
              className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Algorithm
              <svg
                className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
            <div
              id="doubleDropdown2"
              className="z-10 hidden bg-white divide-y divide-gray-100  shadow min-w-44 w-max dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="doubleDropdownButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Red Black Tree
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Matrix Chain Multiplication
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Test2;
