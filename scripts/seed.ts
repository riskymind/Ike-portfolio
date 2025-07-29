import { PrismaClient } from "@/generated/prisma";
import sampleData from "./sample-data"

async function main() {
    const prisma = new PrismaClient()
    await prisma.education.deleteMany()
    await prisma.experience.deleteMany()
    await prisma.skill.deleteMany()

    await prisma.education.createMany({data: sampleData.educations})
    await prisma.experience.createMany({data: sampleData.experience})
    await prisma.skill.createMany({data: sampleData.skill})
}


main()