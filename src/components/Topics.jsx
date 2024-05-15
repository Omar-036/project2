import { useContent } from "../contexts/ContentContext";
import styles from "./Topics.module.css";
import { useNavigate } from "react-router-dom";

function Topics() {
  const { topics } = useContent();
  const navigate = useNavigate();
  return (
    <div className="p-12 bg-primary text-white">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">All Topics</h2>
      </div>
      <div className=" grid py-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-between">
        {topics?.map((topic) => (
          <div
            className=" bg-gray-300 text-black cursor-pointer hover:bg-gray-200 hover:-translate-y-2 duration-300 p-12 rounded-xl"
            key={topic.title}
            onClick={() => navigate(`${topic.path.replace(/\s+/g, "-")}`)}
          >
            <div className="flex flex-col">
              <h5 className="text-3xl capitalize">{topic.title}</h5>
              <p className="text-gray-600">{topic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topics;
