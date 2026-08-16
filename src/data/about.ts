export const bio =
  "I'm a Computer Science student at Stanford focused on AI infrastructure and systems design. " +
  "I've shipped fleet-management tools for autonomous trucks at Torc Robotics, built safety-critical " +
  "AI evaluation tooling for NASA Goddard's drone programs, and lead the autonomous navigation team " +
  "for Stanford's Polar Rover. Outside of internships I build and ship my own systems — from a " +
  "financial sentiment-analysis pipeline to a real-time AI music transcription product with 100+ signups.";

export const education = {
  school: "Stanford University",
  degree: "B.S. Computer Science, GPA 3.97",
  location: "Palo Alto, CA",
  dateRange: "Expected Graduation: 2029",
  coursework: [
    "Applied Machine Learning",
    "Computer Systems",
    "Operating Systems Principles",
    "Data Structures and Algorithms",
  ],
  activities: [
    "Stanford Student Space Initiative — Polar Rover Team (Navigation Team Leader)",
    "Stanford AI Club",
  ],
};

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "C++", "Java", "JavaScript/TypeScript", "SQL"],
  },
  {
    label: "Cloud & Infrastructure",
    items: [
      "AWS (EC2, Lambda, DynamoDB)",
      "Terraform",
      "Databricks",
      "EventBridge",
      "PostgreSQL/RDS",
      "WebSockets",
    ],
  },
  {
    label: "AI & Data Systems",
    items: [
      "LangChain",
      "TensorFlow",
      "OpenAI API",
      "Pydantic",
      "Claude Code",
      "Git",
      "Jira",
      "Unix/Linux",
    ],
  },
];

export const contact = {
  email: "lkniska@stanford.edu",
  linkedin: "https://linkedin.com/in/lucas-kniska",
  github: "https://github.com/LucasKniska",
};
