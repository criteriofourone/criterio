import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  affiliateLink: text("affiliate_link").notNull(),
  description: text("description").notNull(),
  learningPoints: text("learning_points").array().notNull(),
  idealProfile: text("ideal_profile").notNull(),
  pros: text("pros").array().notNull(),
  cons: text("cons").array().notNull(),
  certification: text("certification"), // Changed to optional
  ctaText: text("cta_text").notNull(),
  imageUrl: text("image_url"),
});

export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
});

export const insertCourseSchema = createInsertSchema(courses);
export const insertFaqSchema = createInsertSchema(faqs);

export type Course = typeof courses.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type Faq = typeof faqs.$inferSelect;
export type InsertFaq = z.infer<typeof insertFaqSchema>;
