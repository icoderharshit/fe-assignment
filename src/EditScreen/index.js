import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editMember, deleteMember } from "../actions";

const EditScreen = ({ member, onClose }) => {
  const [firstName, setFirstName] = useState(member.firstName);
  const [lastName, setLastName] = useState(member.lastName);
  const [phoneNumber, setPhoneNumber] = useState(member.phoneNumber);
  const [email, setEmail] = useState(member.email);
  const [role, setRole] = useState(member.role);
  const dispatch = useDispatch();

  const handleSave = () => {
    const editedMember = {
      ...member,
      firstName,
      lastName,
      phoneNumber,
      email,
      role,
    };
    dispatch(editMember(editedMember));
    onClose();
  };

  const handleDelete = () => {
    dispatch(deleteMember(member.id));
    onClose();
  };

  return (
    <div>
      <span
        className="close-btn"
        style={{
          float: "right",
        }}
        onClick={onClose}
      >
        X
      </span>

      <h2>Edit Team Member</h2>
      <h4 className="grey-color light-weight">
        Edit contact info, location and role.
        <hr />
      </h4>
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
              }}
            >
              <span>
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
          <button className="del-btn" onClick={handleDelete}>
            Delete
          </button>
          ;
        </form>
      </div>
    </div>
  );
};

export default EditScreen;
