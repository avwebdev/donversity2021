import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import styles from "./MarkdownView.module.css";

interface MarkdownViewProps {
  file: string;
}

export default function MarkdownView({ file }: MarkdownViewProps) {
  const [raw, setRaw] = React.useState("");

  React.useEffect(() => {
    let isMounted = true;

    const getFile = async () => {
      const res = await fetch(`/markdown/${file}.md`);
      const text = await res.text();

      if (isMounted) setRaw(text);
    };

    try {
      getFile();
    }
    catch (e) {
      console.log(e);
    }

    return () => {
      isMounted = false;
    };
  }, [file]);

  return (
    <div id={styles.container}>
      <ReactMarkdown plugins={[gfm]} allowDangerousHtml>{raw}</ReactMarkdown>
    </div>
  )
}
