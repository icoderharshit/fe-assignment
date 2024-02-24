export const ADD_MEMBER = "ADD_MEMBER";
export const EDIT_MEMBER = "EDIT_MEMBER";
export const DELETE_MEMBER = "DELETE_MEMBER";

export function addMember(member) {
  return { type: ADD_MEMBER, member };
}

export function editMember(member) {
  return { type: EDIT_MEMBER, member };
}

export function deleteMember(id) {
  return { type: DELETE_MEMBER, id };
}
