import {
  insertEducationSchema,
  insertExperienceSchema,
  insertSkillSchema,
} from "@/lib/validators";
import { z } from "zod";

export interface BackendSkill {
  id: string;
  title: string;
}

export interface BackendExperience {
  id: string;
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface BackendEducation {
  id: string;
  school: string;
  degree: string;
  period: string;
  logo: string;
}

export type FrontEndSkill = z.infer<typeof insertSkillSchema>;
export type FrontEndExperience = z.infer<typeof insertExperienceSchema>;
export type FrontEndEducation = z.infer<typeof insertEducationSchema>;

export type Experience = z.infer<typeof insertExperienceSchema> & {
  id: string;
};

export type Education = z.infer<typeof insertEducationSchema> & {
  id: string;
};

export type Skill = z.infer<typeof insertSkillSchema> & {
  id: string;
};
