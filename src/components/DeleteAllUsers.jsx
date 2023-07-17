import React from "react";
import { deleteUsers } from "../store/slice/userSlice";
import { useDispatch } from "react-redux";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(deleteUsers())}>Delete All Users</button>
    </div>
  );
};

export default DeleteAllUsers;
