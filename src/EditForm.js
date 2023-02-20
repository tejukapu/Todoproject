import React from "react";

import "./EditForm.css";
export default function EditForm({
    currentTodo,
    setIsEditing,
    onEditInputChange,
    onEditFormSubmit
  }) {
    return (
      <form onSubmit={onEditFormSubmit}>
        <h2 className="header">Edit Todo</h2>
        <label className="editform" htmlFor="updateTodo">Update todo: </label>
        <input 
        className="border"
          name="updateTodo"
          type="text"
          placeholder="Update todo"
          value={currentTodo.text}
          onChange={onEditInputChange}
        />
        <button className="editbutton" type="submit" onClick={onEditFormSubmit}>
          Update
        </button>&nbsp;
        <button className="editbutton" onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    );
  }
  