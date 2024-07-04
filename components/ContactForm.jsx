"use client";
import { useState } from "react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/ContactForm.module.css";
export const ContactForm = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      nombre: "",
      apellido: "",
      email: "",
      mensaje: "",
    });
    if (
      form.nombre === "" ||
      form.apellido === "" ||
      form.email === "" ||
      form.mensaje === ""
    ) {
      toast.error("Por favor, complete todos los campos", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email) ===
      false
    ) {
      toast.error("Por favor, ingrese un email válido", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    toast.success("Mensaje enviado correctamente", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  };
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Contacto</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.label}>
          <input
            type="text"
            name="nombre"
            id="first_name"
            placeholder=" "
            className={styles.input}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            value={form.nombre}
            required
          />
          <label className={styles.placeholder}>Nombre</label>
        </div>
        <div className={styles.label}>
          <input
            type="text"
            name="Apellido"
            id="last_name"
            className={styles.input}
            placeholder=""
            onChange={(e) => setForm({ ...form, apellido: e.target.value })}
            value={form.apellido}
            required
          />
          <label className={styles.placeholder}>Apellido</label>
        </div>
        <div className={styles.label}>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.input}
            placeholder=" "
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
            required
          />
          <label className={styles.placeholder}>Email</label>
        </div>
        <div className={styles.label}>
          <textarea
            id="message"
            name="Mensaje"
            rows="4"
            className={styles.textarea}
            placeholder=" "
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
            value={form.mensaje}
            required
          ></textarea>
          <label className={styles.placeholder}>Mensaje</label>
        </div>
        <button type="submit" className={styles.button} onClick={handleSubmit}>
          Enviar
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};
