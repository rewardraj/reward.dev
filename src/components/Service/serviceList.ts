import { FaPalette, FaBullhorn, FaChartArea, FaMobile } from "react-icons/fa";
import { IoIosDesktop } from "react-icons/io";
import { CgBrowser } from "react-icons/cg";

export const services = [
  {
    IconComponent: IoIosDesktop,
    title: "Web Development",
    description:
      "I can build a website from scratch using modern technologies like React, Node.js, Express, and MongoDB.",
  },
  {
    IconComponent: FaMobile,
    title: "Mobile Development",
    description:
      "I can build a mobile application using React Native and Expo.",
  },
  {
    IconComponent: FaPalette,
    title: "UI/UX Design",
    description:
      "I can design a beautiful and functional user interface for your website or application.",
  },
  {
    IconComponent: FaBullhorn,
    title: "SEO Optimization",
    description:
      "I can help you optimize your website for search engines to improve your ranking.",
  },
  {
    IconComponent: FaChartArea,
    title: "Business Analysis",
    description:
      "I can help you analyze your business requirements and provide solutions to improve your business processes.",
  },
  {
    IconComponent: CgBrowser,
    title: "Domain Registration",
    description:
      "I can help you register a domain name for your website or application.",
  },
];