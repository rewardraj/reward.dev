import file from "./Reward_CV.pdf";

export const downloadResume = (filename: string = "RewardResume.pdf") => {
  const link = document.createElement("a");
  link.href = file;
  link.download = filename;
  link.click();
};
