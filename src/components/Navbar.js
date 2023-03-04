import React from "react";

export default function Navbar() {
  return (
    <div>
      <header aria-label="Site Header" className="bg-[#081c15]">
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="flex h-36 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="flex gap-2 text-white text-lg font-normal" href="/">
                I.Dictionary
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="flex text-[#5e6572] items-center gap-6 text-sm">
                  <li>
                    <a
                      className="transition hover:text-[#b7e4c7] text-[#d8f3dc]"
                      href="/"
                    >
                      Dictionary
                    </a>
                  </li>

                  <li>
                    <a
                      className="transition hover:text-[#b7e4c7] text-[#d8f3dc]"
                      href="/"
                    >
                      Grammer
                    </a>
                  </li>

                  <li>
                    <a
                      className="transition hover:text-[#b7e4c7] text-[#d8f3dc]"
                      href="/"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
