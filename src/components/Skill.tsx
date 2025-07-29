// components/SkillsSection.tsx
import React from "react";
import {getAllSkill} from "@/lib/actions/skill.actions"

const skills = [
  "Mobile Content",
  "VAS",
  "Telecommunications",
  "Mobile Entertainment",
  "Mobile Applications",
  "Strategy",
  "Mobile Devices",
  "Mobile Marketing",
  "SMS",
  "Entrepreneurship",
  "Mobile Internet",
  "Business Strategy",
  "Project Management",
  "Project Planning",
  "Strategic Partnerships",
  "Product Development",
  "Product Management",
  "New Business Development",
  "Product Marketing",
  "Mobile Commerce",
  "Leadership",
  "Management",
  "Start-ups",
  "Marketing",
  "Cross-functional Team Leadership",
  "Strategic Planning",
  "Market Research",
  "Advertising",
  "E-commerce",
  "Customer Relationship Management (CRM)",
  "Business Development",
  "Value-Added Services (VAS)",
  "Team Leadership",
  "Team Management",
  "Business Planning",
  "Digital Marketing",
  "Social Media Marketing",
  "Negotiation",
  "Public Relations",
  "Microsoft Office",
  "Social Media",
  "Competitive Analysis",
  "Online Marketing",
  "Multi-channel Marketing",
  "P&L Management",
  "Customer Service",
  "Event Management",
  "Sales",
  "Wireless Technologies",
];

export default async function SkillsSection() {
  const skills = await getAllSkill()
  return (
    <section className="py-12 px-6 md:px-20 bg-background" id="skills">
      <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
        🛠 Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-primary/10 text-primary border border-primary/30 text-sm font-medium px-4 py-2 rounded-full transition hover:bg-primary/20"
          >
            {skill.title}
          </span>
        ))}
      </div>
    </section>
  );
}
