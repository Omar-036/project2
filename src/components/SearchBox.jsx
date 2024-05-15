/* eslint-disable react/prop-types */
// import ReactSearchBox from "react-search-box";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import styles from './SearchBox.module.css';

function SearchBox({ placeholder, rightIcon }) {
  const navigate = useNavigate();
  // const { topicsWithKeys: topics } = useContent();
  const { topics } = useContent();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  // const [showResults, setShowResults] = useState(false);
  function handleSearch(e) {
    const newQuery = e.target.value.toLowerCase().trimStart();
    setQuery(newQuery);
    setResults(
      topics.filter(
        topic => topic.title.toLowerCase().includes(newQuery) && newQuery !== ''
      )
    );
    setIsFocus(true);
  }

  useEffect(() => {
    const event = document.addEventListener('click', e => {
      if (
        e.target.classList.contains('list') ||
        e.target.classList.contains('search')
      ) {
        setIsFocus(true);
      } else {
        setIsFocus(false);
      }
    });

    return () => removeEventListener('click', event);
  }, [isFocus]);

  return (
    <div className="search flex-1 relative z-10">
      <div className="input">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full search border-2 duration-100 focus:outline-none focus:border-secondary  rounded-lg "
          value={query}
          onChange={handleSearch}
          onFocus={() => setIsFocus(true)}
        />
      </div>
      <div className="search-icon absolute right-2 top-3">{rightIcon}</div>

      {isFocus && (
        <div
          className={`${styles.resultsContainer} absolute left-0 mt-4 w-full `}
        >
          <ul>
            {isFocus &&
              results.map(result => (
                <li
                  key={result.title}
                  className={`${styles.results} flex justify-between items-center list hover:bg-gray-100 duration-200`}
                  onClick={() => {
                    navigate(result.path);
                    setQuery('');
                    setResults([]);
                  }}
                >
                  {result.title}
                  <img src={result?.image} alt=">" className="w-20 h-16" />
                </li>
              ))}

            {results.length === 0 && query.length > 0 && isFocus && (
              <p className={styles.results}>no results</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBox;

/*

    <div className="search flex-1 relative z-10">
      <ReactSearchBox
        clearOnSelect
        leftIcon={
          <div className="search-icon absolute right-2 top-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
            </svg>
          </div>
        }
        onSelect={(e) => navigate(e.item.path)}
        iconBoxSize={"20px"}
        inputHeight="100%"
        placeholder="Search for any topic"
        value="Doe"
        data={topics}
        callback={(record) => console.log(record)}
        onFocus={(e) => console.log(e.target)}
      />
    </div>

*/
