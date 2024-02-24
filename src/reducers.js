// reducers.js
import { ADD_MEMBER, EDIT_MEMBER, DELETE_MEMBER } from "./actions";

const initialState = {
  members: [],
};

export function memberReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        members: [...state.members, action.member],
      };
    case EDIT_MEMBER:
      return {
        ...state,
        members: state.members.map((member) =>
          member.id === action.member.id ? action.member : member
        ),
      };
    case DELETE_MEMBER:
      return {
        ...state,
        members: state.members.filter((member) => member.id !== action.id),
      };
    default:
      return state;
  }
}
