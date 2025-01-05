import { defineCollection, z } from "astro:content";
const courses = defineCollection({
  schema: z.object({
    courseTitle: z.string(),
    teacher: z.string(),
    role: z.string(),
    price: z.string(),
    intro: z.string(),
    level: z.string(),
    duration: z.string(),
    videos: z.string(),
    files: z.string(),
    purchaseLink: z.string(),
    enrollLink: z.string(),
    avatar: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const teachers = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    intro: z.string(),
    avatar: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    courses: z.array(
      z.object({
        title: z.string(),
        price: z.string(),
        description: z.string(),
        url: z.string(),
      })
    ),
    skills: z.array(z.string()),
  }),
});
const events = defineCollection({
  schema: z.object({
    title: z.string(),
    meetingDate: z.string(),
    location: z.string(),
    description: z.string(),
  }),
});
const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
export const collections = {
  courses: courses,
  teachers: teachers,
  events: events,
  infopages: infopages,
  posts: postsCollection,
};
