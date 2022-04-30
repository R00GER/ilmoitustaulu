import { useContext, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import ModalComponent from "./components/ModalComponent";
import { ModalContext } from "./components/ModalContextProvider";
import BulletinBoard from "./components/noteBoard/NoteBoard";
import Toolbar from "./components/Toolbar";

function App() {
  const [items, setItems] = useState([]);

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
      <Toolbar items={items} setItems={setItems} />
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
