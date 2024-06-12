import { useEffect, useState } from 'react';

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState(""); 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth >= 705) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);


  return (
      <>
      <div className={`duration-500 md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 top-[25%] md:w-auto w-full px-5 max-[475px]:top-[18%] flex justify-center ${menuOpen || windowWidth >= 705 ? 'flex' : 'hidden'} justify-center`}>
      <nav
        className={`flex md:flex-row flex-col md:items-center md:gap-4 gap-3 max-[475px]:justify-center ${menuOpen || windowWidth >= 705 ? 'block' : 'hidden'}`}
      >
        <a
          className={`text-xl uppercase hover:border-b-2 hover:border-black text-center ${currentPage === "/paintings" ? 'border-b-2 border-black' : ''}`}
          href="/paintings"
        >
          Paintings
        </a>
        <a
          className={`text-xl uppercase hover:border-b-2 hover:border-black text-center  ${currentPage === "/bio" ? 'border-b-2 border-black' : ''}`}
          href="/bio"
        >
          Bio
        </a>
        <a
          className={`text-xl uppercase hover:border-b-2 hover:border-black text-center  ${currentPage === "/contact" ? 'border-b-2 border-black' : ''}`}
          href="/contact"
        >
          Contact me
        </a>
        {windowWidth < 475 && menuOpen && (
          <a
            className="flex min-[475px]:hidden justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/minzudem/"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>
        )}
      </nav>
    </div>
    <div className="max-[705px]:absolute right-[20px] ">
        <div>
          <div
            className="menuBtn md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer"
            onClick={toggleMenu}
          >
            <span
              className={`w-full h-1 bg-black rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 -translate-y-[-200%]' : 'translate-y-0'}`}
            ></span>
            <span
              className={`w-full h-1 bg-black rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span
              className={`w-full h-1 bg-black rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 translate-y-[-200%]' : 'translate-y-0'}`}
            ></span>
          </div>
        </div>
      </div>
      </>
  );
};
