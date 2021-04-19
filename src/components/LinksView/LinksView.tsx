import styles from "./LinksView.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function LinksView({
  title, 
  link,
}: any) {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={["fas", "external-link-alt"]} style={iconStyles}></FontAwesomeIcon>
      <a href={link}>{title}</a>
    </div>
  );
}

const iconStyles = {
  "marginRight": "10px"
}
