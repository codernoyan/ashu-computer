import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div className="mx-auto max-w-screen-xl px-2 py-4 sm:px-6 lg:px-0">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <Link href="/"
              className="flex items-center gap-2 whitespace-nowrap pt-3 text-lg focus:outline-none lg:flex-1 font-siliguri font-semibold text-white"
            >
              আশু <span className="text-cyan-500">কম্পিউটার</span>
            </Link>
          </div>
          <p className="mt-2 text-center text-sm text-white lg:mt-0 lg:text-right">
            Copyright © 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;