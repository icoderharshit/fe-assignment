import React, { useState } from "react";
import ListScreen from "./ListScreen";
import AddScreen from "./AddScreen";
import EditScreen from "./EditScreen";
import "./App.css";

const App = () => {
  const [showAddScreen, setShowAddScreen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleAddClick = () => {
    setShowAddScreen(true);
  };

  const handleEditClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseAddScreen = () => {
    setShowAddScreen(false);
  };

  const handleCloseEditScreen = () => {
    setSelectedMember(null);
  };

  return (
    <div>
      <span className="seekout-logo"></span>
      {showAddScreen && <AddScreen onClose={handleCloseAddScreen} />}
      {selectedMember && (
        <EditScreen member={selectedMember} onClose={handleCloseEditScreen} />
      )}
      <ListScreen onAddClick={handleAddClick} onEditClick={handleEditClick} />
    </div>
  );
};

export default App;
