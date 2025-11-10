// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import { Bold, Heading1, Heading2, Italic } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function RichTextEditor({
//   value,
//   onChange,
// }: {
//   value: string;
//   onChange: (v: string) => void;
// }) {
//   const editor = useEditor({
//     extensions: [StarterKit],
//     content: value,
//     onUpdate: ({ editor }) => {
//       onChange(editor.getHTML()); // ✅ Return HTML output
//     },
//   });

//   if (!editor) return null;

//   return (
//     <div className="space-y-2">
//       {/* Toolbar */}
//       <div className="flex gap-2 border p-2 rounded bg-muted">
//         <Button
//           size="sm"
//           variant={editor.isActive("bold") ? "default" : "outline"}
//           onClick={() => editor.chain().focus().toggleBold().run()}
//         >
//           <Bold className="h-4 w-4" />
//         </Button>

//         <Button
//           size="sm"
//           variant={editor.isActive("italic") ? "default" : "outline"}
//           onClick={() => editor.chain().focus().toggleItalic().run()}
//         >
//           <Italic className="h-4 w-4" />
//         </Button>

//         <Button
//           size="sm"
//           variant={
//             editor.isActive("heading", { level: 1 }) ? "default" : "outline"
//           }
//           onClick={() =>
//             editor.chain().focus().toggleHeading({ level: 1 }).run()
//           }
//         >
//           <Heading1 className="h-4 w-4" />
//         </Button>

//         <Button
//           size="sm"
//           variant={
//             editor.isActive("heading", { level: 2 }) ? "default" : "outline"
//           }
//           onClick={() =>
//             editor.chain().focus().toggleHeading({ level: 2 }).run()
//           }
//         >
//           <Heading2 className="h-4 w-4" />
//         </Button>
//       </div>

//       {/* Editor Content */}
//       <div className="border rounded p-3 min-h-[150px]">
//         <EditorContent editor={editor} />
//       </div>
//     </div>
//   );
// }

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import Link from "@tiptap/extension-link";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight } from "lowlight";
const lowlight = createLowlight();

import {
  Bold,
  Italic,
  UnderlineIcon,
  Strikethrough,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Code,
  Link as LinkIcon,
  Undo,
  Redo,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function RichTextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Strike,
      CodeBlockLowlight.configure({ lowlight }),
      Link.configure({ openOnClick: false }),
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return null;

  // Helper to set links:
  const setLink = () => {
    const url = prompt("Enter link URL:");
    if (url) editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 border p-2 rounded bg-muted">
        <Button
          size="sm"
          variant={editor.isActive("bold") ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="h-4 w-4" />
        </Button>

        <Button
          size="sm"
          variant={editor.isActive("italic") ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="h-4 w-4" />
        </Button>

        <Button
          size="sm"
          variant={editor.isActive("underline") ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon className="h-4 w-4" />
        </Button>

        <Button
          size="sm"
          variant={editor.isActive("strike") ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough className="h-4 w-4" />
        </Button>

        <Button
          size="sm"
          variant={
            editor.isActive("heading", { level: 1 }) ? "default" : "outline"
          }
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          <Heading1 className="h-4 w-4" />
        </Button>

        <Button
          size="sm"
          variant={
            editor.isActive("heading", { level: 2 }) ? "default" : "outline"
          }
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Heading2 className="h-4 w-4" />
        </Button>

        <Button
          size="sm"
          variant={editor.isActive("bulletList") ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="h-4 w-4" />
        </Button>

        <Button
          size="sm"
          variant={editor.isActive("orderedList") ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className="h-4 w-4" />
        </Button>

        <Button
          size="sm"
          variant={editor.isActive("blockquote") ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote className="h-4 w-4" />
        </Button>

        <Button
          size="sm"
          variant={editor.isActive("codeBlock") ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <Code className="h-4 w-4" />
        </Button>

        <Button size="sm" variant="outline" onClick={setLink}>
          <LinkIcon className="h-4 w-4" />
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={() => editor.chain().focus().unsetLink().run()}
        >
          Remove Link
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={() => editor.chain().focus().undo().run()}
        >
          <Undo className="h-4 w-4" />
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={() => editor.chain().focus().redo().run()}
        >
          <Redo className="h-4 w-4" />
        </Button>
      </div>

      {/* Editor */}
      <div className="border rounded p-3 min-h-[180px] prose max-w-none">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
