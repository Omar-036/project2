import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactSearchBox from "react-search-box";

function getTopics(data) {
  const topicArrays = [];

  if (typeof data !== "object" || data === null) {
    return topicArrays;
  }

  const courses = data || [];

  for (const course of courses) {
    const courseTopics = course.topics || [];
    topicArrays.push(...courseTopics);
  }

  const topicArrayWithKeyAndValue = [];

  for (const topic of topicArrays) {
    topicArrayWithKeyAndValue.push({
      ...topic,
      key: topic.title,
      value: topic.title,
    });
  }

  return topicArrayWithKeyAndValue;
}

function SearchBox() {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:5000/content");
        const data = await res.json();
        setTopics(getTopics(data));
      } catch (err) {
        console.log(err);
      } finally {
        ("");
      }
    }
    fetchData();
  }, []);

  return (
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
  );
}

export default SearchBox;
