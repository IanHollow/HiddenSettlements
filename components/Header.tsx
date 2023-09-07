"use client";
import Link from "next/link";
import { Grenze_Gotisch } from "next/font/google";
import { useState } from "react";
import PopupNav from "./PopupNav";

const grenzeGotisch = Grenze_Gotisch({ subsets: ["latin"] });

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="mx-8 mt-3 flex items-center justify-between">
        <Link
          className={`text-4xl font-bold md:text-5xl lg:text-7xl ${grenzeGotisch.className}`}
          href="/"
        >
          Hidden Settlements
        </Link>
        <button className="mt-1 md:hidden" onClick={toggleMenu}>
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.3732 0.125H0.373169V1.875H20.3732V0.125ZM20.3732 7.125H0.373169V8.875H20.3732V7.125ZM0.373169 14.125H20.3732V15.875H0.373169V14.125Z"
            ></path>
          </svg>
        </button>
        <div className="mt-2 hidden space-x-8 text-lg font-medium md:flex">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/source">
            Source
          </Link>
          <Link className="hover:underline" href="/about">
            About
          </Link>
          <Link className="hover:underline" href="/play">
            Play
          </Link>
        </div>
        <PopupNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </nav>
    </header>
  );
}
