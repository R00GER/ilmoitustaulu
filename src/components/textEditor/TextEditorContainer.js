// import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import { makeStyles } from '@mui/styles';
import BoldIcon from '@mui/icons-material/FormatBold';
import ItalicIcon from '@mui/icons-material/FormatItalic';
import UnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import ListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { Slate, Editable, withReact } from 'slate-react';
import {
  Editor,
  Transforms,
  createEditor,
  //   Descendant,
  Element as SlateElement,
} from 'slate';
import { EditorElement, EditorLeafElement } from './EditorElements';
import MarkButton from './MarkButton';
import BlockButton from './BlockButton';

const useStyles = makeStyles({
  textEditorContainer: {
    // minHeight: "100px",
    marginTop: '1rem',
  },
  buttonToolbar: {
    // borderBottom: "1px solid #3e4154",
    // borderTop: "1px solid #3e4154",
  },
});

const textEditorStyles = {
  padding: '0.5rem',
};

function TextEditorContainer({ placeholder, autoFocus, value, onChange }) {
  const [initialValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: value }],
    },
  ]);
  const classes = useStyles();
  const renderElement = useCallback(props => <EditorElement {...props} />, []);
  const renderLeaf = useCallback(props => <EditorLeafElement {...props} />, []);
  const editor = useMemo(() => withReact(createEditor()), []);

  const LIST_TYPES = ['numbered-list', 'bulleted-list'];

  const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  };

  const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format);

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  const isBlockActive = (editor, format, blockType = 'type') => {
    const { selection } = editor;
    if (!selection) return false;

    const [match] = Array.from(
      Editor.nodes(editor, {
        at: Editor.unhangRange(editor, selection),
        match: n =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n[blockType] === format,
      }),
    );

    return !!match;
  };

  const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format, 'type');
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
      match: n =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        LIST_TYPES.includes(n.type),
      // !TEXT_ALIGN_TYPES.includes(format),
      split: true,
    });
    const newProperties = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    };
    // if (TEXT_ALIGN_TYPES.includes(format)) {
    //   newProperties = {
    //     align: isActive ? undefined : format,
    //   };
    // } else {
    //   newProperties = {
    //     type: isActive ? "paragraph" : isList ? "list-item" : format,
    // //   };
    // }
    Transforms.setNodes(editor, newProperties);

    if (!isActive && isList) {
      const block = { type: format, children: [] };
      Transforms.wrapNodes(editor, block);
    }
  };

  //   const BlockButton = ({ format, icon }) => {
  //     const editor = useSlate();
  //     return (
  //       <ButtonComponent
  //       iconButton
  //         selected={isBlockActive(
  //           editor,
  //           format,
  //           TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  //         )}
  //         onMouseDown={(event) => {
  //           event.preventDefault();
  //           toggleBlock(editor, format);
  //         }}
  //       >
  //         <Icon>{icon}</Icon>
  //       </ButtonComponent>
  //     );
  //   };

  return (
    <div className={classes.textEditorContainer}>
      <Slate
        editor={editor}
        value={initialValue}
        onChange={returnArray => {
          if (onChange) {
            onChange(returnArray);
          }
        }}
      >
        <div className={classes.buttonToolbar}>
          <MarkButton
            format="bold"
            icon={<BoldIcon />}
            isMarkActive={isMarkActive}
            toggleMark={toggleMark}
          />
          <MarkButton
            format="italic"
            icon={<ItalicIcon />}
            isMarkActive={isMarkActive}
            toggleMark={toggleMark}
          />
          <MarkButton
            format="underline"
            icon={<UnderlinedIcon />}
            isMarkActive={isMarkActive}
            toggleMark={toggleMark}
          />
          <BlockButton
            format="numbered-list"
            icon={<ListBulletedIcon />}
            isBlockActive={isBlockActive}
            toggleBlock={toggleBlock}
          />
          <BlockButton
            format="bulleted-list"
            icon={<ListNumberedIcon />}
            isBlockActive={isBlockActive}
            toggleBlock={toggleBlock}
          />
        </div>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          style={textEditorStyles}
          placeholder={placeholder}
          autoFocus={autoFocus}
        />
      </Slate>
    </div>
  );
}

export default TextEditorContainer;
