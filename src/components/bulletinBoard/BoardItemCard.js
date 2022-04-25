import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { forwardRef } from "react";
import TextEditor from "../TextEditor";

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
  },
  contentContainer: {
    padding: "0.75rem",
    minHeight: "76px",
  },
});

const BoardItemCard = forwardRef(
  ({ title, text, draggableProps, dragHandleProps, item }, ref) => {
    const classes = useStyles();

    return (
      <div
        key={item.id}
        ref={ref}
        className={classes.boardItemCardContainer}
        {...draggableProps}
        {...dragHandleProps}
      >
        {title && (
          <div className={classes.titleContainer}>
            <Typography>{title}</Typography>
          </div>
        )}
        <div className={classes.contentContainer}>
          <TextEditor />
        </div>
      </div>
    );
  }
);

export default BoardItemCard;
