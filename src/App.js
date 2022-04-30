import { useContext, useState } from "react";
import { Droppable , DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import ApplicationSideMenu from "./components/ApplicationSideMenu";
import ModalComponent from "./components/ModalComponent";
import { ModalContext } from "./components/ModalContextProvider";
import BulletinBoard from "./components/noteBoard/NoteBoard";
import Toolbar from "./components/Toolbar";

function App() {
  const [items, setItems] = useState([]);
  const [sideMenuOpen, setSideMenuOpen] = useState(true);

  const { showModal, setShowModal } = useContext(ModalContext);

  const reorder = (list, startIndex, endIndex) => {
    const resultList = Array.from(list);
    const [removed] = resultList.splice(startIndex, 1);
    resultList.splice(endIndex, 0, removed);

    return resultList;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedItems = reorder(
      items,
      result.source.index,
      result.destination.index
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
        items={items}
        setItems={setItems}
        setSideMenuOpen={setSideMenuOpen}
      />
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <Droppable droppableId="droppableId" direction="vertical">
          {(provided) => (
            <BulletinBoard
              items={items}
              setItems={setItems}
              drobbableProvided={provided}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}
        </Droppable>
      </DragDropContext>
      <ModalComponent open={showModal} />
    </div>
  );
}

export default App;
