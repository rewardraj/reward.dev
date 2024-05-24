import React, { useState } from "react";
import styles from "./Projects.module.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Grid from "../Layout/Grid/Grid";
import { Container } from "../Layout/Container/Container";

interface ProjectProps {
  title: string;
  imgSrc: string;
  githubUrl: string;
  projectUrl: string;
}

const projects = [
  {
    title: "SMOG Web App",
    imgSrc: "https://picsum.photos/900/500",
    githubUrl: "https://github.com/rewardraj/React-Web-SMOG",
    projectUrl: "project-url-1",
  },
  {
    title: "Vegety Foods",
    imgSrc: "https://picsum.photos/800/700",
    githubUrl: "https://github.com/rewardraj/Vegety",
    projectUrl: "project-url-2",
  },
  {
    title: "Portfolio Website",
    imgSrc: "https://picsum.photos/600/300",
    githubUrl: "https://github.com/rewardraj/reward.dev",
    projectUrl: "https://rewardcodes.vercel.app/",
  },
  {
    title: "The GadgetHub Store (WIP)",
    imgSrc: "https://picsum.photos/200/300",
    githubUrl: "https://github.com/TheGadgetHub/GadgetShop",
    projectUrl: "project-url-3",
  },
  {
    title: "Troch Consultancy",
    imgSrc: "https://picsum.photos/500/300",
    githubUrl: "https://github.com/rewardraj/troch-consultancy",
    projectUrl: "https://troch.co.uk/",
  },
  {
    title: "Tour NG Travels (WIP)",
    imgSrc: "https://picsum.photos/800/400",
    githubUrl: "https://github.com/rewardraj/tour-ng",
    projectUrl: "https://ngtours.vercel.app",
  },
];

export const ProjectCard: React.FC<ProjectProps> = ({
  title,
  imgSrc,
  githubUrl,
  projectUrl,
}) => (
  <article className={styles.project} aria-label={`Project: ${title}`}>
    <div className={styles.projectImage}>
      <img
        src={imgSrc}
        alt={`Image of ${title}`}
        className={styles.imgResponsive}
      />
    </div>
    <div className={styles.projectInfo}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <div className={styles.projectLinks}>
        <a
          href={githubUrl}
          className={styles.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub link for ${title}`}
        >
          GitHub
        </a>
        <a
          href={projectUrl}
          className={styles.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo link for ${title}`}
        >
          Live Demo
        </a>
      </div>
    </div>
  </article>
);

export const AllProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const allProjects = [...projects];

  const showNext = () => {
    setCurrentProject((currentProject + 1) % allProjects.length);
  };

  const showPrevious = () => {
    setCurrentProject(
      (currentProject - 1 + allProjects.length) % allProjects.length
    );
  };
  return (
    <Container>
      <Grid desktopColumns={3} tabletColumns={2}>
        {allProjects
          .slice(currentProject, currentProject + 6)
          .map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
      </Grid>
      <div className={styles.moreBtn}>
        <button
          className={styles.button}
          onClick={showPrevious}
          disabled={currentProject === 0}
          aria-label="Show previous projects"
          role="button"
        >
          <FaChevronLeft />
        </button>
        <button
          className={styles.button}
          onClick={showNext}
          disabled={currentProject === allProjects.length - 6}
          aria-label="Show next projects"
          role="button"
        >
          <FaChevronRight />
        </button>
      </div>
    </Container>
  );
};

// Might add later for filtering projects

// export const ReactProjects = () => (
//   <Container>
//     <Grid desktopColumns={3} tabletColumns={2}>
//       {reactProjects.map((project, index) => (
//         <ProjectCard key={index} {...project} />
//       ))}
//     </Grid>
//   </Container>
// );

// export const SvelteProjects = () => (
//   <Container>
//     <Grid desktopColumns={3} tabletColumns={2}>
//       {svelteProjects.map((project, index) => (
//         <ProjectCard key={index} {...project} />
//       ))}
//     </Grid>
//   </Container>
// );
