import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../contexts/UsersContext";
import styles from "./RecentActions.module.css";
import { useAuth } from "../contexts/AuthContext";
function RecentActions() {
  const { recentActions, getActions } = useUsers();
  const { id } = useAuth();
  useEffect(() => {
    getActions(id);
  }, [getActions, id]);

  return (
    <div className={`${styles.recentActions}`}>
      <h2 className={styles.heading}>Recent actions</h2>
      <div className={styles.actionsContainer}>
        {recentActions?.length > 0 ? (
          recentActions?.map((action) => (
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
          ))
        ) : (
          <h1>Hello</h1>
        )}
      </div>
    </div>
  );
}

export default RecentActions;
