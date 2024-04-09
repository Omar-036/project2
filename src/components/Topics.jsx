import { useContent } from "../contexts/ContentContext";
import styles from "./Topics.module.css";
function Topics() {
  const { topics } = useContent();
  return (
    <div className="py-12 px-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">All Topics</h2>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-between">
        {topics?.map((topic) => (
          <div
            className=" shadow-lg tet-white p-12 rounded-xl"
            key={topic.title}
          >
            <div className="flex flex-col">
              <h5 className="text-3xl capitalize">{topic.title}</h5>
              <p>{topic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topics;
