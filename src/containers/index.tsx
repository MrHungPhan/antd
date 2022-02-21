import { Route, Routes, useNavigate } from "react-router-dom";
import LayoutCustom from "components/Layout";
import { lazy, useEffect } from "react";
import client from "feathers";
import { useState } from "react";

const HomePage = lazy(() => import("containers/Home"));

const MainContent = () => {
  const [curUser, setCurUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const data = await (client as any).authenticate();
        setCurUser(data.user);
      } catch {
        navigate("/login");
      }
    })();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LayoutCustom />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default MainContent;
