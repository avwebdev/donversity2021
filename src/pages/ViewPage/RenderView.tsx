import { Content } from "../../types";
import VideoView from "../../components/VideoView/VideoView";
import LinksView from "../../components/LinksView/LinksView";
import MarkdownView from "../../components/MarkdownView/MarkdownView";

export default function renderView(views: Content[] | undefined) {
  if (!views) return undefined;
  const viewArr = [];
  for (const view of views) {
    switch (view.type) {
      case "VideoView":
        viewArr.push(
          <VideoView
            youtubeUrl={view.link}
            description={view.description}
            author={view.author}
            key={Math.random()}
          ></VideoView>
        );
        break;
      case "LinksView":
        viewArr.push(
          <LinksView
            title={view.title}
            description={view.description}
            hook={"Heyho"}
            key={Math.random()}
          ></LinksView>
        );
        break;
      case "MarkdownView":
        viewArr.push(
          <MarkdownView file={view.link} key={Math.random()}></MarkdownView>
        );
        break;
    }
  }

  return viewArr;
}