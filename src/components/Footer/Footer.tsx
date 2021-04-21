import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light d-flex justify-content-center position-relative">
      Created by the AV Web Team
      <span className={styles.link}>
        <a
          href="https://github.com/avwebdev/donversity2021"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the Source Code
          <FontAwesomeIcon
            className={styles.icon}
            icon={["fas", "external-link-alt"]}
          />
        </a>
      </span>
    </footer>
  );
}
