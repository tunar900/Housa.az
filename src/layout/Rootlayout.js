import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../components/Footer";
import ScrollTop from "../components/scroolTop/ScroolTop";

function Rootlayout() {
  // const { pathname } = useLocation();
  // const shouldShowHeader = ![
  //   "sign-in" ||
  //   "sign-up" ||
  //   "forgotpassword",
  // ].includes(pathname);
  const location = useLocation();
  const hideHeader =
    location.pathname.includes("sign-in") ||
    location.pathname.includes("sign-up") ||
    location.pathname.includes("forgotpassword");
  return (
    <div>
      {!hideHeader && (
        <header className="mx-auto mt-3  max-w-[98%] max-md:max-w-[96%] max-sm:max-w-[95%] ">
          <Header />
        </header>
      )}

      <ScrollTop />
      <main>
        <Outlet />
      </main>
      {!hideHeader && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default Rootlayout;
