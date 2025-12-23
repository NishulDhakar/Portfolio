export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  logo: string;
  description: string;
}

export const experience: Experience[] = [
  {
    title: "Software Developer Intern",
    company: "Averoft",
    location: "Bhopal, India",
    startDate: "August 2025",
    endDate: "Present",
    logo: "/averoft.jpeg", 
    description: `Contributing to full-stack development using Next.js, React, Node.js, Express.js, and MongoDB
Working on scalable applications in AI, cloud, and digital transformation projects
Tech: Next.js, React, TypeScript, Node.js, Express.js, MongoDB, Tailwind CSS`,
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Freelancing",
    location: "Remote",
    startDate: "January 2025",
    endDate: "Present",
    logo: "/image.png",
    description: `Built and deployed production-ready web applications for clients and personal products
Focused on performance, UX, and scalable architecture`,
  },
];
