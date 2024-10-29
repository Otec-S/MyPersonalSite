import { useEffect, useState } from "react";

interface SectionVisibility {
  about: boolean;
  experience: boolean;
}

const useSectionVisibility = () => {
  const [sectionVisibility, setSectionVisibility] = useState<SectionVisibility>(
    {
      about: false,
      experience: false,
    }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newSectionVisibility: SectionVisibility = {
          about: false,
          experience: false,
        };

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            newSectionVisibility[entry.target.id as keyof SectionVisibility] =
              true;
          }
        });

        setSectionVisibility(newSectionVisibility);
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll<HTMLElement>(
      "[id^='about'], [id^='experience']"
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return sectionVisibility;
};

export default useSectionVisibility;
