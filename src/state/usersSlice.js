import { createSlice } from "@reduxjs/toolkit";

const initialPermissionGroups = [
  {
    id: 1,
    name: "Permission group 1",
    permissionActive: false,
    permissions: [
      { id: 1, name: "Permission 1", permissionActive: false },
      { id: 2, name: "Permission 2", permissionActive: true },
      { id: 3, name: "Permission 3", permissionActive: false },
    ],
  },
  {
    id: 2,
    name: "Permission group 2",
    permissionActive: true,
    permissions: [
      { id: 4, name: "Permission 4", permissionActive: false },
      { id: 5, name: "Permission 5", permissionActive: true },
      { id: 6, name: "Permission 6", permissionActive: false },
    ],
  },
  {
    id: 3,
    name: "Permission group 3",
    permissionActive: false,
    permissions: [
      { id: 7, name: "Permission 7", permissionActive: false },
      { id: 8, name: "Permission 8", permissionActive: true },
      { id: 9, name: "Permission 9", permissionActive: false },
    ],
  },
];

const initialState = {
  searchText: "",
  maxID: 5,
  deleteID: 0,
  users: [
    {
      id: 1,
      role: "Admin",
      firstName: "Jon",
      lastName: "Doe",
      email: "jon@gmail.com",
      status: true,
      permissionGroups: initialPermissionGroups,
      superAdmin: false,
    },
    {
      id: 2,
      role: "User",
      firstName: "Tom",
      lastName: "Jones",
      email: "tom@gmail.com",
      status: false,
      permissionGroups: initialPermissionGroups,
      superAdmin: false,
    },
    {
      id: 3,
      role: "Admin",
      firstName: "Jaime",
      lastName: "Jackson",
      email: "jaime@gmail.com",
      status: true,
      permissionGroups: initialPermissionGroups,
      superAdmin: false,
    },
    {
      id: 4,
      role: "User",
      firstName: "Nial",
      lastName: "Cortes",
      email: "nial@gmail.com",
      status: false,
      permissionGroups: initialPermissionGroups,
      superAdmin: false,
    },
    {
      id: 5,
      role: "Admin",
      firstName: "Mikhail",
      lastName: "Whelan",
      email: "mikhail@gmail.com",
      status: false,
      permissionGroups: initialPermissionGroups,
      superAdmin: false,
    },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      const newUser = { ...action.payload };
      newUser.id = state.maxID + 1;
      newUser.status = true;
      newUser.superAdmin = false;
      newUser.permissionGroups = initialPermissionGroups;
      state.maxID = newUser.id;
      state.users.push(newUser);
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    setDeleteID(state, action) {
      state.deleteID = action.payload;
    },
    deleteUser(state, action) {
      const index = state.users
        .map((user) => {
          return user.id;
        })
        .indexOf(action.payload);
      state.users.splice(index, 1);
    },
    updateUser(state, action) {
      const index = state.users
        .map((user) => {
          return user.id;
        })
        .indexOf(action.payload.id);
      state.users[index] = action.payload;
    },
    toggleUserStatus(state, action) {
      const foundIndex = state.users.findIndex(
        (user) => user.id == action.payload
      );
      state.users[foundIndex].status = !state.users[foundIndex].status;
    },
  },
});

export const selectUsers = (state) => state.users.users;
export const selectUserById = (state, id) => {
  const foundIndex = state.users.findIndex((user) => user.id == id);
  return state.users.users[id];
};
export const selectSearchText = (state) => state.users.searchText;
export const selectDeleteID = (state) => state.users.deleteID;

export const {
  addUser,
  updateUser,
  deleteUser,
  toggleUserStatus,
  setSearchText,
  setDeleteID,
} = usersSlice.actions;
export default usersSlice.reducer;
