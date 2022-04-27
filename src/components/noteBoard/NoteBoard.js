import { makeStyles } from "@mui/styles";
import { Draggable } from "react-beautiful-dnd";
import BoardItemCard from "./NoteBoardItem";

const useStyles = makeStyles({
  canvasContainer: {
    width: "100vw",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyItems: "flex-start",
    alignItems: "flex-start",
    gap: "0.5rem",
    padding: "1rem",
  },
});

const BulletinBoard = ({ items, drobbableProvided, setItems }) => {
  const classes = useStyles();

  const handleSaveTitle = (id, title) =>
    setItems(
      items.map((noteItem) =>
        noteItem.id === id ? { ...noteItem, title } : noteItem
      )
    );

  return (
    <div
      className={classes.canvasContainer}
      ref={drobbableProvided.innerRef}
      {...drobbableProvided.droppableProps}
    >
      {items.map((item, index) => {
        return (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided) => (
              <BoardItemCard
                item={item}
                ref={provided.innerRef}
                draggableProps={provided.draggableProps}
                dragHandleProps={provided.dragHandleProps}
                handleSaveTitle={handleSaveTitle}
              />
            )}
          </Draggable>
        );
      })}
      {drobbableProvided.placeholder}
    </div>
  );
};

export default BulletinBoard;
