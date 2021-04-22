import { getMediaPrefix } from "../../utils/funcs";
import styles from "./MediaView.module.css";

export default function MediaView({ description, url, type, className }: any) {
  switch (type) {
    case "yt-video": {
      return (
        <section id={styles.container}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={url}
              title="Youtube video"
              allowFullScreen
            ></iframe>
          </div>
          <p>{description}</p>
        </section>
      );
    }

    case "video": {
      return (
        <video controls className={className}>
          <source src={getMediaPrefix(url)} />
        </video>
      );
    }

    case "image": {
      return (
        <section id={styles.container}>
          <div>
            <img src={getMediaPrefix(url)} alt={description} />
          </div>
          <p>{description}</p>
        </section>
      );
    }

    default: {
      return <></>;
    }
  }
}
