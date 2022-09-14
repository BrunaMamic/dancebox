import type { NextPage } from "next";
// import Swiper from "swiper";
// import { useEffect } from "react";
// import lightGallery from "lightgallery";
import Header from "../components/header";
import ContactSidebar from "../components/contactSidebar";
import Home from "../components/home";
import Info from "../components/info";
import Services from "../components/services";
import Projects from "../components/projects";
import Mentors from "../components/mentors";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import { useState } from "react";

const App: NextPage = () => {
  const [contactSideBarOpen, setContactSideBarOpen] = useState(false);

  return (
    <div>
      <Header
        contactSideBarOpen={contactSideBarOpen}
        setContactSideBarOpen={setContactSideBarOpen}
      />
      {contactSideBarOpen && (
        <ContactSidebar setContactSideBarOpen={setContactSideBarOpen} />
      )}
      <Home />
      <Info />
      <Services />
      <Projects />
      <Mentors />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
