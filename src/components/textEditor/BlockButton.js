import { useSlate } from 'slate-react';
import ButtonComponent from '../UI/ButtonComponent';

function BlockButton({ format, icon, isBlockActive, toggleBlock }) {
  const editor = useSlate();
  return (
    <ButtonComponent
      iconButton
      square
      active={isBlockActive(
        editor,
        format,
        'type',
        //   TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
      )}
      onMouseDown={event => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {icon}
    </ButtonComponent>
  );
}

export default BlockButton;
