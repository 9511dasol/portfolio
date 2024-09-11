"use client";
import Link from "next/link";
import "../styles/header.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  return (
    <header>
      <Link href="/" className="logo">
        Dasol
      </Link>

      <nav>
        <Link href="/" className={path === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          href="/skill"
          className={path.includes("ski") ? "active" : ""}
        >
          Skill
        </Link>
        <Link
          href="/project"
          className={path.includes("project") ? "active" : ""}
        >
          Project
        </Link>
        <Link
          href="/publishing"
          className={path.includes("pub") ? "active" : ""}
        >
          Publishing
        </Link>
        <Link href="https://github.com/9511dasol" target="_blank">
          GIT
        </Link>
        <Link href="https://velog.io/@9511dasol/posts" target="_blank">
          Blog
        </Link>
      </nav>
    </header>
  );
}
