import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Layout from "./Layout.jsx";

import About from "./components/About/About.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Internship from "./components/Internship/Internship.jsx";
import Referrals from "./components/Referrals/Referrals.jsx";
import MockInterview from "./components/MockInterview/MockInterview.jsx";
import Resume from "./components/Resume/Resume.jsx";
import Contact from "./components/Contact/Contact.jsx";
import FAQs from "./components/FAQ/FAQs.jsx";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="courses" element={<Courses />} />
      <Route path="internship" element={<Internship />} />
      <Route path="referrals" element={<Referrals />} />
      <Route path="mock-interview" element={<MockInterview />} />
      <Route path="resume" element={<Resume />} />
      <Route path="faqs" element={<FAQs />} />
      <Route path="terms" element={<TermsAndConditions />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
