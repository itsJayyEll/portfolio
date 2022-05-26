import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const title = "itsJayyEll Portfolio | ";

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage title={title} />} />
        <Route path="*" element={<NotFoundPage title={title} />} />
      </Routes>
    </>
  );
};

export default App;
