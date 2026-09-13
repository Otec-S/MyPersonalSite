const baseUrl = import.meta.env.BASE_URL;

export const RESUME_LINKS = {
  ru: `${baseUrl}resume/resume-ru.pdf`,
  en: `${baseUrl}resume/resume-en.pdf`,
} as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/Otec-S",
  linkedin: "http://www.linkedin.com/in/sergey-grigorash",
  telegram: "https://t.me/Otec_S",
  email: "mailto:sergey.adviser@gmail.com",
} as const;
