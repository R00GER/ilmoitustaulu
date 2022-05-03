import { cloneElement } from 'react';
import { useSlate } from 'slate-react';
import ButtonComponent from '../UI/ButtonComponent';

function BlockButton({ format, icon, isBlockActive, toggleBlock }) {
  const editor = useSlate();
  return (
    <ButtonComponent
      iconButton
      square
      onMouseDown={event => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {cloneElement(icon, {
        style: { color: isBlockActive(editor, format) ? '#f2f2f2' : '#333333' },
      })}
    </ButtonComponent>
  );
}

export default BlockButton;
