import { z } from "zod";

export const insertExperienceSchema = z.object({
  company: z.string().min(3, "Company must be at least 3 characters"),
  logo: z.string().min(3, "Image must be at least 3 characters"),
  role: z.string().min(3, "Role must be at least 3 characters"),
  period: z.string(),
  location: z.string().min(3, "Location must be at least 3 characters"),
  description: z.array(z.string()),
});

// Schema for updating experience
export const updateExperienceSchema = insertExperienceSchema.extend({
  id: z.string().min(1, "Id is required"),
});

export const insertEducationSchema = z.object({
  school: z.string().min(3, "School must be at least 3 characters"),
  degree: z.string().min(3, "Degree must be at least 3 characters"),
  period: z.string(),
  logo: z.string().min(3, "Image must be at least 3 characters"),
});

// Schema for updating experience
export const updateEducationSchema = insertEducationSchema.extend({
  id: z.string().min(1, "Id is required"),
});

export const insertSkillSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters")
});

// Schema for updating skill
export const updateSkillSchema = insertSkillSchema.extend({
  id: z.string().min(1, "Id is required"),
});
