import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useContext } from 'react';
import BoardContainer from '../components/BoardContainer';
import CreateNewProjectModalContent from '../components/CreateNewProjectModalContent';
import { ModalContext } from '../components/ModalContextProvider';
import ButtonComponent from '../components/UI/ButtonComponent';

const TOOLBAR_HEIGHT_WITH_MARGIN = 101;

const useStyles = makeStyles({
  emptyProjects: {
    width: '100vw',
    maxWidth: '100%',
    height: `calc(100% - ${TOOLBAR_HEIGHT_WITH_MARGIN}px)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },
  text: {
    fontSize: '2rem',
  },
});

function ProjectsEmptyView() {
  const { openModal } = useContext(ModalContext);

  const classes = useStyles();

  return (
    <BoardContainer classes={classes.emptyProjects}>
      <Typography variant="h3">No projects yet!</Typography>
      <ButtonComponent
        variant="contained"
        text="Create Project"
        onClick={() => openModal(<CreateNewProjectModalContent />)}
      />
    </BoardContainer>
  );
}

export default ProjectsEmptyView;
