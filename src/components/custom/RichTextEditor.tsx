import { useEffect } from "react";
import { SimpleEditor } from "../tiptap-templates/simple/simple-editor";
import { type JSONContent } from "@tiptap/react";

type Props = {
  value: JSONContent;
  onChange: (content: JSONContent) => void;
};

export default function TipTapEditor({ value, onChange }: Props) {
  useEffect(() => {
  document.documentElement.setAttribute("data-theme", "dark")
}, [])
  return <SimpleEditor value={value} onChange={onChange} />;
}
