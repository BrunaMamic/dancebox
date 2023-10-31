/* eslint-disable @next/next/no-img-element */
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Router, useRouter } from "next/router";

const Projects = () => {
  const openFacebookGallery = () => {
    window.open(
      "https://www.facebook.com/PlesniStudioDanceBox/photos",
      "_blank"
    );
  };

  return (
    <section className="projects" id="projects">
      <h1 className="heading"> Najnoviji projekti </h1>

      <LightGallery
        onBeforeOpen={() => openFacebookGallery()}
        elementClassNames={"box-container"}>
        <a href="static/projekti19.jpg" className="box">
          <div className="image">
            <img src="static/projekti19.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>@sibenik.dance.festival</h3>
              <p>
                Svako put nam je gušt, ali baš gušt biti na ovoj ambijentalnoj
                pozornici.<br></br>
                Izvrsna organizacija i još bolja logistika festivala svakako
                doprinose da se svake godine prijavljujemo i želimo biti dio
                cijele priče.
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>
        <a href="static/projekti17.jpg" className="box">
          <div className="image">
            <img src="static/projekti17.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Pripreme za @sibenik.dance.festival</h3>
              <p>
                Pripreme su u tijeku, a ove godine po prvi puta izaći ćemo s
                predstavom <br></br>
                pod koreografski palicom Barbare Mamić @mamicbarbara <br></br>U
                predstavi sudjeluju naši članovi koji su u ožujku uspješno
                položili audiciju.<br></br>
                Riječ je o plesačima u rasponu od 7 do 18 godina.<br></br>📷
                @j_a_d_r_o
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>
        <a href="static/projekti16.jpg" className="box">
          <div className="image">
            <img src="static/projekti16.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Mali split 2023</h3>
              <p>
                Izvrstan posao ste napravile drage naše.<br></br>
                Možemo reći da ste mali profesionalci...disciplinirani,
                talentirani, radišni i jako jako zabavni. Guštamo raditi s vama
                i radujemo se unaprijed svim budućim projektima.<br></br>
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>

        <a href="static/projekti15.jpg" className="box">
          <div className="image">
            <img src="static/projekti15.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>#prokurativeplesu</h3>
              <p>
                @splitski.festival <br></br>Great job girls ❤️<br></br>{" "}
                📷Jadranka Luković
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>

      </LightGallery>

      <br />
      <br />
      <div className="galerija">
        <p>
          Foto galerija:
          <a
            href="https://www.facebook.com/PlesniStudioDanceBox/photos"
            className="fab fa-facebook-f ms-3"></a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
