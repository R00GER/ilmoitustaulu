import { cloneElement } from 'react';
import { useSlate } from 'slate-react';
import ButtonComponent from '../UI/ButtonComponent';

function MarkButton({ format, icon, isMarkActive, toggleMark }) {
  const editor = useSlate();
  return (
    <ButtonComponent
      iconButton
      square
      onMouseDown={event => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {cloneElement(icon, {
        style: { color: isMarkActive(editor, format) ? '#f2f2f2' : '#333333' },
      })}
    </ButtonComponent>
  );
}

export default MarkButton;
