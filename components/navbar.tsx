"use client";
import Link from "next/link";
import "../styles/header.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const path = usePathname();
  const [nav, setNav] = useState<boolean>(false); // 처음엔 false로 설정

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 995) {
        setNav(true); // 995px 초과일 때는 항상 true
      } else {
        setNav(false); // 995px 이하일 때는 항상 false
      }
    };

    // 페이지가 로드될 때와 resize 이벤트 발생시 화면 크기를 확인
    handleResize();
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 995) {
      setNav(false); // path가 변경될 때는 화면 크기가 995 이하일 경우 항상 nav를 false로
    }
  }, [path]);

  // 햄버거 메뉴를 클릭할 때 nav 상태를 토글 (995px 이하에서만)
  const toggleNav = () => {
    if (window.innerWidth <= 995) {
      setNav((prevNav) => !prevNav);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targets = event.target as Element;
      if (window.innerWidth <= 995 && nav && !targets.closest(".nav")) {
        setNav(false);
      }
    };

    if (nav) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [nav]);

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
