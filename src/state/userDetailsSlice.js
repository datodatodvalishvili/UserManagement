import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {
    id: 0,
    role: "",
    firstName: "",
    lastName: "",
    email: "",
    status: true,
    superAdmin: false,
    permissionGroups: [],
  },
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    toggleField(state, action) {
      state.userDetails[action.payload] = !state.userDetails[action.payload];
    },
    toggleParentPermission(state, action) {
      const foundIndex = state.userDetails.permissionGroups.findIndex(
        (permissionGroup) => permissionGroup.id == action.payload
      );
      state.userDetails.permissionGroups[foundIndex].permissionActive =
        !state.userDetails.permissionGroups[foundIndex].permissionActive;
    },
    toggleChildPermission(state, action) {
      const parentIndex = state.userDetails.permissionGroups.findIndex(
        (permissionGroup) => permissionGroup.id == action.payload.parentID
      );
      const childIndex = state.userDetails.permissionGroups[
        parentIndex
      ].permissions.findIndex(
        (permission) => permission.id == action.payload.childID
      );
      state.userDetails.permissionGroups[parentIndex].permissions[
        childIndex
      ].permissionActive =
        !state.userDetails.permissionGroups[parentIndex].permissions[childIndex]
          .permissionActive;
    },
    addUserDetails(state, action) {
      state.userDetails = action.payload;
    },
  },
});

export const selectUserDetails = (state) => state.userDetails.userDetails;

export const {
  addUserDetails,
  toggleField,
  toggleParentPermission,
  toggleChildPermission,
} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
