import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-hooks';
import DeleteIcon from '@mui/icons-material/Delete';
import TimeIcon from '@mui/icons-material/AccessTime';
import LabelIcon from '@mui/icons-material/Label';
import ArchiveIcon from '@mui/icons-material/Archive';
import TextEditorContainer from '../textEditor/TextEditorContainer';
import { EditableTextField } from '../UI/FieldComponents';
import ButtonComponent from '../UI/ButtonComponent';

const useStyles = makeStyles({
  noteItemModalContentContainer: {
    width: '50vw',
  },
  noteItemModalContentTitleContainer: {
    padding: '0.5rem 12px',
    // borderBottom: '1px solid #3e4154',
  },
  noteItemModalContentNoteContainer: {
    minHeight: '150px',
  },
  noteItemModalContentTools: {
    padding: '4px',
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

  const tools = [
    { tooltipLabel: 'Remind', icon: <TimeIcon /> },
    { tooltipLabel: 'Add label', icon: <LabelIcon /> },
    { tooltipLabel: 'Archive', icon: <ArchiveIcon /> },
    { tooltipLabel: 'Delete note', icon: <DeleteIcon /> },
  ];

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
      <div className={classes.noteItemModalContentTools}>
        {tools.map(tool => (
          <ButtonComponent
            styles={{ marginRight: '0.25rem' }}
            iconButton
            tooltipLabel={tool.tooltipLabel}
          >
            {tool.icon}
          </ButtonComponent>
        ))}
      </div>
    </div>
  );
}

export default NoteItemModalContent;
