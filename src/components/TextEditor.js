import { useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const TextEditor = ({ styles, placeholder, autoFocus, value }) => {
  const [initialValue] = useState([
    {
      type: "paragraph",
      children: [{ text: value }],
    },
  ]);
  const editor = useMemo(() => withReact(createEditor()), []);
  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        style={styles}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
    </Slate>
  );
};

export default TextEditor;
