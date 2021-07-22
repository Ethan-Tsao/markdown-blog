//Imports
import Components from "./Components";
import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  text: string;
}

const Markdown: React.FC<MarkdownProps> = (props: MarkdownProps) => (
  <ReactMarkdown components={Components}>{props.text}</ReactMarkdown>
);

export default Markdown;
