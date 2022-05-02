import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  editableTextFieldRow: {
    padding: '0.5rem',
    marginBottom: '0.25rem',
  },
});

function EditableTextFieldRow({ children }) {
  const classes = useStyles();
  return <div className={classes.editableTextFieldRow}>{children}</div>;
}

export default EditableTextFieldRow;
