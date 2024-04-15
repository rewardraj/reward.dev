import Grid from "../Layout/Grid/Grid";
import styles from "./Skills.module.scss";
import React from "react";

interface SkillBarProps {
  skill: string;
  level: number;
  color?: string;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill, level, color }) => {
  return (
    <div className={styles.skillBar}>
      <div className={styles.skillName}>
        <p>{skill}</p>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressLevel}
          style={{ width: `${level}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <div className={styles.skills}>
      <div>
        <h2>My Skills</h2>
      </div>
      <Grid desktopColumns={2} tabletColumns={2} mobileColumns={2}>
        <SkillBar skill="HTML" level={90} color="#e34c26" />
        <SkillBar skill="CSS" level={80} color="#264de4" />
        <SkillBar skill="Scss" level={80} color="#cc6699" />
        <SkillBar skill="React" level={85} color="#61dbfb" />
        <SkillBar skill="Node.js" level={75} color="#68a063" />
        <SkillBar skill="Svelte" level={70} color="#ff3e00" />
      </Grid>
    </div>
  );
};

export default Skills;
