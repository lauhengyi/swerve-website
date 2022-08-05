import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navigation">
      <ul className="nav-items">
      <li>
        <Image src="/Swerve_Icon.png" alt="logo" width={50} height={50} />
      </li>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/About">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/Contact">
          <a>Contact Us</a>
        </Link>
      </li>
      <li>
        <Link href="/Download">
          <a>Download the App</a>
        </Link>
      </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
