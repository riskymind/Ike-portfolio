// components/ExperienceList.tsx
import React from "react";
import { ExperienceItem } from "./ExpItem";
import { BriefcaseIcon } from "lucide-react";
import zuri from "@/assets/zuri.png";
import play from "@/assets/playgroup.png";
import mtech from "@/assets/mtech.jpeg";
import {getAllExperience} from "@/lib/actions/experience.actions"
const experiences = [
  {
    company: "Zuri Health",
    logo:zuri,
    role: "Founder and CEO",
    period: "Jan 2020 - Present · 5 yrs 7 mos",
    location: "Kenya",
    description: [
      "Working with a talented team building a comprehensive mobile health solution.",
      "Addressing Africa's health infrastructure and cost challenges.",
    ],
  },
  {
    company: "Play Group (Taurus Group LTD)",
    logo: play,
    role: "Founder and CEO",
    period: "Jan 2013 - Present · 12 yrs 7 mos",
    location: "Nairobi, Kenya",
    description: [
      "Built Africa’s first integrated entertainment business: Play, Taurus Musik, and Taurus Events.",
      "Led finance, HR, and created multi-revenue stream operations.",
    ],
  },
  {
    company: "MTech Communications PLC",
    logo: mtech,
    role: "Executive Director Group Commercialization",
    period: "Oct 2011 - Jan 2013 · 1 yr 4 mos",
    location: "Nairobi, Kenya",
    description: [
      "Expanded into Francophone & Southern Africa.",
      "Launched Airtel Africa partnership and grew revenue to $5M+.",
      "Led Africa’s content aggregation growth.",
    ],
  },
  {
    company: "MTech Communications PLC",
    logo: mtech,
    role: "Chief Executive Officer, East Africa",
    period: "Oct 2008 - Jan 2013 · 4 yrs 4 mos",
    location: "Nairobi, Kenya",
    description: [
      "Revived East Africa branch from bankruptcy to profitability.",
      "Launched new VAS products and $1M+ in new partnerships.",
    ],
  },
  {
    company: "MTech Communications PLC",
    logo: mtech,
    role: "Senior Product Development Executive for Africa",
    period: "Apr 2007 - Jul 2008 · 1 yr 4 mos",
    location: "Lagos, Nigeria",
    description: [
      "Led development of interactive media in Kenya, Uganda, Ghana.",
      "Pioneered performance dashboards and key content alliances.",
    ],
  },
];

export default async function ExperienceList() {
  const experiences = await getAllExperience()
  return (
    <section className="max-w-5xl mx-auto mt-12 px-4" id="experience">
      <h2 className="text-3xl font-bold mb-10 text-center text-foreground flex items-center justify-center gap-2">
        <BriefcaseIcon className="w-6 h-6" />
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}
