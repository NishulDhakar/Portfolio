import { ProjectCardProps } from "@/components/sections/Projects/ProjectCard";

export const projectsData: ProjectCardProps[] = [

  {
    title: "PlacementReady",
    href: "https://Placify.nishul.dev/",
    github: "https://github.com/NishulDhakar/Placify",
    description:
      "A placement preparation platform where students can practice aptitude, coding, and interview skills through tests and mock interviews.",
    status: "building",
    image: "/Projects/job1.jpeg",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MySQL"],
    type: "Serious Projects",
  },
    {
    title: "Cognitive Games",
    href: "https://games.nishul.dev/",
    github: "https://github.com/NishulDhakar/CognitiveGamesWeb",
    description:
      "A brain games platform, designed to help students prepare for placement game rounds. Built with Next.js, TypeScript, and Tailwind CSS.",
    status: "running",
    image: "/Projects/games.jpeg",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    type: "Serious Projects",
  },
  {
    title: "PostaVid",
    href: "https://playavid.vercel.app/",
    github: "https://github.com/NishulDhakar/playavid",
    description:
      "A video-sharing platform where users can create accounts, upload, and share videos. Uses MongoDB and ImageKit for smooth video storage and streaming.",
    status: "running",
    image: "/Projects/share.jpeg",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    type: "Fun Projects",
  },
  {
    title: "Quick Pay",
    href: "https://pay.nishul.dev/",
    github: "https://github.com/NishulDhakar/QuickPay",
    description:
      "A responsive mock payment app that simulates smooth, secure transactions for demos. Built with Next.js, TypeScript, Tailwind, Node.js, Express, and MongoDB.",
    status: "running",
    image: "/Projects/pay.jpeg",
    technologies: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
    ],
    type: "Fun Projects",
  },
  {
    title: "DropIthere",
    href: "https://dropithere.nishul.dev/",
    github: "https://github.com/NishulDhakar/dropithere",
    description:
      "Created a platform to organize content like Twitter threads and YouTube videos into custom playlists, with shareable links for easy and structured dashboard sharing.",
    status: "running",
    image: "/Projects/drop.png",
    technologies: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
    ],
    type: "Serious Projects",
  },
  {
    title: "Course Selling Web",
    href: "https://github.com/NishulDhakar/Course-selling-backend",
    github: "https://github.com/NishulDhakar/Course-selling-backend",
    description:
      "A backend for a course selling platform where users explore and buy courses, while admins create, manage, and update course content easily.",
    status: "abandoned",
    image: "/Projects/CourseSelling.jpeg",
    technologies: ["Node.js", "Express", "MongoDB", "REST API"],
    type: "Fun Projects",
  },
  {
    title: "DrumKit",
    href: "https://drum-kit-eight-eta.vercel.app/",
    github:"https://github.com/NishulDhakar/DrumKit",
    description:
      "An interactive browser drum kit that plays sounds via keyboard input, ideal for fun and learning JavaScript event handling concepts.",
    status: "running",
    image: "/Projects/drum.jpeg",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "Fun Projects",
  },
  {
    title: "Tindog",
    href: "https://tindog-six-ashy.vercel.app/",
    github:"https://github.com/NishulDhakar/Tindog",
    description:
      "A clean, responsive frontend landing page for a fictional dog dating app, demonstrating Bootstrap design and layout skills effectively.",
    status: "running",
    image: "/Projects/dog.jpeg",
    technologies: ["HTML", "CSS", "Bootstrap"],
    type: "Fun Projects",
  },

  // {
  //   title: "SmartEssay",
  //   href: "https://smartessay.nishul.dev/",
  //     github: "https://github.com/Nishuldhakar/smartessay",
  //   description:
  //     "A minimalist Essay Practice App built for placement initiative. Real-time tracking, smart feedback, and gamified challenges to enhance logic, structure, and vocabulary while tracking progress.",
  //   status: "building",
  //   image: "/Projects/essay.jpeg",
  //   technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
  // },

  // {
  //   title: "Todo App",
  //   href: "https://todo.nishul.dev/",
  //   description:
  //     "A full-stack Todo application for efficient daily task management, featuring CRUD operations and MongoDB for persistent storage.",
  //   status: "running",
  //   image: "/todoImg.png",
  //   technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
  // },
  // {
  //   title: "QR Generator",
  //   href: "https://qrgenerator.nishul.dev/",
  //   description:
  //     "A lightweight web tool that allows users to instantly generate QR codes from any link or text input with one click.",
  //   status: "running",
  //   image: "/qrgeneratorImg.png",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  // },
  // {
  //   title: "Restaurant Website",
  //   href: "https://restaurant.nishul.dev/",
  //   description:
  //     "A modern and responsive landing page for a restaurant, designed using Bootstrap and perfect for showcasing food menus and promotions.",
  //   status: "running",
  //   image: "/restaurantImg.png",
  //   technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  // },

];

// -----old card data

