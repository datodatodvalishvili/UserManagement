import { configureStore } from "@reduxjs/toolkit";

import userDetailsSlice from "./userDetailsSlice";
import usersSlice from "./usersSlice";

export default configureStore({
  reducer: {
    users: usersSlice,
    userDetails: userDetailsSlice,
  },
});
