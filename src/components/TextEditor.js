// import PropTypes from 'prop-types';
// import { useMemo, useState } from 'react';
// import { createEditor } from 'slate';
// import { Slate, Editable, withReact } from 'slate-react';

// function TextEditor({ styles, placeholder, autoFocus, value, onChange }) {
//   const [initialValue] = useState([
//     {
//       type: 'paragraph',
//       children: [{ text: value }],
//     },
//   ]);
//   const editor = useMemo(() => withReact(createEditor()), []);
//   return (
//     <Slate
//       editor={editor}
//       value={initialValue}
//       onChange={returnArray => {
//         if (onChange) {
//           onChange(returnArray);
//         }
//       }}
//     >
//       <Editable
//         style={styles}
//         placeholder={placeholder}
//         autoFocus={autoFocus}
//       />
//     </Slate>
//   );
// }

// TextEditor.propTypes = {
//   styles: PropTypes.objectOf(PropTypes.string),
//   placeholder: PropTypes.string,
//   autoFocus: PropTypes.bool,
//   // value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
// };

// export default TextEditor;
