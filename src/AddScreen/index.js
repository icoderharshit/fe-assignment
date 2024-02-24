import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMember } from "../actions";

const AddScreen = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("regular");
  const dispatch = useDispatch();

  const handleSave = () => {
    const newMember = {
      id: Math.random(),
      firstName,
      lastName,
      phoneNumber,
      email,
      role,
    };
    dispatch(addMember(newMember));
    onClose();
  };

  return (
    <div>
      <span className="cancel-btn" onClick={onClose} style={{ float: "right" }}>
        X
      </span>
      <h2>Add a team member</h2>
      <h4 className="grey-color light-weight">Set email, location and role.</h4>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              width: "max-content",
              gap: "12px",
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            Info
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              required
            />
          </label>
          <label
            style={{
              fontSize: "20px",
            }}
          >
            Role
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "14px",
                marginTop: "12px",
                gap: "10px",
              }}
            >
              <span
                style={
                  {
                    // borderBottom: "4px solid red",
                  }
                }
              >
                Regular - Can't delete members
                <input
                  type="radio"
                  value="regular"
                  checked={role === "regular"}
                  onChange={(e) => setRole(e.target.value)}
                />
              </span>
              <span>
                Admin - Can delete members
                <input
                  type="radio"
                  value="admin"
                  checked={role === "admin"}
                  onChange={(e) => setRole(e.target.value)}
                />
              </span>
            </div>
          </label>
          <button
            type="submit"
            className="save-btn"
            style={{ width: "max-content" }}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddScreen;
