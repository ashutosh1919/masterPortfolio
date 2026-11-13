import React, { Component, lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { settings } from "../portfolio.js";
const Home = lazy(() => import("../pages/home/HomeComponent"));
const Splash = lazy(() => import("../pages/splash/Splash"));
const Education = lazy(() => import("../pages/education/EducationComponent"));
const Experience = lazy(() => import("../pages/experience/Experience"));
const Opensource = lazy(() => import("../pages/opensource/Opensource"));
const Contact = lazy(() => import("../pages/contact/ContactComponent"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const Error404 = lazy(() => import("../pages/errors/error404/Error"));
const ResumePage = lazy(() => import("../pages/resume/Resume.js"));

export default class Main extends Component {
  componentDidMount() {
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      this.props.theme.imageHighlight,
    );
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.theme &&
      this.props.theme &&
      prevProps.theme.imageHighlight !== this.props.theme.imageHighlight
    ) {
      document.documentElement.style.setProperty(
        "--scrollbar-color",
        this.props.theme.imageHighlight,
      );
    }
  }

  render() {
    const { theme } = this.props;
    return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Suspense fallback={<div role="status">Loading page...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                settings.isSplash ? (
                  <Splash theme={theme} />
                ) : (
                  <Home theme={theme} />
                )
              }
            />
            <Route path="/home/*" element={<Home theme={theme} />} />
            <Route path="/experience" element={<Experience theme={theme} />} />
            <Route path="/education/*" element={<Education theme={theme} />} />
            <Route
              path="/opensource/*"
              element={<Opensource theme={theme} />}
            />
            <Route path="/contact/*" element={<Contact theme={theme} />} />
            {settings.isSplash && (
              <Route path="/splash/*" element={<Splash theme={theme} />} />
            )}
            <Route path="/projects/*" element={<Projects theme={theme} />} />
            <Route path="/resume/*" element={<ResumePage theme={theme} />} />
            <Route path="*" element={<Error404 theme={theme} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }
}
