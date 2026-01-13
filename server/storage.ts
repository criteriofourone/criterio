import { db } from "./db";
import { courses, faqs, type Course, type InsertCourse, type Faq, type InsertFaq } from "@shared/schema";

export interface IStorage {
  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  getFaqs(): Promise<Faq[]>;
  createFaq(faq: InsertFaq): Promise<Faq>;
}

export class DatabaseStorage implements IStorage {
  async getCourses(): Promise<Course[]> {
    return await db.select().from(courses);
  }

  async getCourse(id: number): Promise<Course | undefined> {
    const [course] = await db.select().from(courses).where(courses.id.eq(id)); // Corrected: use db.select()
    // Alternatively, if using findFirst:
    // return await db.query.courses.findFirst({ where: (c, { eq }) => eq(c.id, id) });
    return course;
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const [course] = await db.insert(courses).values(insertCourse).returning();
    return course;
  }

  async getFaqs(): Promise<Faq[]> {
    return await db.select().from(faqs);
  }

  async createFaq(insertFaq: InsertFaq): Promise<Faq> {
    const [faq] = await db.insert(faqs).values(insertFaq).returning();
    return faq;
  }
}

export const storage = new DatabaseStorage();
