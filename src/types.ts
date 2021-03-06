export interface ContentPage {
  title: string;
  navTitle: string;
  link: string;
  description: string;
  content: Content[];
  author?: string;
  highlight?: true;
  imageUrl: string;
}

export interface Content {
  type: "MediaView" | "LinksView" | "MarkdownView";
  link: string;
  description?: string;
  title?: string;
  author?: string;
  contentType?: "yt-video" | "image";
}

export interface Club {
  name: string;
  id: string;
  description: string;
  image: string;
  video?: string;
}

export interface ContentSections {
  monday: ContentSection;
  tuesday: ContentSection;
  wednesday: ContentSection;
  thursday: ContentSection;
  friday: ContentSection;
  clubs: Club[];
  [id: string]: any;
}

export interface ContentSection {
  motto?: string;
  dayName?: string;
  sections: ContentPage[];
}
