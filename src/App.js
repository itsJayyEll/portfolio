import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PracticumOutputPage from "./pages/PracticumOutputPage";
import PracticumPage from "./pages/PracticumPage";
import PracticumOverviewPage from "./pages/PracticumOverviewPage";

const App = () => {
  const title = "itsJayyEll Portfolio | ";

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage title={title} />} />
        <Route path="/practicum">
          <Route
            path="overview"
            element={<PracticumOverviewPage title={title} />}
          />
          <Route
            path="outputs"
            element={<PracticumOutputPage title={title} />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage title={title} />} />
      </Routes>
    </>
  );
};

export default App;
