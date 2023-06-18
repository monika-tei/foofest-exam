// import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
// const Hero = () => {
//   return (
//     <section className={styles.section}>
//       <div className={styles.earth}></div>
//       <div className={styles.circle}>
//         {"COLORFOO-Fest".split("").map((char, i) => (
//           <span key={i} style={{ "--i": i + 1 }}>
//             {char}
//           </span>
//         ))}
//       </div>
//     </section>
//   );
// };

function Hero() {
  return (
    <div className={styles.container}>
      <Image className={styles.heroImage} src="/images/background.jpg" alt="Foofest Hero" fill style={{ objectFit: "cover" }} />
      <h1 className={styles.heroHeader}>colorFOO fest</h1>
    </div>
  );
}

export default Hero;
