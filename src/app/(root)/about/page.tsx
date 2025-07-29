import bjj from "@/assets/bjj.jpg";
import Education from "@/components/Education";
import Skill from "@/components/Skill";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Ikechukwu Anoke and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1 className="text-center">About Me</H1>
      <section className="space-y-3">
        <p>
        Experienced Senior Executive and Director Level Professional with extensive professional experience and significant executive leadership accomplishments in business. Expert in strategic planning and implementation – Guiding and directing an enterprise through substantial change management utilizing strong and effective strategic leadership. 
A proven leader with a strong executive presence dedicated to elevating content from Africa to the rest of the world. Strong diplomatic skills and a natural affinity for cultivating relationships and persuading convening facilitating and building consensus among diverse individuals. Extreme attention to detail has helped companies of all types maximize investments, cut spending, and increase efficiency. 
Experienced in working with multi-cultural teams, with proven competencies in strategic financial planning, operations management, stakeholder management, cost control, financial reports, and managing projects across international developmental organizations. Well-developed employee relations, motivation, management development and training qualifications demonstrated by higher than average retention rates. 
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <Education />
        <Skill/>
      </section>
    </section>
  );
}
