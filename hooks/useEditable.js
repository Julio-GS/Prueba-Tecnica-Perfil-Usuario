import { useState } from "react";

export default function useEditable(initialData) {
  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editItem, setEditItem] = useState({});

  const startEdit = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setEditItem(index !== null ? data[index] : {});
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditIndex(null);
    setEditItem({});
  };

  const saveEdit = (newItem) => {
    const newData = [...data];
    if (editIndex !== null) {
      newData[editIndex] = newItem;
    } else {
      newData.push(newItem);
    }
    setData(newData);
    cancelEdit();
  };

  const deleteItem = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  return {
    data,
    isEditing,
    editItem,
    startEdit,
    cancelEdit,
    saveEdit,
    deleteItem,
    setEditItem,
  };
}
