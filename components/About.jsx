"use client";
import { EditIcon } from "@/Icons/EditIcon";
import styles from "@/styles/About.module.css";
import { useState } from "react";

export const About = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [aboutText, setAboutText] = useState(
    "Soy un desarrollador web con experiencia en Javascript junto con React y Next.js. Me encanta aprender nuevas tecnologías y trabajar en proyectos desafiantes. ¡Contáctame para colaborar en tu próximo proyecto!"
  );

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setAboutText(e.target.value);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Sobre Mí</h2>
        <button
          className={styles.editButton}
          onClick={handleEditClick}
          title="Editar Sobre Mí"
        >
          <EditIcon />
        </button>
      </div>
      {isEditing ? (
        <>
          <textarea
            value={aboutText}
            onChange={handleChange}
            className={styles.textArea}
          />
          <button onClick={handleSave} className={styles.saveButton}>
            Guardar
          </button>
        </>
      ) : (
        <p className={styles.description}>{aboutText}</p>
      )}
    </section>
  );
};
