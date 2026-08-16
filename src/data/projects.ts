import type { Project } from "../types/project";

export const internships: Project[] = [
  {
    id: "torc-robotics",
    title: "Torc Robotics (Daimler Autonomous Trucking)",
    role: "Full Stack / Application Integration Engineer",
    location: "Dallas, TX; Blacksburg, VA",
    dateRange: "January 2025 – Present",
    sortDate: "2025-01",
    category: "trucks",
    kind: "internship",
    story:
      "The question of trustworthy autonomy followed me from NASA to Torc Robotics, where I traded drones for 80,000 lb autonomous trucks and started shipping the tools that keep a real fleet moving.",
    highlights: [
      "**10,000+** assets tracked in a new fleet management system",
      "**50%** faster internal tools onboarding for a 20+ person team",
      "Truck errors surfaced **12 hrs** earlier via real-time telemetry pipelines",
      "**50%** fewer recalled tickets, **15%** faster mission deployment",
    ],
    tags: ["React", "TypeScript", "AWS", "Terraform", "DynamoDB"],
  },
  {
    id: "nasa-goddard",
    title: "NASA Goddard IV&V",
    role: "Intern: Utilizing and Assuring Generative AI",
    location: "Fairmont, WV",
    dateRange: "June 2024 – July 2024",
    sortDate: "2024-06",
    category: "nasa",
    kind: "internship",
    story:
      "Two years after chasing an eclipse for NASA, they brought me back — this time to stress-test whether AI could be trusted to keep a drone safe in the air.",
    highlights: [
      "Hazard-detection accuracy: **65% → 95%** (MiDaS + YOLO)",
      "Real-time drone flight-control GUI (Python, FastAPI)",
      "Risk analysis presented directly to NASA IV&V staff",
    ],
    tags: ["Python", "FastAPI", "TensorFlow", "OpenCV", "YOLO"],
  },
];

export const projects: Project[] = [
  {
    id: "ssi-polar-rover",
    title: "Stanford Student Space Initiative",
    role: "Polar Rover: Autonomous Navigation Team Lead",
    location: "Palo Alto, CA",
    dateRange: "September 2025 – Present",
    sortDate: "2026-07",
    category: "space",
    kind: "project",
    story:
      "Alongside the Torc internship, I started leading navigation for Stanford's Polar Rover — building, myself this time, the sensor-to-decision pipeline I'd only evaluated at NASA.",
    highlights: [
      "Real-time LiDAR path-planning and object avoidance (Python, C++)",
      "Wired → wireless telemetry redesign for live cloud streaming",
      "Field-deployed with a multi-engineer team in Lake Tahoe, CA",
    ],
    tags: ["Python", "C++", "LiDAR", "Navigation"],
  },
  {
    id: "news-sentiment-pipeline",
    title: "News-Sentiment-Pipeline",
    role: "Backend / Data Engineer",
    location: "Self-Directed",
    dateRange: "June 2026 – Present",
    sortDate: "2026-06",
    category: "finance",
    kind: "project",
    story:
      "Most recently, I turned the same systems instincts toward data: an honest, end-to-end pipeline that tests whether AI-extracted news sentiment is actually worth trading on.",
    highlights: [
      "Serverless AWS ingestion pipeline (Lambda, EventBridge, RDS)",
      "Two-stage LangChain extraction validated against Pydantic schemas",
      "Sentiment-quintile backtest vs. forward returns (Databricks)",
    ],
    tags: ["LangChain", "Databricks", "Terraform", "AWS Lambda", "Postgres"],
  },
  {
    id: "score-ai",
    title: "Score AI",
    role: "Project Owner / Full Stack Engineer",
    location: "Palo Alto, CA",
    dateRange: "March 2026 – June 2026",
    sortDate: "2026-03",
    category: "music",
    kind: "project",
    story:
      "Wanting to see a product through end-to-end, I built Score AI solo — real-time AI music transcription, from the WebSocket audio pipeline to the Stripe checkout.",
    highlights: [
      "**50ms** real-time transcription latency, auto-scaling inference",
      "**100+** signups, **50** peak concurrent users",
      "Full stack solo: WebSockets, Stripe, Supabase",
    ],
    tags: ["React", "TypeScript", "WebSockets", "Stripe", "Supabase"],
    links: [{ label: "scoreai.cloud", url: "https://www.scoreai.cloud" }],
  },
  {
    id: "nasa-eclipse-ballooning",
    title: "NASA National Eclipse Ballooning Project",
    role: "Payload Manager / Engineer",
    location: "College Park, MD; Odessa, TX; Erie, PA",
    dateRange: "2024",
    sortDate: "2024-04",
    category: "solar-eclipse",
    kind: "project",
    story:
      "My first taste of high-stakes engineering: building the telemetry link that had to work, live, for a balloon payload chasing a total solar eclipse.",
    highlights: [
      "**95,000 ft** high-altitude payload telemetry (Raspberry Pi, Python)",
      "First confirmed evidence of eclipse-induced atmospheric gravity waves",
    ],
    tags: ["Raspberry Pi", "Python", "Telemetry"],
    links: [
      {
        label: "Covered by Forbes",
        url: "https://www.forbes.com/sites/jamiecartereurope/2024/06/13/gravity-waves-confirmed-for-first-time-during-solar-eclipse-say-scientists/",
      },
    ],
  },
  {
    id: "nasa-app-dev-challenge",
    title: "NASA App Development Challenge",
    role: "Winner — Team Spaghetti Code",
    location: "Trinity Christian School, WV → Houston, TX",
    dateRange: "Fall 2023 – April 2024",
    sortDate: "2023-10",
    category: "space",
    kind: "project",
    story:
      "A national win: our team built a Unity-based lunar rover path-planning simulation that placed among NASA's top teams and earned a trip to Johnson Space Center.",
    highlights: [
      "National winner, NASA App Development Challenge",
      "Unity simulation for lunar rover path-planning and navigation",
      "Presented at NASA Johnson Space Center, Houston (Apr 2024)",
    ],
    tags: ["Unity", "C#", "Path Planning"],
    links: [{ label: "Watch the presentation", url: "https://www.youtube.com/watch?v=bJyMJwoTKS4" }],
  },
];
