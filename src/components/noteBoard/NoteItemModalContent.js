import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-hooks';
import TextEditorContainer from '../textEditor/TextEditorContainer';
import { EditableTextField } from '../UI/FieldComponents';

const useStyles = makeStyles({
  noteItemModalContentContainer: {
    width: '50vw',
  },
  noteItemModalContentTitleContainer: {
    padding: '0.5rem',
    borderBottom: '1px solid #3e4154',
  },
  noteItemModalContentNoteContainer: {
    // padding: "0.5rem",
  },
});

function NoteItemModalContent({ item, handleSaveItem }) {
  const [inputValues, setInputValues] = useState({
    title: item.title,
    note: item.note,
  });

  const classes = useStyles();
  const debouncedInputValues = useDebounce(inputValues, 1000);

  useEffect(() => {
    if (
      (inputValues.title !== item.title || inputValues.note !== item.note) &&
      debouncedInputValues
    ) {
      const updatedItem = {
        ...item,
        title: inputValues.title,
        note: inputValues.note,
      };

      handleSaveItem(updatedItem);
    }
    // eslint-disable-next-line
  }, [debouncedInputValues]);

  const onTextEditorChange = returnArray => {
    const editor = returnArray[0];
    const noteEditor = editor.children[0];
    const noteValue = noteEditor.text;

    setInputValues({ ...inputValues, note: noteValue });
  };

  return (
    <div className={classes.noteItemModalContentContainer}>
      <div className={classes.noteItemModalContentTitleContainer}>
        <EditableTextField
          fullWidth
          name="title"
          variant="standard"
          InputProps={{ disableUnderline: true }}
          placeholder="Add title"
          value={inputValues.title}
          onChange={({ name, value }) =>
            setInputValues({ ...inputValues, [name]: value })
          }
        />
      </div>
      <div className={classes.noteItemModalContentNoteContainer}>
        <TextEditorContainer
          value={inputValues.note}
          onChange={e => onTextEditorChange(e)}
        />
      </div>
    </div>
  );
}

export default NoteItemModalContent;
