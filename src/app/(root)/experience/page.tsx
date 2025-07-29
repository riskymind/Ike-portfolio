import Experience from "@/components/Experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "My Experiences and how to work with me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <Experience />
    </section>
  );
}
