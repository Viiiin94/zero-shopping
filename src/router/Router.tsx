import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Main from "../app/main/Main";
import Digital from "../app/digital/Digital";
import Accessory from "../app/accessory/Accessory";
import Fashion from "../app/fashion/Fashion";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/accessory" element={<Accessory />} />
          <Route path="/digital" element={<Digital />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;