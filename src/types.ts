export interface ContentPage {
  title: string;
  navTitle: string;
  link: string;
  description: string;
  content: Content[];
  author?: string;
}

export interface Content {
  type: "MediaView" | "LinksView" | "MarkdownView";
  link: string;
  description?: string;
  title?: string;
  author?: string;
  contentType?: "yt-video" | "image"
}

export interface ContentSections {
  monday: ContentPage[];
  tuesday: ContentPage[];
  wednesday: ContentPage[];
  thursday: ContentPage[];
  friday: ContentPage[];
}
