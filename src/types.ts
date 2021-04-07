export interface ContentPage {
    title: string;
    navTitle: string;
    link: string;
    description: string
    content: Content[]
}

export interface Content {
    type: "VideoView" | "LinksView" | "MarkdownView",
    link: string,
    description?: string;
    title?: string;
    author?: string;
}