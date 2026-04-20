'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlinks = () => {
  const pathname = usePathname();

  return (
    <>
      <li>
        <Link
          className={pathname === "/" ? "underline bg-blue-200 px-2 py-1 rounded" : ""}
          href="/"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          className={pathname === "/foods" ? "underline bg-blue-200 px-2 py-1 rounded" : ""}
          href="/foods"
        >
          Food
        </Link>
      </li>

      <li>
        <Link
          className={pathname === "/about" ? "underline bg-blue-200 px-2 py-1 rounded" : ""}
          href="/about"
        >
          About
        </Link>
      </li>
    </>
  );
};

export default Navlinks;