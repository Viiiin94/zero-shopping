import { Outlet } from "react-router-dom";

import Header from "../app/Header";
import Footer from "../app/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
