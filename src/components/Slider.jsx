import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  // color: '#000000',
};

const divStyle = {
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  height: "600px",
  position: "relative",
};

const h2Styling = {
  fontSize: "40px",
  fontWeight: "bold",
};

const contentStyling = {
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "#084",
  translate: "-50% -50%",
};

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  // {
  //   url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  //   caption: 'Slide 3',
  // },
  {
    url: "../../images/vitej.jpg",
  },
  {
    url: "../../images/vite2.png",
  },
];

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

  console.log(topicArrays);

  return topicArrays;
}

function Slider() {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("../../data/data.json");
        const data = await res.json();
        setTopics(getTopics(data.content));
      } catch (err) {
      } finally {
      }
    }
    fetchData();
  }, []);

  return (
    <div className="slide-container slider">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <div className="content" style={{ ...contentStyling }}>
                <h2 style={{ ...h2Styling }}>{topics[index]?.title}</h2>
                <p>
                  <span style={spanStyle}>{topics[index]?.description}</span>
                </p>
                <button
                  className="btn"
                  onClick={() => navigate(topics[index]?.path)}
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slider;

/*
After you add the images to the json folder the edit the code to be


<Slide>
	{topics.map((topic, index) => (
		<div key={index}>
			<div
				style={{ ...divStyle, backgroundImage: `url(${topic.image})` }}
			>
				<div className="content" style={{ ...contentStyling }}>
					<h2 style={{ ...h2Styling }}>{topic?.title}</h2>
					<p>
						<span style={spanStyle}>{topic?.description}</span>
					</p>
					<button
						className="btn"
						onClick={() => navigate(topic?.path)}
					>
						Show More
					</button>
				</div>
			</div>
		</div>
	))}
</Slide>

*/
