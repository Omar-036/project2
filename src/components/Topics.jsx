import { useContent } from '../contexts/ContentContext';
import styles from './Topics.module.css';
function Topics() {
  const { topics } = useContent();
  return (
    <div className={styles.container}>
      <div className={styles.nestedContainer}>
        {topics?.map(topic => (
          <div className={styles.topic} key={topic.title}>
            <div className={styles.image}>
              <img
                src={`https://placehold.co/400x200/657984/fff.png?text=${topic.title}&font=playfair-display`}
                className={styles.img}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h5>{topic.title}</h5>
							<p>{ topic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topics;
