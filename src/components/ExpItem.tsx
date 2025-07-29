// components/ExperienceItem.tsx
import Image, { StaticImageData } from "next/image";
import React from "react";

type Experience = {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  description: string[];
};

export const ExperienceItem = ({
  logo,
  company,
  role,
  period,
  location,
  description,
}: Experience) => (
  <div className="flex flex-col sm:flex-row gap-4 p-6 bg-background rounded-2xl shadow-md hover:shadow-lg transition-shadow">
    <Image
      src={logo}
      alt={`${company} logo`}
      width={100}
      height={100}
      className="w-16 h-16 object-contain"
    />

    <div className="flex-1">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
        <div>
          <h3 className="text-xl font-semibold">{role}</h3>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
        <div className="text-sm text-gray-500 text-right sm:text-left ">
          <p>{period}</p>
          <p>{location}</p>
        </div>
      </div>

      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
        {description.map((item, index) => (
          <li key={index} className="list-none">{item}</li>
        ))}
      </ul>
    </div>
  </div>
);
