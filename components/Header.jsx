import { ContactIcon } from "@/Icons/ContactIcon";
import { GtihubIcon } from "@/Icons/GtihubIcon";
import { LinkedinIcon } from "@/Icons/LinkedinIcon";
import { PhoneIcon } from "@/Icons/PhoneIcon";
import srcImage from "@/public/profile.jpeg";
import styles from "@/styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <Image
          className={styles.profileImage}
          src={srcImage}
          width={200}
          height={200}
          alt="Foto de perfil"
        />

        <div className={styles.profileInfo}>
          <h2>Julio Gomez</h2>
          <div className={styles.infoContact}>
            <ContactIcon />
            juliocesargomezsena@gmail.com
          </div>
          <div className={styles.infoContact}>
            <PhoneIcon />
            +54 9 11 2595-8816
          </div>
          <div className={styles.infoContact}>
            <GtihubIcon />
            <Link
              href="https://github.com/Julio-GS"
              target="_blank"
              prefetch={false}
            >
              Github
            </Link>
          </div>
          <div className={styles.infoContact}>
            <LinkedinIcon />
            <Link
              href="https://www.linkedin.com/in/julio-cesar-gomez/"
              target="_blank"
              prefetch={false}
            >
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
