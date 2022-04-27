import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TextEditor from "../TextEditor";
import { EditableTextField } from "../UI/fieldComponents";

const useStyles = makeStyles({
  bulletinBoardInputContainer: {
    maxWidth: "500px",
    width: "500px",
    minWidth: "300px",
    margin: "auto",
    border: "3px solid #3e4154",
    borderRadius: "8px",
  },
  titleField: {
    padding: "0.5rem 1rem",
    maxWidth: "100%",
  },
  noteField: {
    maxWidth: "100%",
    padding: "0.5rem 1rem",
  },
});

const editorStyles = {
  padding: "1rem",
};

const BulletinBoardInputContainer = ({ items, setItems }) => {
  const [inputValues, setInputValues] = useState({ title: "", note: "" });
  const [showExpandedNewItemInput, setShowExpandedNewItemInput] =
    useState(false);

  const classes = useStyles();

  const addNewBulletinBoardItem = () => {
    const newItem = {
      title: inputValues.title || "",
      note: inputValues.note || "",
      id: uuidv4(),
    };

    setItems([...items, newItem]);
    setInputValues({ title: "", note: "" });
  };

  const changeNewBulletinBoardItem = (e) => {
    const { name, value } = e;

    const updatedFields = {
      ...inputValues,
      [name]: value,
    };

    setInputValues(updatedFields);
  };

  const handleShowExpandedNewItemInput = (e) => {
    const input = e.target.name;

    if (!showExpandedNewItemInput) {
      if (input === "note" || input === "title") {
        setShowExpandedNewItemInput(true);
      }
    }
  };

  const handleHideExpandedNewItemInput = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      // clicked outside of parent and children
      if (inputValues.title || inputValues.note) {
        addNewBulletinBoardItem();
      }
      setShowExpandedNewItemInput(false);
    }
  };

  return (
    <div
      className={classes.bulletinBoardInputContainer}
      onBlur={(e) => handleHideExpandedNewItemInput(e)}
    >
      <EditableTextField
        autoComplete="off"
        fullWidth
        InputProps={{ className: classes.noteField, disableUnderline: true }}
        name="title"
        variant="standard"
        placeholder={showExpandedNewItemInput ? "Title" : "Add note..."}
        buttonText="Add"
        buttonVariant="contained"
        onChange={(e) => changeNewBulletinBoardItem(e)}
        value={inputValues.title}
        onFocus={handleShowExpandedNewItemInput}
        autoFocus={!showExpandedNewItemInput}
      />
      {showExpandedNewItemInput && (
        // <TextEditor styles={editorStyles} placeholder="Add note.." />
        <EditableTextField
          autoFocus
          autoComplete="off"
          fullWidth
          name="note"
          variant="standard"
          placeholder="Add note..."
          InputProps={{ className: classes.titleField, disableUnderline: true }}
          onChange={(e) => changeNewBulletinBoardItem(e)}
          value={inputValues.note}
          onFocus={handleShowExpandedNewItemInput}
        />
      )}
    </div>
  );
};

export default BulletinBoardInputContainer;
