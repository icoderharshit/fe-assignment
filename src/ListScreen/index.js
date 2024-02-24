import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddScreen from "../AddScreen";
import EditScreen from "../EditScreen";

const ListScreen = () => {
  const members = useSelector((state) => state.members);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showAddScreen, setShowAddScreen] = useState(false);

  const handleEditClick = (member) => {
    setSelectedMember(member);
  };

  const handleAddClick = () => {
    setShowAddScreen(true);
  };

  const handleCloseAddScreen = () => {
    setShowAddScreen(false);
  };

  return (
    <div>
      {!showAddScreen && !selectedMember && (
        <div>
          <span
            onClick={handleAddClick}
            className="add-btn"
            style={{
              float: "right",
              marginBottom: "10px",
            }}
          >
            +
          </span>
          <h2>Team members</h2>
          <h4 className="grey-color light-weight">
            You have {members.length} members.
          </h4>
          <hr />
          <ul>
            {members.map((member) => (
              <>
                <div style={{ display: "flex", marginRight: "inherit" }}>
                  <img
                    alt=""
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                    height={30}
                    width={30}
                    className="avatar"
                  ></img>
                  <li
                    key={member.id}
                    onClick={() => handleEditClick(member)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <span className="strong-weight">
                      {member.firstName} {member.lastName}{" "}
                      {member.role === "admin" && "(admin)"}
                    </span>
                    <span className="grey-color">{member.phoneNumber}</span>
                    <span className="grey-color">{member.email}</span>
                  </li>
                </div>
                <hr
                  style={{
                    marginTop: "30px",
                  }}
                />
              </>
            ))}
          </ul>
        </div>
      )}
      {showAddScreen && <AddScreen onClose={handleCloseAddScreen} />}
      {selectedMember && (
        <EditScreen
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
};

export default ListScreen;
