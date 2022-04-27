import { Typography } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { forwardRef, useState } from "react";
import TextEditor from "../TextEditor";
import ButtonComponent from "../UI/ButtonComponent";
import { EditableTextField } from "../UI/fieldComponents";

const useStyles = makeStyles({
  boardItemCardContainer: {
    minWidth: "300px",
    maxWidth: "500px",
    // background: "#13141a",
    background: "#1b1d25",
    boxShadow: "rgba(0, 0, 0, 0.85) 0px 1px 4px;",
    cursor: "grab",
    border: "2px solid #22242e",
    borderRadius: "6px",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #3e4154",
    padding: "0.25rem 0.75rem",
    minHeight: "33px",
  },
  contentContainer: {
    padding: "0.75rem",
    minHeight: "76px",
  },
  textButton: {
    textTransform: "none",
    padding: "0px !important",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  hided: {
    visibility: "hidden",
  },
});

const NoteBoardItem = forwardRef(
  ({ item, draggableProps, dragHandleProps, handleSaveTitle }, ref) => {
    const [titleTextField, setTitleTextField] = useState({
      show: false,
      value: "",
    });
    const classes = useStyles();

    console.log(titleTextField);

    const onTextFieldBlur = () => {
      handleSaveTitle(item.id, titleTextField.value);
      setTitleTextField({ show: false, value: "" });
      console.log("blue");
    };

    const chooseTitleElement = () => {
      if (titleTextField.show) {
        return (
          <EditableTextField
            autoFocus
            autoComplete="off"
            fullWidth
            name="title"
            variant="standard"
            placeholder="Add title..."
            InputProps={{
              // className: classes.titleField,
              disableUnderline: true,
            }}
            onChange={(target) =>
              setTitleTextField({ ...titleTextField, value: target.value })
            }
            value={titleTextField.value}
            onBlur={onTextFieldBlur}
          />
        );
      }

      return item.title ? (
        <Typography>{item.title}</Typography>
      ) : (
        <ButtonComponent
          classes={classes.textButton}
          text="Add title"
          size="small"
          color="secondary"
          disableRipple
          disableTouchRipple
          disableHoverEffect
          disableTextTransform
          onClick={() => setTitleTextField({ ...titleTextField, show: true })}
        />
      );
    };

    return (
      <div
        key={item.id}
        ref={ref}
        className={[
          classes.boardItemCardContainer,
          titleTextField.show && classes.hided,
        ]
          .filter(Boolean)
          .join(" ")}
        {...draggableProps}
        {...dragHandleProps}
      >
        <div className={classes.titleContainer}>{chooseTitleElement()}</div>
        <div className={classes.contentContainer}>
          <TextEditor value={item.note} />
        </div>
      </div>
    );
  }
);

export default NoteBoardItem;
