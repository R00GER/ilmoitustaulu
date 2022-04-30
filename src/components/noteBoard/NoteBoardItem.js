import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { forwardRef, useContext } from 'react';
import { ModalContext } from '../ModalContextProvider';
import NoteItemModalContent from './NoteItemModalContent';

const useStyles = makeStyles({
  boardItemCardContainer: {
    // minWidth: "300px",
    // background: "#13141a",
    width: '400px',
    background: '#1b1d25',
    boxShadow: 'rgba(0, 0, 0, 0.85) 0px 1px 4px;',
    cursor: 'grab',
    border: '2px solid #22242e',
    borderRadius: '6px',
    overflowWrap: 'anywhere',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #3e4154',
    padding: '0.25rem 0.75rem',
    minHeight: '33px',
  },
  contentContainer: {
    padding: '0.75rem',
    minHeight: '76px',
  },
  textButton: {
    textTransform: 'none',
    padding: '0px !important',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  hided: {
    visibility: 'hidden',
  },
});

const NoteBoardItem = forwardRef(
  (
    { item, draggableProps, dragHandleProps, handleSaveItem, showModal },
    ref,
  ) => {
    const classes = useStyles();

    const { openModal } = useContext(ModalContext);

    return (
      <div
        role="presentation"
        key={item.id}
        ref={ref}
        className={[classes.boardItemCardContainer, showModal && classes.hided]
          .filter(Boolean)
          .join(' ')}
        {...draggableProps}
        {...dragHandleProps}
        onClick={() =>
          openModal(
            <NoteItemModalContent
              item={item}
              handleSaveItem={handleSaveItem}
            />,
          )
        }
      >
        {item.title && (
          <div className={classes.titleContainer}>
            <Typography>{item.title}</Typography>
          </div>
        )}
        <div className={classes.contentContainer}>
          <Typography>{item.note}</Typography>
          {/* <TextEditor value={item.note} /> */}
        </div>
      </div>
    );
  },
);

NoteBoardItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  draggableProps: PropTypes.instanceOf(Object).isRequired,
  dragHandleProps: PropTypes.instanceOf(Object).isRequired,
  handleSaveTitle: PropTypes.func.isRequired,
  // ref: PropTypes.isRequired,
};

export default NoteBoardItem;
