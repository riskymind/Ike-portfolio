// components/EducationSection.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";
import {getAllEducation} from "@/lib/actions/education.actions"

import iese from "@/assets/IESE.png";
import cim from "@/assets/cim.png";
import awka from "@/assets/awka.png";
import pan from "@/assets/pan.jpeg";
import strat from "@/assets/Strathmore.png";

type Education = {
  school: string;
  degree: string;
  period: string;
  logo?: StaticImageData; // Correct type for imported images
};

const educationList: Education[] = [
  {
    school: "IESE Business School",
    degree: "Master of Business Administration (MBA)",
    period: "Apr 2023 – Sep 2024",
    logo: iese,
  },
  {
    school: "Strathmore University",
    degree: "Owner Manager Programme",
    period: "2019",
    logo: strat,
  },
  {
    school: "Lagos Business School, Pan-Atlantic University",
    degree: "Certification in New Product Development",
    period: "2007",
    logo: pan,
  },
  {
    school: "Nnamdi Azikiwe University",
    degree: "Bachelor's Degree in Political Science and Government",
    period: "2000 – 2004",
    logo: awka,
  },
  {
    school: "Chartered Institute of Marketing, UK",
    degree: "Post Graduate Diploma (PGD)",
    period: "",
    logo: cim,
  },
];

export default async function EducationSection() {
  const educations = await getAllEducation()
  return (
    <section className="py-2 px-6 md:px-20 bg-background" id="education">
      <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
        🎓 Education
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow hover:shadow-md transition duration-200"
          >
            {edu.logo && (
              <Image
                src={edu.logo}
                alt={edu.school}
                width={48}
                height={48}
                className="mb-4 rounded-md object-contain"
              />
            )}
            <h3 className="text-xl font-semibold text-gray-800">
              {edu.school}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{edu.degree}</p>
            {edu.period && (
              <p className="text-xs text-gray-500 mt-2">{edu.period}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
