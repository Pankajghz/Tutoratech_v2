import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Course from "./Pages/Course";
import Home from "./Pages/Home";
import Internship from "./Pages/Internship";
import ResumeWritingAndReview from "./Pages/ResumeWritingAndReview";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/courses",
      element: <Course />,
    },
    {
      path: "/internship",
      element: <Internship />,
    },
    {
      path: "/resume-writing-and-review",
      element: <ResumeWritingAndReview />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
