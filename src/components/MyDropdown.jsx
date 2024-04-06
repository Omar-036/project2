import { useEffect, useState } from "react";
import Dropdown from "react-multilevel-dropdown";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function MyDropdown() {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchMenuData() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:5000/content");
        const data = await res.json();
        setContent(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMenuData();
  }, []);

  return (
    <div className="dropdown h-full ">
      {isLoading ? (
        <Loader />
      ) : (
        <Dropdown
          className="h-full  text-sm"
          title="Categories"
          openOnHover={true}
          isActive={false}
          buttonClassName="menu"
          position="right"
        >
          {content?.map((info) => (
            <Dropdown.Item key={info.title} className="shadow-none">
              {info.title}
              <Dropdown.Submenu position="right" className="w-fit">
                {info.topics.map((topic) => (
                  <Dropdown.Item
                    key={topic.title}
                    onClick={() => navigate(topic.path)}
                  >
                    {topic.title}
                  </Dropdown.Item>
                ))}
              </Dropdown.Submenu>
            </Dropdown.Item>
          ))}
        </Dropdown>
      )}
    </div>
  );
}

export default MyDropdown;
