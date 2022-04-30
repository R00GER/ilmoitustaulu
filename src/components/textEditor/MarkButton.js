import { useSlate } from 'slate-react';
import ButtonComponent from '../UI/ButtonComponent';

function MarkButton({ format, icon, isMarkActive, toggleMark }) {
  const editor = useSlate();
  return (
    <ButtonComponent
      iconButton
      square
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {icon}
    </ButtonComponent>
  );
}

export default MarkButton;
