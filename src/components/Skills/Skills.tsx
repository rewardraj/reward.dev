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
        <p>{level}</p>
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
        <SkillBar skill="Web Design" level={90} color="#70cf82" />
        <SkillBar skill="React" level={80} color="#61dbfb" />
        <SkillBar skill="TypeScript" level={60} color="#007acc" />
        <SkillBar skill="JavaScript" level={80} color="#f5e842" />
      </Grid>
    </div>
  );
};

export default Skills;
