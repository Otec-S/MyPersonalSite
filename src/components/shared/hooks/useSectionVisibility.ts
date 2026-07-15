import { useEffect, useState } from "react";

interface SectionVisibility {
  about: boolean;
  experience: boolean;
  "private-projects": boolean;
  certificates: boolean;
}

const useSectionVisibility = () => {
  const [sectionVisibility, setSectionVisibility] = useState<SectionVisibility>(
    {
      about: false,
      experience: false,
      "private-projects": false,
      certificates: false,
    }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newSectionVisibility: SectionVisibility = {
          about: false,
          experience: false,
          "private-projects": false,
          certificates: false,
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
      "[id^='about'], [id^='experience'], [id^='private-projects'], [id^='certificates']"
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return sectionVisibility;
};

export default useSectionVisibility;
