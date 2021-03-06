import { Content } from "../../types";
import MediaView from "../../components/MediaView/MediaView";
import LinksView from "../../components/LinksView/LinksView";
import MarkdownView from "../../components/MarkdownView/MarkdownView";

export default function renderView(day: string, views: Content[]) {
  if (!views) return undefined;

  const viewArr = [];

  for (const view of views) {
    switch (view.type) {
      case "MediaView":
        viewArr.push(
          <MediaView
            url={view.link}
            description={view.description}
            author={view.author}
            type={view.contentType}
            key={Math.random()}
          ></MediaView>
        );
        break;
      case "LinksView":
        viewArr.push(
          <LinksView
            title={view.title}
            link={view.link}
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
