import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EditableTextField } from '../UI/FieldComponents';

const useStyles = makeStyles({
  noteBoardInputContainer: {
    maxWidth: '500px',
    width: '500px',
    minWidth: '300px',
    margin: 'auto',
    border: '3px solid #3e4154',
    borderRadius: '8px',
  },
  titleField: {
    padding: '0.5rem 1rem',
    maxWidth: '100%',
  },
  noteField: {
    maxWidth: '100%',
    padding: '0.5rem 1rem',
  },
});

function NoteBoardInputContainer({ items, setItems }) {
  const [inputValues, setInputValues] = useState({ title: '', note: '' });
  const [showExpandedNewItemInput, setShowExpandedNewItemInput] =
    useState(false);

  const classes = useStyles();

  const handleNewNoteBoardItem = () => {
    const newItem = {
      title: inputValues.title || '',
      note: inputValues.note || '',
      id: uuidv4(),
    };

    setItems([...items, newItem]);
    setInputValues({ title: '', note: '' });
  };

  const handleNoteBoardItemChange = e => {
    const { name, value } = e;

    const updatedFields = {
      ...inputValues,
      [name]: value,
    };

    setInputValues(updatedFields);
  };

  const handleShowExpandedNewItemInput = e => {
    const input = e.target.name;

    if (!showExpandedNewItemInput) {
      if (input === 'note' || input === 'title') {
        setShowExpandedNewItemInput(true);
      }
    }
  };

  const handleHideExpandedNewItemInput = e => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      // clicked outside of parent and children
      if (inputValues.title || inputValues.note) {
        handleNewNoteBoardItem();
      }
      setShowExpandedNewItemInput(false);
    }
  };

  return (
    <div
      className={classes.noteBoardInputContainer}
      onBlur={e => handleHideExpandedNewItemInput(e)}
    >
      <EditableTextField
        autoComplete="off"
        fullWidth
        InputProps={{ className: classes.noteField, disableUnderline: true }}
        name="title"
        variant="standard"
        placeholder={showExpandedNewItemInput ? 'Title' : 'Add note...'}
        buttonText="Add"
        buttonVariant="contained"
        onChange={e => handleNoteBoardItemChange(e)}
        value={inputValues.title}
        onFocus={handleShowExpandedNewItemInput}
        autoFocus={!showExpandedNewItemInput}
      />
      {showExpandedNewItemInput && (
        <EditableTextField
          autoFocus
          autoComplete="off"
          fullWidth
          name="note"
          variant="standard"
          placeholder="Add note..."
          InputProps={{ className: classes.titleField, disableUnderline: true }}
          onChange={e => handleNoteBoardItemChange(e)}
          value={inputValues.note}
          onFocus={handleShowExpandedNewItemInput}
        />
      )}
    </div>
  );
}

NoteBoardInputContainer.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
  setItems: PropTypes.func.isRequired,
};

export default NoteBoardInputContainer;
