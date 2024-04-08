import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fade, Slide, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";
import Loader from "./Loader";
import { useContent } from "../contexts/ContentContext";

const properties = {
  prevArrow: (
    <button className={`${styles.sliderArrows} ${styles.leftArrow}`}>
      <svg
        width="20"
        height="20"
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
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
      </svg>
    </button>
  ),
};

function Slider() {
  const navigate = useNavigate();
  const { isLoading, topics } = useContent();

  return (
    <div>
      {isLoading ? (
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <Slide
          {...properties}
          duration={2500}
          transitionDuration={900}
          autoplay={true}
        >
          {topics?.map((topic, index) => (
            <div key={index}>
              <div
                className={styles.contentContainer}
                style={{ backgroundImage: `url(${topic?.image})` }}
              >
                <div className={`${styles.content} h-full`}>
                  <div className="flex  flex-col h-full gap-y-8 justify-center w-100% md:max-w-[50%]">
                    {" "}
                    <p
                      className={`${styles.title} text-6xl font-bold capitalize text-gradient `}
                    >
                      {topic?.title}
                    </p>
                    <p className={`${styles.description} text-dimWhite`}>
                      <span>{topic?.description}</span>
                    </p>
                    <button
                      className=" bg-white px-8 py-4 rounded w-fit text-sm font-semibold hover:opacity-90 duration-200 text-primary inline-block bg-blue-gradient"
                      onClick={() => navigate(topic?.path)}
                    >
                      Show More
                    </button>
                  </div>
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
