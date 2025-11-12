import { useEffect } from "react";
import { SimpleEditor } from "../tiptap-templates/simple/simple-editor";

type Props = {
  value: string;
  disabled?: boolean;
  onChange: (content: string) => void;
};

export default function TipTapEditor({
  value,
  onChange,
  disabled = false,
}: Props) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);
  return (
    <SimpleEditor
      value={value}
      onChange={onChange}
      //@ts-ignore
      disabled={disabled}
    />
  );
}
