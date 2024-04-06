import { useEffect, useState } from "react";
import Dropdown from "react-multilevel-dropdown";
import { useNavigate } from "react-router-dom";

function MyDropdown() {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchMenuData() {
      try {
        setIsLoading(true);
        const res = await fetch("../../data/data.json");
        const data = await res.json();
        setContent(data.content);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMenuData();
  }, []);

  return (
    <div className="dropdown h-full">
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <Dropdown
          className="h-full  text-sm "
          title="Categories"
          openOnHover={true}
          isActive={false}
          buttonClassName="menu"
          position="right"
        >
          {content.map((info) => (
            <Dropdown.Item key={info.title} className="shadow-none">
              {info.title}
              <Dropdown.Submenu position="right">
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
