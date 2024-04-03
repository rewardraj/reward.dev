import { useEffect, useState } from "react";

export const useSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && sectionIds.includes(entry.target.id)) {
            setActiveSection(entry.target.id);
          } else if (activeSection === entry.target.id) {
            setActiveSection("");
          }
        });
      },
      { threshold: 0.1 }
    );
  
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
  
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds, activeSection]);

  return activeSection;
};