import { ReactNode, useState } from "react";
import styles from "./Projects.module.css";
import ProjectCarousel from "./ProjectCarousel";
import amsImg from "./assets/AMS-min.png";
import comsImg from "./assets/csuLogo-min.png";

export default function Projects() {
  const [project, setProject] = useState(0);

  return (
    <section
      style={{
        width: "100%",
        height: "80vh",
        position: "relative",
        backgroundColor: "#fffafa",
      }}
    >
      <p
        style={{
          color: "black",
          marginLeft: "16%",
          width: "20%",
          minWidth: "300px",
        }}
      >
        I've worked with projects in different settings. Admittedly, not
        everything pans out but I did learn a lot from these projects.
      </p>
      <ProjectCarousel setProject={setProject} />

      <div>
        {(project < 1 || project > 7) && (
          <h1 style={{ color: "black", textAlign: "center", marginTop: "10%" }}>
            Pick a Card
          </h1>
        )}
        {project === 1 && (
          <ProjectCard
            frontImg={
              <img
                src="https://www.phoenixcloud.io/favicon_new.ico"
                style={{
                  height: "35%",
                  backgroundColor: "white",
                  padding: "6px",
                  borderRadius: "5px",
                }}
              />
            }
            title="Phoenix Cloud"
            content="The first major project assigned to me when working in Kooapps. It's sort of like localytics"
          />
        )}

        {project === 2 && (
          <ProjectCard
            frontImg={
              <img
                src="https://www.jobsprobe.com/images/jobsprobe_employer_assets/topHeader/topHeader_logo.png"
                style={{
                  width: "40%",
                  backgroundColor: "white",
                  padding: "6px",
                  borderRadius: "5px",
                }}
              />
            }
            title="Jobsprobe"
            content="This is the project where I had the most trouble with when working in Kooapps."
          />
        )}

        {project === 3 && (
          <ProjectCard
            frontImg={
              <img
                src="https://www.helpchatter.com/images/login/logo_helpchatter.png"
                style={{
                  width: "80%",
                  backgroundColor: "white",
                  padding: "6px",
                  borderRadius: "5px",
                }}
              />
            }
            title="Helpchatter"
            content="I worked with this project during the latter part of my contract in Kooapps"
          />
        )}

        {project === 4 && (
          <ProjectCard
            frontImg={
              <img
                src="https://snake.io/assets/design/home/app_icons/snake_appicon-white-min.webp"
                style={{
                  width: "20%",
                  backgroundColor: "white",
                  padding: "6px",
                  borderRadius: "5px",
                }}
              />
            }
            title="Snake.io blogs"
            content="I was also responsible for posting snake.io blogs in Kooapps"
          />
        )}
        {project === 5 && (
          <ProjectCard
            frontImg={
              <img
                src={amsImg}
                style={{
                  width: "40%",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              />
            }
            title="Accident Monitoring System"
            content="This is our main thesis way back in college, I'm totally going to work more on this one when I have time."
          />
        )}
        {project === 6 && (
          <ProjectCard
            frontImg={
              <img
                src={comsImg}
                style={{
                  width: "30%",
                  backgroundColor: "white",
                  padding: "12px",
                  borderRadius: "5px",
                }}
              />
            }
            title="Canteen Ordering Management System"
            content="This a software I made to help some younger students back in college."
          />
        )}
        {project === 7 && (
          <ProjectCard
            frontImg={
              <img
                src='https://spellyword.com/src/assets/images/Spellyword.png'
                style={{
                  width: '50%',
                }}
              />
            }
            title="Spellyword game website"
            content="This is a website for a game that I worked for some time. I'm not sure the game panned out though."
          />
        )}
      </div>
    </section>
  );
}

function ProjectCard(props: {
  title: string;
  content: string;
  frontImg: string | ReactNode;
}) {
  const { title, content, frontImg } = props;
  return (
    <>
      <h2 style={{ color: "black", textAlign: "center" }}>Hover on it</h2>
      <div
        className={styles["card"]}
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        {frontImg || (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg>
        )}
        <div className={styles["card__content"]}>
          <p className={styles["card__title"]}>{title || "Card Title"}</p>
          <p className={styles["card__description"]}>
            {content ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco."}
          </p>
        </div>
      </div>
    </>
  );
}
