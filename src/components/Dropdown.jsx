import Dropdown from "react-multilevel-dropdown";
import { useNavigate } from "react-router-dom";
import { useContent } from "../contexts/ContentContext";

function MyDropdown() {
  const navigate = useNavigate();
  const { isLoading, content } = useContent();

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
            <Dropdown.Item
              key={info.title}
              className="shadow-none border-b  last:border-b-0"
            >
              {info.title}
              <Dropdown.Submenu position="right" className="w-fit">
                {info.topics.map((topic) => (
                  <Dropdown.Item
                    className="border-b last:border-b-0"
                    key={topic.title}
                    onClick={() => navigate(topic.path.replace(/\s+/g, "-"))}
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
