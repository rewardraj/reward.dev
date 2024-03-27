import React, { useState } from "react";
import styles from "./Projects.module.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface ProjectProps {
  title: string;
  imgSrc: string;
  githubUrl: string;
  projectUrl: string;
}

const reactProjects = [
  {
    title: "SMOG Web App",
    imgSrc: "https://picsum.photos/900/500",
    githubUrl: "github-url-1",
    projectUrl: "project-url-1",
  },
  {
    title: "Vegety Foods",
    imgSrc: "https://picsum.photos/800/700",
    githubUrl: "github-url-2",
    projectUrl: "project-url-2",
  },
  {
    title: "The GadgetHub Store",
    imgSrc: "https://picsum.photos/200/300",
    githubUrl: "github-url-3",
    projectUrl: "project-url-3",
  },
];

const svelteProjects = [
  {
    title: "Svelte Project 1",
    imgSrc: "https://picsum.photos/800/400",
    githubUrl: "github-url-4",
    projectUrl: "project-url-4",
  },
  {
    title: "Svelte Project 2",
    imgSrc: "https://picsum.photos/600/300",
    githubUrl: "github-url-5",
    projectUrl: "project-url-5",
  },
  {
    title: "Svelte Project 3",
    imgSrc: "https://picsum.photos/500/300",
    githubUrl: "github-url-6",
    projectUrl: "project-url-6",
  },
];

export const ProjectCard: React.FC<ProjectProps> = ({
  title,
  imgSrc,
  githubUrl,
  projectUrl,
}) => (
  <div className={styles.project}>
    <div className={styles.projectImage}>
      <img src={imgSrc} alt={title} className={styles.imgResponsive} />
    </div>
    <div className={styles.projectInfo}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <div className={styles.projectLinks}>
        <a
          href={githubUrl}
          className={styles.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={projectUrl}
          className={styles.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

export const AllProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const allProjects = [...reactProjects, ...svelteProjects];

  const showNext = () => {
    setCurrentProject((currentProject + 1) % allProjects.length);
  };

  const showPrevious = () => {
    setCurrentProject(
      (currentProject - 1 + allProjects.length) % allProjects.length
    );
  };
  return (
    <>
      <div className={styles.projectContainer}>
        {allProjects
          .slice(currentProject, currentProject + 3)
          .map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
      </div>
      <div className={styles.moreBtn}>
        <button
          className={styles.button}
          onClick={showPrevious}
          disabled={currentProject === 0}
        >
          <FaChevronLeft />
        </button>
        <button
          className={styles.button}
          onClick={showNext}
          disabled={currentProject === allProjects.length - 3}
        >
          <FaChevronRight />
        </button>
      </div>
    </>
  );
};

export const ReactProjects = () => (
  <div className={styles.projectContainer}>
    {reactProjects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);

export const SvelteProjects = () => (
  <div className={styles.projectContainer}>
    {svelteProjects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);