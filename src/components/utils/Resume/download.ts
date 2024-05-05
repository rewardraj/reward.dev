import resume from "./Reward_Resume.pdf";

export const downloadResume = (filename: string = "RewardResume.pdf") => {
  const url = resume;
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
};
