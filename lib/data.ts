// Central mock data. Swap for API calls later.
export type Level = "Beginner" | "Intermediate" | "Advanced";
export interface Creator { id: string; name: string; role: string; bio: string }
export interface Course { id: string; title: string; category: string; price: number; rating: number; level: Level; creatorId: string; image: string; description: string; lessons: number; hours: number }
export interface Testimonial { name: string; role: string; quote: string; avatar: string }

export const categories = ["Design", "Development", "IT & Software", "Business", "Marketing", "Photography"] as const;

export const creators: Creator[] = [
  { id: "amara-okafor", name: "Amara Okafor", role: "Product Designer", bio: "Ten years designing fintech and education products. Teaches design systems in Figma." },
  { id: "daniel-kimani", name: "Daniel Kimani", role: "Senior Software Engineer", bio: "Full-stack engineer who ships React and Node apps for startups across East Africa." },
  { id: "lena-fischer", name: "Lena Fischer", role: "Growth Marketer", bio: "Helps small brands grow with SEO, email and paid social." },
  { id: "marcus-reid", name: "Marcus Reid", role: "Photographer", bio: "Documentary and portrait photographer with work in national magazines." },
];

// [title, category, price, rating, level, creator index]
const seed: [string, string, number, number, Level, number][] = [
  ["Learn Figma from Basics", "Design", 25, 4.8, "Beginner", 0],
  ["Design Systems with Figma Variables", "Design", 39, 4.7, "Advanced", 0],
  ["UI Design Fundamentals", "Design", 29, 4.6, "Beginner", 0],
  ["Prototyping for Mobile Apps", "Design", 35, 4.7, "Intermediate", 0],
  ["React from Zero to Hero", "Development", 45, 4.9, "Beginner", 1],
  ["TypeScript for React Developers", "Development", 40, 4.8, "Intermediate", 1],
  ["Next.js 15 in Production", "Development", 55, 4.9, "Advanced", 1],
  ["Node.js REST APIs", "Development", 42, 4.6, "Intermediate", 1],
  ["Linux Command Line Essentials", "IT & Software", 22, 4.5, "Beginner", 1],
  ["Cloud Basics with AWS", "IT & Software", 49, 4.6, "Beginner", 1],
  ["Cybersecurity Starter Kit", "IT & Software", 38, 4.7, "Beginner", 1],
  ["Business Strategy for Startups", "Business", 33, 4.5, "Intermediate", 2],
  ["Financial Modelling in Excel", "Business", 37, 4.7, "Intermediate", 2],
  ["SEO That Actually Works", "Marketing", 27, 4.8, "Beginner", 2],
  ["Email Marketing Automation", "Marketing", 30, 4.6, "Intermediate", 2],
  ["Social Media Content Planning", "Marketing", 24, 4.5, "Beginner", 2],
  ["Portrait Photography Basics", "Photography", 28, 4.8, "Beginner", 3],
  ["Lightroom Editing Workflow", "Photography", 32, 4.7, "Intermediate", 3],
];

export const courses: Course[] = seed.map(([title, category, price, rating, level, ci], i) => ({
  id: String(i + 1), title, category, price, rating, level,
  creatorId: creators[ci].id,
  image: `/images/course-${(i % 8) + 1}.jpeg`,
  description: `${title} is a hands-on ${level.toLowerCase()} course in ${category.toLowerCase()}. Work through short video lessons, practical exercises and a final project you can add to your portfolio.`,
  lessons: 18 + (i % 7) * 4, hours: 4 + (i % 6) * 2,
}));

export const testimonials: Testimonial[] = [
  { name: "Jane.", role: "Enthusiastic Learner", quote: "The Figma course took me from opening the app for the first time to landing my first freelance project in six weeks.", avatar: "/images/jane.jpeg" },
  { name: "Mark.", role: "Junior Developer", quote: "Short lessons and real projects. I finally understood React state after the second module.", avatar: "/images/mark.jpeg" },
  { name: "Ben.", role: "Small Business Owner", quote: "The marketing courses gave me a plan I could follow the same week. My newsletter list has doubled.", avatar: "/images/Ben.jpeg" },
];

export const getCourse = (id: string) => courses.find((c) => c.id === id);
export const getCreator = (id: string) => creators.find((c) => c.id === id);
