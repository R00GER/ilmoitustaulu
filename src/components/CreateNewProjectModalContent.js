import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import EditableTextFieldRow from './EditableTextFieldRow';
import ButtonComponent from './UI/ButtonComponent';
import { EditableTextField, SelectField } from './UI/FieldComponents';

const useStyles = makeStyles({
  createNewProjectModalContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    minWidth: '300px',
    maxWidth: '50vw',
    width: '50vw',
    padding: '1rem',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

function CreateNewProjectModalContent() {
  const [newProject, setNewProject] = useState({ name: '', type: '' });
  const classes = useStyles();

  const boardTypes = [
    { label: 'Note', value: 'note' },
    { label: 'Flow', value: 'flow' },
    { label: 'DashBoard', value: 'dash' },
  ];

  const handleNewProjectChange = ({ name, value }) =>
    setNewProject({ ...newProject, [name]: value });

  return (
    <div className={classes.createNewProjectModalContentContainer}>
      <EditableTextFieldRow>
        <EditableTextField
          name="name"
          value={newProject.name}
          fullWidth
          variant="standard"
          label="Project name"
          required
          onChange={target => handleNewProjectChange(target)}
        />
      </EditableTextFieldRow>
      <EditableTextFieldRow>
        <SelectField
          name="type"
          value={newProject.type}
          fullWidth
          label="Board type"
          options={boardTypes}
          onChange={target => handleNewProjectChange(target)}
        />
      </EditableTextFieldRow>
      <div className={classes.buttonContainer}>
        <ButtonComponent variant="contained" text="Create" onClick={() => {}} />
      </div>
    </div>
  );
}

export default CreateNewProjectModalContent;
