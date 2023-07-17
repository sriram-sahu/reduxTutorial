import React from "react";
import DeleteAllUsers from "./DeleteAllUsers";
import { useDispatch } from "react-redux";
import { addUser, deleteUsers, removeUser } from "../store/slice/userSlice";
import { useSelector } from "react-redux";
const UserDetails = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);
  console.log(data, "data");

  const addNewUser = () => {
    dispatch(addUser("sriram"));
  };
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <div>
      <h1>List Of Users</h1>
      <button onClick={addNewUser}>Add new User</button>
      {data.map((each, index) => (
        <div key={index}>
          <span>{each}</span>
          <button onClick={() => deleteUser(index)}>Delete</button>
        </div>
      ))}
      <DeleteAllUsers />
    </div>
  );
};

export default UserDetails;
