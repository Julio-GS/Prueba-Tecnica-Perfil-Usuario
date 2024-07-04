"use client";
import useEditable from "@/hooks/useEditable";
import { AddIcon } from "@/Icons/AddIcon";
import { DeleteIcon } from "@/Icons/DeleteIcon";
import { EditIcon } from "@/Icons/EditIcon";
import styles from "@/styles/Interest.module.css";

const initialInterests = [
  { name: "Programacion" },
  { name: "Frontend" },
  { name: "React" },
];

export const Interest = () => {
  const {
    data,
    isEditing,
    editItem,
    startEdit,
    cancelEdit,
    saveEdit,
    deleteItem,
    setEditItem,
  } = useEditable(initialInterests);

  const handleInputChange = (e) => {
    setEditItem({ ...editItem, name: e.target.value });
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Intereses</h2>
        <button
          onClick={() => startEdit(null)}
          className={styles.editButton}
          title="Agregar Intereses"
        >
          <AddIcon />
        </button>
      </div>
      {isEditing && (
        <div className={styles.form}>
          <input
            type="text"
            className={styles.input}
            value={editItem.name || ""}
            onChange={handleInputChange}
          />
          <button
            onClick={() => saveEdit(editItem)}
            className={styles.saveButton}
          >
            Guardar
          </button>
          <button onClick={cancelEdit} className={styles.cancelButton}>
            Cancelar
          </button>
        </div>
      )}
      <ul className={styles.list}>
        {data.map((interest, index) => (
          <li key={index} className={styles.item}>
            {interest.name}
            <button
              onClick={() => startEdit(index)}
              className={styles.editButton}
              title="Editar Intereses"
            >
              <EditIcon />
            </button>
            <button
              onClick={() => deleteItem(index)}
              className={styles.deleteButton}
              title="Eliminar Intereses"
            >
              <DeleteIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
