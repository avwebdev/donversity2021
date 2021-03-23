import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface MarkdownViewProps {
  markdown: string;
}

export default function MarkdownView({ markdown }: MarkdownViewProps) {
  return <ReactMarkdown plugins={[gfm]}>{markdown}</ReactMarkdown>;
}
