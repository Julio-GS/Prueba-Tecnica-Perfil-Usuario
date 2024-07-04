"use client";
import useEditable from "@/hooks/useEditable";
import { AddIcon } from "@/Icons/AddIcon";
import { DeleteIcon } from "@/Icons/DeleteIcon";
import { EditIcon } from "@/Icons/EditIcon";
import styles from "@/styles/Portfolio.module.css";

const initialProjects = [
  {
    title: "Proyecto 1",
    description: "Pagina web para una tienda de ropa.",
  },
  {
    title: "Proyecto 2",
    description: "Una app para el manejo de stock dentro un local.",
  },
];

export const Portfolio = () => {
  const {
    data,
    isEditing,
    editItem,
    startEdit,
    cancelEdit,
    saveEdit,
    deleteItem,
    setEditItem,
  } = useEditable(initialProjects);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditItem({ ...editItem, [name]: value });
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Portfolio</h2>
        <button
          onClick={() => startEdit(null)}
          className={styles.editButton}
          title="Agregar Proyecto"
        >
          <AddIcon />
        </button>
      </div>
      {isEditing && (
        <div className={styles.form}>
          <input
            type="text"
            name="title"
            className={styles.input}
            value={editItem.title || ""}
            onChange={handleInputChange}
            placeholder="Titulo del proyecto"
          />
          <input
            type="text"
            name="description"
            className={styles.input}
            value={editItem.description || ""}
            onChange={handleInputChange}
            placeholder="Descripcion"
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
      <div className={styles.grid}>
        {data.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
            </div>
            <div className={styles.cardActions}>
              <button
                onClick={() => startEdit(index)}
                className={styles.editButton}
                title="Editar Proyecto"
              >
                <EditIcon />
              </button>
              <button
                onClick={() => deleteItem(index)}
                className={styles.deleteButton}
                title="Eliminar Proyecto"
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
