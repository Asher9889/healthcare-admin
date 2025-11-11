import { useEffect } from "react";
import { SimpleEditor } from "../tiptap-templates/simple/simple-editor";

type Props = {
  value: string;
  onChange: (content: string) => void;
};

export default function TipTapEditor({ value, onChange }: Props) {
  useEffect(() => {
  document.documentElement.setAttribute("data-theme", "dark")
}, [])
  return <SimpleEditor value={value} onChange={onChange} />;
}
