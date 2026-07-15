import { useEffect, useState } from "react";

interface SectionVisibility {
  about: boolean;
  experience: boolean;
  "private-projects": boolean;
  certificates: boolean;
}

const SECTION_IDS: (keyof SectionVisibility)[] = [
  "about",
  "experience",
  "private-projects",
  "certificates",
];

const INITIAL_VISIBILITY: SectionVisibility = {
  about: false,
  experience: false,
  "private-projects": false,
  certificates: false,
};

const useSectionVisibility = () => {
  const [sectionVisibility, setSectionVisibility] =
    useState<SectionVisibility>(INITIAL_VISIBILITY);

  useEffect(() => {
    const computeActive = () => {
      const sections = SECTION_IDS.map((id) => ({
        id,
        el: document.getElementById(id),
      })).filter(
        (section): section is { id: keyof SectionVisibility; el: HTMLElement } =>
          section.el !== null
      );

      if (sections.length === 0) {
        return;
      }

      const scrolledToBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      let activeId: keyof SectionVisibility;

      if (scrolledToBottom) {
        // At the very bottom the last section may be too short to ever cross
        // the viewport centre, so activate it explicitly.
        activeId = sections[sections.length - 1].id;
      } else {
        // Active section is the last one whose top has passed the vertical
        // centre of the viewport — matches the previous centre-line feel while
        // keeping the first section active at the very top.
        const centreLine = window.innerHeight / 2;
        activeId = sections[0].id;
        for (const { id, el } of sections) {
          if (el.getBoundingClientRect().top <= centreLine) {
            activeId = id;
          }
        }
      }

      setSectionVisibility((prev) =>
        prev[activeId] ? prev : { ...INITIAL_VISIBILITY, [activeId]: true }
      );
    };

    computeActive();
    window.addEventListener("scroll", computeActive, { passive: true });
    window.addEventListener("resize", computeActive);

    return () => {
      window.removeEventListener("scroll", computeActive);
      window.removeEventListener("resize", computeActive);
    };
  }, []);

  return sectionVisibility;
};

export default useSectionVisibility;
