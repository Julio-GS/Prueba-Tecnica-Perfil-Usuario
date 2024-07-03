"use client";
import useEditable from "@/hooks/useEditable";
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
          title="Add Project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={styles.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
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
                title="Edit Project"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={styles.icon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
              <button
                onClick={() => deleteItem(index)}
                className={styles.deleteButton}
                title="Delete Project"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={styles.icon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
