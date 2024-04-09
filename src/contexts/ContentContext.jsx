/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';

const ContentContext = createContext();

function getTopics(data) {
  const topicArrays = [];

  if (typeof data !== 'object' || data === null) {
    return topicArrays;
  }

  const courses = data || [];

  for (const course in courses) {
    const courseTopics = courses[course].topics || [];

    for (const topic in courseTopics) {
      topicArrays.push(courseTopics[topic]);
    }
  }

  return topicArrays;
}

function convertToArray(courseCategory) {

	// DONO'T EDIT THIS CODE: this code convert the courses and topics objects to arrays

  const courses = [];
  for (const course in courseCategory) {
    const topics = courseCategory[course].topics;
    const topicsArray = [];

    for (const topic in topics) {
      topicsArray.push(topics[topic]);
    }

    courses.push({
      title: course,
      topics: topicsArray,
    });
  }

  return courses;
}

function ContentProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchMenuData() {
      try {
        setIsLoading(true);
        const res = await fetch(
          'https://ap-south-1.aws.data.mongodb-api.com/app/application-0-pknel/endpoint/getContent'
        );
        const data = await res.json();
        setContent(convertToArray(data[0].courses));
        setTopics(getTopics(convertToArray(data[0].courses)));
        console.log(convertToArray(data[0].courses));
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMenuData();
  }, []);

  return (
    <ContentContext.Provider value={{ isLoading, content, topics }}>
      {children}
    </ContentContext.Provider>
  );
}

function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined)
    throw new Error('Content context was used outside the ContentProvider');
  return context;
}

export { ContentProvider, useContent };
