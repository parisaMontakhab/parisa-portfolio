export type ExperienceLink = {
  label: string;
  href: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  links?: ExperienceLink[];
  responsibilities: string[];
  technologies: string[];
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  typeLabel: string;
  featured?: boolean;
  cardHighlights: string[];
  detailFeatures: string[];
  techStack: string[];
  liveDemo: string;
  github?: string;
  previewImage: ProjectImage;
  additionalImages?: ProjectImage[];
};
