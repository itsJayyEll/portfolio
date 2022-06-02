import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PracticumOutputPage from "./pages/PracticumOutputPage";
import PracticumOverviewPage from "./pages/PracticumOverviewPage";
import PracticumSynthesisPage from "./pages/PracticumSynthesisPage";
import PracticumAppendixPage from "./pages/PracticumAppendixPage";
import ProfilePage from "./pages/ProfilePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const title = " | itsJayyEll Portfolio";

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage title={title} />} />
        <Route path="/profile" element={<ProfilePage title={title} />} />
        <Route path="/projects" element={<ProjectsPage title={title} />} />
        <Route
          path="/practicum-overview"
          element={<PracticumOverviewPage title={title} />}
        />

        <Route
          path="/practicum-outputs"
          element={<PracticumOutputPage title={title} />}
        />
        <Route
          path="/practicum-synthesis"
          element={<PracticumSynthesisPage title={title} />}
        />
        <Route
          path="/practicum-appendix"
          element={<PracticumAppendixPage title={title} />}
        />
        <Route path="/contact" element={<ContactPage title={title} />} />
        <Route path="*" element={<NotFoundPage title={title} />} />
      </Routes>
    </>
  );
};

export default App;
