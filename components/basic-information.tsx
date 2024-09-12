"use client";
import "../styles/section.css";
import { useEffect } from "react";
import Link from "next/link";
import { myPicture } from "../ingredients/ingredients";
export default function BaInfo() {
  useEffect(() => {
    const texts = ["FE Dev", "BE Dev", "FS Dev"];
    const speed = 100;
    const textElements = document.querySelector(
      ".typewriter-text"
    ) as HTMLElement;

    let textIndex = 0;
    let characterIndex = 0;
    let typing = true;

    function typeWriter() {
      if (typing) {
        if (characterIndex < texts[textIndex].length) {
          textElements.textContent = texts[textIndex].substring(
            0,
            characterIndex + 1
          );
          characterIndex++;
          setTimeout(typeWriter, speed);
        } else {
          typing = false;
          setTimeout(eraseText, 1000);
        }
      }
    }

    function eraseText() {
      if (!typing) {
        if (characterIndex > 0) {
          textElements.textContent = texts[textIndex].substring(
            0,
            characterIndex - 1
          );
          characterIndex--;
          setTimeout(eraseText, speed);
        } else {
          typing = true;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(typeWriter, speed);
        }
      }
    }

    // 초기 애니메이션 시작
    typeWriter();
  }, []);
  return (
    <section className="home">
      <div className="home-img">
        <img src={myPicture.src} alt="" />
      </div>
      <div className="home-content">
        <h1>
          Hi, I'm <span>Dasol Han</span>
        </h1>
        <div className="typewriter">
          I'm a <span className="typewriter-text"></span>
          <label htmlFor="">|</label>
          <p>Let me do my best without any regrets.</p>
          <div className="social-icons">
            <Link href="https://velog.io/@9511dasol/posts" target="_blank">
              <i className="bx bx-bold bx-sm" />
            </Link>
            <Link href="https://github.com/9511dasol" target="_blank">
              <i className="bx bxl-github" />
            </Link>
          </div>
          {/* <Link href="#" className="btn">
            Hire Me
          </Link> */}
        </div>
      </div>
    </section>
  );
}
