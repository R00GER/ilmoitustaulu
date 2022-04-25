import { useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const TextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        // Define a new handler which prints the key that was pressed.
        onKeyDown={(event) => {
          console.log(event.key);
        }}
      />
    </Slate>
  );
};

export default TextEditor;
