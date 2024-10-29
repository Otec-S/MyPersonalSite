import { TOP_OFFSET } from "@components/shared/constants";
import { useEffect, useCallback, FC } from "react";

const SmoothScroll: FC = () => {
  const handleClick = useCallback((e: Event) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute("href");
    if (href && href.startsWith("#")) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const topOffset =
          TOP_OFFSET *
          parseFloat(getComputedStyle(document.documentElement).fontSize);
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - topOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, [handleClick]);

  return null;
};

export default SmoothScroll;
