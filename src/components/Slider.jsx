import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";
import Loader from "./Loader";

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "../../images/vitej.jpg",
  },
  {
    url: "../../images/vite2.png",
  },
];

const properties = {
  prevArrow: (
    <button className={`${styles.sliderArrows} ${styles.leftArrow}`}>
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
      </svg>
    </button>
  ),
  nextArrow: (
    <button className={styles.sliderArrows}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
      </svg>
    </button>
  ),
};
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

function Slider() {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:5000/content");
        const data = await res.json();
        setTopics(getTopics(data));
      } catch (err) {
        //
      } finally {
        //
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="absolute top-1/3 left-1/2 translate-x-1/2">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <Slide {...properties}>
          {topics?.map((topic, index) => (
            <div key={index}>
              <div
                className={styles.contentContainer}
                style={{ backgroundImage: `url(${topic?.image})` }}
              >
                <div className={styles.content}>
                  <p className={styles.title}>{topic?.title}</p>
                  <p className={styles.description}>
                    <span>{topic?.description}</span>
                  </p>
                  <button
                    className="btn btn-primary-border-nav"
                    onClick={() => navigate(topic?.path)}
                  >
                    Show More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      )}
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
