import { SimpleEditor } from "../tiptap-templates/simple/simple-editor";

type Props = {
  value: string;
  onChange: (content: string) => void;
};

export default function TipTapEditor({ value, onChange }: Props) {
  return <SimpleEditor value={value} onChange={onChange} />;
}
