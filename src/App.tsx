import client from "feathers";
import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("./containers/Login"));
const MainContent = lazy(() => import("./containers"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<MainContent />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
