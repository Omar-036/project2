/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const ContentContext = createContext();

function getTopics(data, withKeys) {
  const topicArrays = [];

  if (typeof data !== "object" || data === null) {
    return topicArrays;
  }

  const courses = data || [];

  for (const course of courses) {
    const courseTopics = course.topics || [];
    topicArrays.push(...courseTopics);
  }

  if (withKeys) {
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

  return topicArrays;
}

function ContentProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState([]);
  const [topics, setTopics] = useState([]);
  const [topicsWithKeys, setTopicsWithKeys] = useState([]);

  useEffect(() => {
    async function fetchMenuData() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:5000/content");
        const data = await res.json();
        setContent(data.content);
        setTopics(getTopics(data, false));
        setTopicsWithKeys(getTopics(data, true));
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMenuData();
  }, []);

  return (
    <ContentContext.Provider
      value={{ isLoading, content, topics, topicsWithKeys }}
    >
      {children}
    </ContentContext.Provider>
  );
}

function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined)
    throw new Error("Content context was used outside the ContentProvider");
  return context;
}

export { ContentProvider, useContent };
