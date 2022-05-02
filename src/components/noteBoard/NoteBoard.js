import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Draggable } from 'react-beautiful-dnd';
import NoteBoardItem from './NoteBoardItem';
import BoardContainer from '../BoardContainer';

const useStyles = makeStyles({
  noteBoardContainer: {
    width: '100vw',
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyItems: 'flex-start',
    alignItems: 'flex-start',
    gap: '0.5rem',
    padding: '1rem',
  },
});

function NoteBoard({
  items,
  drobbableProvided,
  setItems,
  showModal,
  setShowModal,
}) {
  const classes = useStyles();

  const handleSaveItem = updatedItem =>
    setItems(
      items.map(item => (item.id === updatedItem.id ? updatedItem : item)),
    );

  return (
    <BoardContainer
      classes={classes.noteBoardContainer}
      ref={drobbableProvided.innerRef}
      {...drobbableProvided.droppableProps}
    >
      {items.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {provided => (
            <NoteBoardItem
              item={item}
              ref={provided.innerRef}
              draggableProps={provided.draggableProps}
              dragHandleProps={provided.dragHandleProps}
              handleSaveItem={handleSaveItem}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}
        </Draggable>
      ))}
      {drobbableProvided.placeholder}
    </BoardContainer>
  );
}

NoteBoard.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
  // drobbableProvided: PropTypes.isRequired,
  setItems: PropTypes.func.isRequired,
};

export default NoteBoard;
