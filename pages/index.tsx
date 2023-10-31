import type { NextPage } from "next";
// import Swiper from "swiper";
// import { useEffect } from "react";
// import lightGallery from "lightgallery";
import Header from "../components/header";
import ContactSidebar from "../components/contactSidebar";
import DocSidebar from "../components/docSidebar";
import Home from "../components/home";
import Info from "../components/info";
import Services from "../components/services";
import Projects from "../components/projects";
import Mentors from "../components/mentors";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import { useState } from "react";
import Plan from "../components/plan";

const App: NextPage = () => {
  const [contactSideBarOpen, setContactSideBarOpen] = useState(false);
  const [docSidebarOpen, setDocSidebarOpen] = useState(false);

  return (
    <div>
      <Header
        contactSideBarOpen={contactSideBarOpen}
        setContactSideBarOpen={setContactSideBarOpen}

        docSidebarOpen={docSidebarOpen}
        setDocSidebarOpen={setDocSidebarOpen}
      />
      {contactSideBarOpen && (
        <ContactSidebar setContactSideBarOpen={setContactSideBarOpen} />
      )}

      {docSidebarOpen && (
        <DocSidebar setDocSidebarOpen={setDocSidebarOpen} />
      )}
      <Home />
      <Info />
      <Services />
      <Plan />
      <Projects />
      <Mentors />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
