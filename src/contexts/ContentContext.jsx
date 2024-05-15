/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const ContentContext = createContext();

function ContentProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchMenuData() {
      try {
        setIsLoading(true);
        const res = await fetch(
          // "https://ap-south-1.aws.data.mongodb-api.com/app/application-0-pknel/endpoint/getContent"
          "http://localhost:5000/content"
        );
        const data = await res.json();
        setContent(data);
        const test = [];

        data.map((course) => course.topics.map((topic) => test.push(topic)));

        setTopics(test);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMenuData();
  }, []);

  async function getTopics() {
    try {
      setIsLoading(true);
      const res = await fetch(
        // "https://ap-south-1.aws.data.mongodb-api.com/app/application-0-pknel/endpoint/getContent"
        "http://localhost:5000/content"
      );
      const data = await res.json();

      const test = [];

      data.map((course) => course.topics.map((topic) => test.push(topic)));

      setTopics(test);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }

    return topics;
  }

  return (
    <ContentContext.Provider value={{ isLoading, content, topics, getTopics }}>
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
