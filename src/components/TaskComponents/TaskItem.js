import React from "react";
import { useState } from "react";

function TaskItem({ task, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [duration, setDuration] = useState("10");

  return (
    <li>
      <label>{task.name}</label>
      <input
        type="number"
        min="0"
        max="60"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <label>Min</label>
    </li>
  );
}

export default TaskItem;
