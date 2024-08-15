export interface Resume {
  name: string;
  contact: {
    location: string;
    phone: string;
    email: string;
    github: string;
  };
  summary: string;
  skills: {
    languages: string[];
    frameworks_and_tools: string[];
  };
  experience: {
    title: string;
    company: string;
    location: string;
    dates: string;
    responsibilities: string[];
  }[];
  education: {
    institution: string;
    major: string;
    location: string;
    dates: string;
  }[];
  volunteering: {
    organization: string;
    role: string;
    description: string;
  }[];
  clearance: string;
}
