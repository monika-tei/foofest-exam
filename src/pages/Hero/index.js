// import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Hero.module.css";

const Hero = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Image className={styles.heroImage} src="/images/background.jpg" alt="Foofest Hero" fill style={{ objectFit: "cover" }} />
      <div className={styles.heroText}>
        <h1 className={styles.heroHeader}>colorFOO fest</h1>

        <button className={styles.heroCTA} onClick={() => router.push("/booking")}>
          Book now
        </button>
      </div>
    </div>
  );
};

export default Hero;
