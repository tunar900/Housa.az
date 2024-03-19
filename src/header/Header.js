import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Transition } from "react-transition-group";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const duration = 300;

  const defaultOverlayStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: menuOpen ? 1 : 0,
  };

  const overlayTransitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const defaultMenuStyle = {
    transition: `right ${duration}ms ease-in-out`,
    right: windowWidth <= 960 ? (menuOpen ? "0" : "-100%") : "auto",
  };

  const menuTransitionStyles = {
    entering: { right: "0%" },
    entered: { right: "0%" },
    exiting: { right: "-100%" },
    exited: { right: "-100%" },
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      {menuOpen && (
        <div
          style={{
            ...defaultOverlayStyle,
            ...overlayTransitionStyles[menuOpen ? "entering" : "exited"],
          }}
          className="fixed inset-0 bg-black bg-opacity-75 z-50"
          onClick={closeMenu}
        ></div>
      )}
      <div className="flex justify-between relative items-center px-5 py-[0.5rem] rounded-[10px] header border-[2px]">
        <div className="flex items-center">
          <NavLink to="/">
            <img alt="" src="../photo/Union.png" />
          </NavLink>
          <NavLink to="/">
            <img alt="" src="../photo/v9.png" />
          </NavLink>
        </div>
        {windowWidth <= 960 && (
          <GiHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
            style={{ position: "absolute", top: "15px", right: "15px" }}
          />
        )}
        {windowWidth > 960 && (
          <div className="search col-span-1 flex items-center gap-4 bg-black text-white px-4 py-1 rounded-[49px]">
            <NavLink to="/" onClick={closeMenu}>
              Properties
            </NavLink>
            <NavLink to="market-intelligence" onClick={closeMenu}>
              <span className="text-[#C4C4C4]">Market Intelligence </span>
            </NavLink>
            <NavLink to="/realtor-portal" onClick={closeMenu}>
              <span className="text-[#C4C4C4]">Realtor Portal</span>
            </NavLink>
            <NavLink to="/costumize-search" onClick={closeMenu}>
              <span className="text-[#C4C4C4]">Costumize Search</span>
            </NavLink>
            <span className="rounded-[50%] text-[20px] p-3 bg-[#323232]">
              <BsSearch />
            </span>
          </div>
        )}
        <div className="col-span-1 flex items-center justify-end gap-4">
          {windowWidth > 960 && (
            <>
              <NavLink to="/sign-in" onClick={closeMenu}>
                <span className="mt-3">Sign in</span>
              </NavLink>
              <NavLink to="/sign-up" onClick={closeMenu}>
                <span className="mt-3 py-2 px-3 bg-[#ffffff] rounded-[28px] border border-[#ECECEC] border-solid">
                  Sign up
                </span>
              </NavLink>
            </>
          )}
        </div>
        <Transition in={menuOpen} timeout={duration}>
          {(state) => (
            <div
              style={{
                ...defaultMenuStyle,
                ...menuTransitionStyles[state],
              }}
              className="fixed top-0 right-0 h-full  w-[220px] max-[220px]:w-full bg-white p-4 z-50"
            >
              <div className="flex justify-end">
                <FaTimes
                  className="text-2xl cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>
              <div className="flex flex-col gap-4">
                <NavLink
                  to="/"
                  className="hover:text-[#5395E2]  inline-block h-6 max-w-[80px]"
                  onClick={closeMenu}
                >
                  Properties
                </NavLink>
                <NavLink
                  to="market-intelligence"
                  className="inline-block hover:text-[#5395E2]   max-w-[130px]"
                  onClick={closeMenu}
                >
                  Market Intelligence
                </NavLink>
                <NavLink
                  to="/realtor-portal"
                  className="inline-block hover:text-[#5395E2]     max-w-[120px]"
                  onClick={closeMenu}
                >
                  Realtor Portal
                </NavLink>
                <NavLink
                  to="/costumize-search"
                  className="inline-block hover:text-[#5395E2]   max-w-[120px]"
                  onClick={closeMenu}
                >
                  Costumize Search
                </NavLink>
              </div>
              <div className="flex flex-col gap-5 mt-3">
                <NavLink to="/sign-in" className="py-2 rounded-[28px]  px-3" onClick={closeMenu}>
                  Sign in
                </NavLink>
                <NavLink to="/sign-up" onClick={closeMenu}>
                  <span className="py-2 px-3 bg-[#ffffff] rounded-[28px] border border-[#ECECEC] border-solid">
                    Sign up
                  </span>
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
}

export default Header;
