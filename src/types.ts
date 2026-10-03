export interface EducationItem {
  institution: string;
  major?: string;
  program?: string;
  cohort?: string;
  specialization?: string;
  period: string;
}

export interface ExperienceItem {
  organization: string;
  role: string;
  period: string;
  steps?: string[];
  responsibilities?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  overview: string;
  image?: string;
  responsibilities: string[];
  programDetails?: {
    targetAudience: string;
    plannedScale: string; // retains "dự kiến: 25 người"
    format: string;
    activities: string[];
    coreValues: string;
  };
  contextDetails?: {
    title: string;
    points: string[];
  };
}

export interface ResearchItem {
  id: string;
  shortTitle: string;
  fullTitle: string;
  authorshipRole: string;
  researchFocus: string;
  data: string[];
  methods: string[];
  findings: string;
  additionalFindings?: string[];
  implications: string;
  qualification: string;
}

export interface BookItem {
  id: string;
  title: string;
  author: string;
  image?: string;
  subtitle?: string;
  summary: string;
  expandedThemes: string[];
  hasSpoilerWarning?: boolean;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  residentialAddressPrivate: string;
}
