import { makeStyles } from "@mui/styles";
import { Draggable } from "react-beautiful-dnd";
import BoardItemCard from "./BoardItemCard";

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
                item={item.id}
                ref={provided.innerRef}
                title={item.title}
                draggableProps={provided.draggableProps}
                dragHandleProps={provided.dragHandleProps}
                setItems={setItems}
                items={items}
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
