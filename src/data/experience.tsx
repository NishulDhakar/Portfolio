export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  logo: string;
  employmentType?: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "Averoft",
    companyUrl: "https://averoft.com",
    location: "Bhopal, Madhya Pradesh, India",
    startDate: "Aug 2025",
    endDate: "Dec 2025",
    logo: "/averoft.jpeg",
    employmentType: "Internship",
    points: [
      "Contributing to full-stack development using Next.js, React, Node.js, Express.js, and MongoDB.",
      "Collaborated in a 5-member team to work on Skaio, a student social platform.",
      "Developed SchoolOS, a school management system.",
      "Built production features using React, Next.js, and Laravel.",
    ],
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Freelancing",
    location: "Remote",
    startDate: "Jan 2025",
    endDate: "Present",
    logo: "/image.png",
    employmentType: "Self-employed",
    points: [
      "Built and deployed production-ready web applications for clients and personal products.",
      "Focused on performance, UX, and scalable architecture.",
      "Successfully delivered projects ranging from e-commerce platforms to custom dashboards."
    ],
  },
];
