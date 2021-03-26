import { useParams } from "react-router-dom";
import MarkdownView from "../../components/MarkdownView/MarkdownView";
import VideoView from "../../components/VideoView/VideoView";
import styles from "./ViewPage.module.css";

function createHeading(str: string) {
  const splitStr = str.toLowerCase().replace("-", " ").split(" ");

  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(" ");
}

export default function ViewPage(props: any) {
  let { view } = useParams() as Record<string, string>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{createHeading(view)}</h1>
      <VideoView
        description="Sample Video"
        youtubeUrl="https://www.youtube.com/embed/ZLH1_C-UNHw"
        author="Sample Author"
      />
      <MarkdownView file={view} />
    </div>
  );
}