// export const projectsData = [
//   {
//     title: "SmartEssay",
//     icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//     href: "https://smartessay.nishul.dev/",
//     progress: "Ongoing",
//     description:
//       "A minimalist Essay Practice App built for placement initiative. Real-time tracking, smart feedback, and gamified challenges to enhance logic, structure, and vocabulary while tracking progress.",
//     technologies: ["Next.js", "TypeScript", "TailwindCSS", "OpenAI API"],
//     links: [
//       {
//         type: "Source",
//         href: "https://github.com/NishulDhakar/smartessay",
//         icon: <Icons.github className="size-3" />,
//       },
//     ],
//     image: "/anime.jpeg",
//     viewDetails: {
//       type: "Details",
//       href: "/smartessay",
//       icon: <Icons.squareArrowOutUpRight className="size-3" />,
//     },
//   },
// ];

// {
//   title: "DropitHere",
//   icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//   href: "https://dropithere.nishul.dev/",
//   progress: "Completed",
//   description:
//     "Created a platform to organize content like Twitter threads and YouTube videos into custom playlists, with shareable links for easy and structured dashboard sharing.",
//   technologies: ["React", "Express.js", "MongoDB", "TailwindCSS", "REST API"],
//   links: [
//     {
//       type: "Source",
//       href: "https://github.com/NishulDhakar/DropitHere",
//       icon: <Icons.github className="size-3" />,
//     },
//   ],
//   image: "/dropithereImg.png",
//   viewDetails: {
//     type: "Details",
//     href: "/dropithere",
//     icon: <Icons.squareArrowOutUpRight className="size-3" />,
//   },
// },

// {
//   title: "Todo App",
//   icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//   href: "https://todo.nishul.dev/",
//   progress: "Completed",
//   description:
//     "A full-stack Todo app for managing your daily tasks efficiently.",
//   technologies: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
//   links: [
//     {
//       type: "Source",
//       href: "https://github.com/NishulDhakar/todo",
//       icon: <Icons.github className="size-3" />,
//     },
//   ],
//   image: "/todoImg.png",
//   viewDetails: {
//     type: "Details",
//     href: "/todo",
//     icon: <Icons.squareArrowOutUpRight className="size-3" />,
//   },
// },

// {
//   title: "Course selling",
//   icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//   href: "https://github.com/NishulDhakar/Course-selling-backend",
//   progress: "Completed",
//   description:
//     "Backend for a course selling platform with admin and user roles.",
//   technologies: ["React", "TailwindCSS", "TypeScript"],
//   links: [
//     {
//       type: "Source",
//       href: "https://github.com/NishulDhakar/Course-selling-backend",
//       icon: <Icons.github className="size-3" />,
//     },
//   ],
//   image: "/typingImg.png",
//   viewDetails: {
//     type: "Details",
//     href: "/typing",
//     icon: <Icons.squareArrowOutUpRight className="size-3" />,
//   },
// },

// {
//   title: "QR Generator",
//   icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//   href: "https://qrgenerator.nishul.dev/",
//   progress: "Completed",
//   description:
//     "Instantly generate QR codes for any link or text input.",
//   technologies: ["HTML", "CSS", "JavaScript"],
//   links: [
//     {
//       type: "Source",
//       href: "https://github.com/NishulDhakar/qrgenerator",
//       icon: <Icons.github className="size-3" />,
//     },
//   ],
//   image: "/qrgeneratorImg.png",
//   viewDetails: {
//     type: "Details",
//     href: "/qrgenerator",
//     icon: <Icons.squareArrowOutUpRight className="size-3" />,
//   },
// },

// {
//   title: "Restaurant Website",
//   icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//   href: "https://restaurant.nishul.dev/",
//   progress: "Completed",
//   description:
//     "A modern responsive restaurant website landing page.",
//   technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
//   links: [
//     {
//       type: "Source",
//       href: "https://github.com/NishulDhakar/restaurant",
//       icon: <Icons.github className="size-3" />,
//     },
//   ],
//   image: "/restaurantImg.png",
//   viewDetails: {
//     type: "Details",
//     href: "/restaurant",
//     icon: <Icons.squareArrowOutUpRight className="size-3" />,
//   },
// },

// {
//   title: "DrumKit",
//   icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//   href: "https://drumkit.nishul.dev/",
//   progress: "Completed",
//   description:
//     "Fun browser drum kit with keyboard sound interaction.",
//   technologies: ["HTML", "CSS", "JavaScript"],
//   links: [
//     {
//       type: "Source",
//       href: "https://github.com/NishulDhakar/drumkit",
//       icon: <Icons.github className="size-3" />,
//     },
//   ],
//   image: "/drumkitImg.png",
//   viewDetails: {
//     type: "Details",
//     href: "/drumkit",
//     icon: <Icons.squareArrowOutUpRight className="size-3" />,
//   },
// },

// {
//   title: "Tindog",
//   icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//   href: "https://tindog-six-ashy.vercel.app/",
//   progress: "Completed",
//   description:
//     "A beautiful frontend landing page for a fictional dog dating app.",
//   technologies: ["HTML", "CSS", "Bootstrap"],
//   links: [
//     {
//       type: "Source",
//       href: "https://github.com/NishulDhakar/tindog",
//       icon: <Icons.github className="size-3" />,
//     },
//   ],
//   image: "/tindogImg.png",
//   viewDetails: {
//     type: "Details",
//     href: "/tindog",
//     icon: <Icons.squareArrowOutUpRight className="size-3" />,
//   },
// },
// ];
