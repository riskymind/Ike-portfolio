"use server"
// import { PrismaClient } from "@/app/generated/prisma";
import { convertToPlainObject } from "@/lib/utils";
import { insertExperienceSchema, updateExperienceSchema } from "@/lib/validators";
import { revalidatePath } from "next/cache";
import {z} from "zod"
import { formatError } from "../utils";
import { prisma } from "@/db/prisma"

export async function getAllExperience() {
    const data = await prisma.experience.findMany({})

    return convertToPlainObject(data)
}

// Get single experience by it's ID
export async function getExperienceById(expId: string) {
    const data =  await prisma.experience.findFirst({
        where: {id: expId}
    })

    if (!data) return null;

    return convertToPlainObject(data)
}

// Create a Experience
export async function createExperience(data: z.infer<typeof insertExperienceSchema>) {
  try {
    const experience = insertExperienceSchema.parse(data);
    await prisma.experience.create({data: experience});

    revalidatePath("/admin/experience");

    return {
      success: true,
      message: "Experience created successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}


// Update a experience
export async function updateExperience(data: z.infer<typeof updateExperienceSchema>) {
  try {
    const experience = updateExperienceSchema.parse(data);

    const expExists = await prisma.experience.findFirst({
        where: { id: experience.id },
      });
  
      if (!expExists) throw new Error('Education not found');
  
      await prisma.experience.update({
        where: { id: experience.id },
        data: experience,
      });

    revalidatePath("/admin/experience");

    return {
      success: true,
      message: "Experience updated successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Delete a experience
export async function deleteExperience(id: string) {
    try {
      const expExists = await prisma.experience.findFirst({
      where: { id },
    });

    if (!expExists) throw new Error('Experience not found');

    await prisma.experience.delete({ where: { id } });

    revalidatePath('/admin/experience');

    return {
      success: true,
      message: 'Experience deleted successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}