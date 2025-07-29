import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {

  return (
    <header className="sticky top-0 bg-background">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium">
          <Link href="/admin/education">Education</Link>
          <Link href="/admin/experience">Experience</Link>
          <Link href="/admin/skill">Skill</Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
