import { useContext, useRef, useState } from 'react';
import { Droppable, DragDropContext } from 'react-beautiful-dnd';
import './App.css';
import ApplicationSideMenu from './components/ApplicationSideMenu';
import ModalComponent from './components/ModalComponent';
import { ModalContext } from './components/ModalContextProvider';
import NoteBoard from './components/noteBoard/NoteBoard';
import Toolbar from './components/Toolbar';
import isEmpty from './helpers';
import ProjectsEmptyView from './views/ProjectsEmptyView';

function App() {
  const [projects, setProjects] = useState([]);
  const [items, setItems] = useState([]);
  const [sideMenuOpen, setSideMenuOpen] = useState(true);

  const { showModal, setShowModal } = useContext(ModalContext);

  const toolbarRef = useRef(null);

  const reorder = (list, startIndex, endIndex) => {
    const resultList = Array.from(list);
    const [removed] = resultList.splice(startIndex, 1);
    resultList.splice(endIndex, 0, removed);

    return resultList;
  };

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const updatedItems = reorder(
      items,
      result.source.index,
      result.destination.index,
    );

    setItems(updatedItems);
  };

  return (
    <div className="App">
      <ApplicationSideMenu
        open={sideMenuOpen}
        onClose={() => setSideMenuOpen(false)}
      />
      <Toolbar
        ref={toolbarRef}
        items={items}
        setItems={setItems}
        setSideMenuOpen={setSideMenuOpen}
      />
      {isEmpty(projects) ? (
        <ProjectsEmptyView
          toolbarRef={toolbarRef}
          setProjects={setProjects}
          projects={projects}
        />
      ) : (
        <DragDropContext onDragEnd={result => onDragEnd(result)}>
          <Droppable droppableId="droppableId" direction="vertical">
            {provided => (
              <NoteBoard
                items={items}
                setItems={setItems}
                drobbableProvided={provided}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            )}
          </Droppable>
        </DragDropContext>
      )}
      <ModalComponent open={showModal} />
    </div>
  );
}

export default App;
