import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../contexts/UsersContext";
import styles from "./RecentActions.module.css";
function RecentActions() {
  const { recentActions, getActions } = useUsers();

  useEffect(() => {
    getActions("ali", "123456");
  }, [getActions]);

  console.log(recentActions);

  return (
    <div className={`${styles.recentActions}`}>
      <h2 className={styles.heading}>Recent actions</h2>
      <div className={styles.actionsContainer}>
        {recentActions.map((action) => (
          <Link key={action.title} to={action.path}>
            <div className={styles.action}>
              <img
                // 235
                src={`https://placehold.co/170x100/657984/fff.png?text=${action.title}&font=playfair-display`}
                alt="d"
              />
              <div className={styles.content}>
                <p className={styles.title}>{action.title}</p>
                <p className={styles.description}>{action.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecentActions;
