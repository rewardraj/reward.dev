import Grid from "../Layout/Grid/Grid";
import styles from "./Skills.module.scss";
import React from "react";

interface SkillBarProps {
  skill: string;
  level: number;
  color?: string;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill, level, color }) => (
  <figure className={styles.skillBar}>
    <figcaption className={styles.skillName}>{skill}</figcaption>
    <div className={styles.progressBar}>
      <div
        className={styles.progressLevel}
        style={{ width: `${level}%`, backgroundColor: color }}
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        title="Skill Level"
      ></div>
    </div>
  </figure>
);

export const Skills = () => {
  return (
    <div className={styles.skills}>
      <div>
        <h2>My Skills</h2>
      </div>
      <Grid desktopColumns={2} tabletColumns={2} mobileColumns={2}>
        <SkillBar skill="HTML" level={90} color="#e34c26" />
        <SkillBar skill="Node.js" level={75} color="#68a063" />
        <SkillBar skill="Scss" level={80} color="#cc6699" />
        <SkillBar skill="React" level={85} color="#61dbfb" />
        <SkillBar skill="TypeScript" level={80} color="#007acc" />
        <SkillBar skill="Svelte" level={70} color="#ff3e00" />
      </Grid>
    </div>
  );
};

export default Skills;
