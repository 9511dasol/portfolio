"use client";
import Link from "next/link";
import "../styles/header.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const path = usePathname();
  const [nav, setNav] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 995) {
        setNav(true); // 995px 초과일 때는 항상 true
      } else {
        setNav(false); // 995px 이하일 때는 항상 false
      }
    };

    // 페이지가 로드될 때 화면 크기를 확인
    handleResize();

    // resize 이벤트 리스너 추가
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 995) {
      setNav((prev) => !prev);
    } else {
      setNav(true);
    }
  }, [path]);

  const toggleNav = () => {
    if (window.innerWidth <= 995) {
      setNav((prevNav) => !prevNav);
    }
  };

  return (
    <header>
      <Link href="/" className="logo">
        Dasol
      </Link>
      {nav ? (
        <nav>
          <Link href="/" className={path === "/" ? "active" : ""}>
            Home
          </Link>
          <Link href="/skill" className={path.includes("ski") ? "active" : ""}>
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
      ) : (
        <></>
      )}
      <i className="bx bx-menu bx-lg" onClick={toggleNav} />
    </header>
  );
}
