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

  return topicArrays;
}

function SearchBox() {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("../../data/data.json");
        const data = await res.json();
        console.log(data.content);
        setTopics(getTopics(data.content));
      } catch (err) {
        console.log(err);
      } finally {
        ("");
      }
    }
    fetchData();
  }, []);
  console.log(topics);
  return (
    <div className="search flex-1">
      <ReactSearchBox
        onSelect={(e) => navigate(e.item.path)}
        inputHeight="100%"
        placeholder="Search for any topic"
        value="Doe"
        data={topics}
        callback={(record) => console.log(record)}
      />
    </div>
  );
}

export default SearchBox;
