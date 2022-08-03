import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navigation">
      <div>
        <Image src="/Swerve_Icon.png" alt="logo" width={50} height={50} />
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/About">
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href="/Contact">
          <a>Contact Us</a>
        </Link>
      </div>
      <div>
        <Link href="/Download">
          <a>Download the App</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
