import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const navHeight = 80;

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      setIsVisible(!isScrolledDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 bg-black shadow-md transition-transform ${
        isVisible ? "" : "transform -translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <Image
            src={"https://imagizer.imageshack.com/img923/4372/6Pl6Bz.png"}
            alt={"Logo"}
            width={"70"}
            height={"10"}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SIT-ACM
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <Link
                className="block py-2 pl-3 pr-4 rounded md:p-0 hover:cursor-pointer"
                to="hero"
                style={{ color: "#739BD0" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 rounded md:p-0 hover:cursor-pointer"
                to="featuredon"
                style={{ color: "#739BD0" }}
              >
                Featured On
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 rounded md:p-0 hover:cursor-pointer"
                to="gallery"
                style={{ color: "#739BD0" }}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 rounded md:p-0 hover:cursor-pointer"
                to="aboutus"
                style={{ color: "#739BD0" }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 rounded md:p-0 hover:cursor-pointer"
                to="events"
                style={{ color: "#739BD0" }}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 rounded md:p-0 hover:cursor-pointer"
                to="team"
                style={{ color: "#739BD0" }}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 rounded md:p-0 hover:cursor-pointer"
                to="footer"
                style={{ color: "#739BD0" }}
              >
                Footer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
