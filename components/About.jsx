"use client";
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
          title="Edit About Me"
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
