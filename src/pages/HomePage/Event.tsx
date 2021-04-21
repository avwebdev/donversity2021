import { ContentPage } from "../../types";
import styles from "./HomePage.module.css";
import { Link, useHistory } from "react-router-dom";
import { useCallback } from "react";
import { getMediaPrefix } from "../../utils/funcs";

interface EventProps {
  day: string;
  page: ContentPage;
  highlight: boolean;
}

export default function Event({ day, page, highlight }: EventProps) {
  const history = useHistory();

  const handleOnClick = useCallback(() => {
    history.push(page.link);
  }, [history, page.link]);

  if (highlight)
    return (
      <div
        className={highlight ? styles.highlight : styles.event}
        onClick={handleOnClick}
      >
        <span>
          <span className={styles.imageContainer}>
            <img
              src={getMediaPrefix(day, page.imageUrl)}
              alt={`Page ${page.title}`}
            />
          </span>
          <h4>
            <Link to={page.link}>{page.title}</Link>
          </h4>
          <p>{page.description}</p>
        </span>
      </div>
    );
  else
    return (
      <div
        className={highlight ? styles.highlight : styles.event}
        onClick={handleOnClick}
      >
        <img
          src={getMediaPrefix(day, page.imageUrl)}
          alt={`Page ${page.title}`}
        />
        <span>
          <h4>
            <Link to={page.link}>{page.title}</Link>
          </h4>
          <p>{page.description}</p>
        </span>
      </div>
    );
}
