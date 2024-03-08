import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen">
      <div className="w-full h-3 bg-[#051F10]"></div>
      <Navbar />
      <MobileNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
