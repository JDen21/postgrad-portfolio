import styles from "./ProjectCarousel.module.css";

export default function ProjectCarousel(props: {
  setProject: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { setProject } = props;
  return (
    <div className={styles["card-3d"]}>
      <div className={styles["card"]} onClick={() => setProject(1)}>
        <h2>Phoenix Cloud</h2>
      </div>
      <div className={styles["card"]} onClick={() => setProject(2)}>
        <h2>Jobsprobe</h2>
      </div>
      <div className={styles["card"]} onClick={() => setProject(3)}>
        <h2>Helpchatter</h2>
      </div>
      <div className={styles["card"]} onClick={() => setProject(4)}>
        <h2>Snake.io blog</h2>
      </div>
      <div className={styles["card"]} onClick={() => setProject(5)}>
        <h2>AMS</h2>
      </div>
      <div className={styles["card"]} onClick={() => setProject(6)}>
        <h2>COMS</h2>
      </div>
      <div className={styles["card"]} onClick={() => setProject(7)}>
        <h2>Spellyword</h2>
      </div>
      <div className={styles["card"]} onClick={() => setProject(8)}>
        This is empty project
      </div>
      <div className={styles["card"]} onClick={() => setProject(9)}>
        This is empty project
      </div>
      <div className={styles["card"]} onClick={() => setProject(10)}>
        This is empty project
      </div>
    </div>
  );
}
